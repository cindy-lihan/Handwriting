// promise/A+规范的三种状态
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
  constructor(excutor){
    this._status = PENDING     // Promise状态
    this._resolveQueue = [];    // then收集的执行成功的回调队列
    this._rejectQueue = [];     // then收集的执行失败的回调队列
    // 由于resolve/reject是在executor内部被调用, 因此需要使用箭头函数固定this指向, 否则找不到this._resolveQueue
    let  _resolve = (val) => {
      if(this._status !== PENDING){ // 对应规范中的"状态只能由pending到fulfilled或rejected"
        return 
      }
      this._status = FULFILLED
      while(this._resolveQueue.length > 0){
        const callback = this._resolveQueue.shift();
        callback(val);
      }
    }
    let  _reject = (val) => {
      if(this._status !== PENDING){
        return 
      }
      this._status = REJECTED
      while(this._rejectQueue.length > 0){
        const callback = this._rejectQueue.shift();
        callback(val);
      }
    }
    // new Promise()立即执行excutor,并传入resolve和reject
    excutor(_resolve,_reject);
  }

  // then方法，接收一个成功回调和失败回调，并push入队列
  then(resolveFn, rejectFn) {
    // return一个新的promise
    return new MyPromise((resolve, reject) => {
    //把resolveFn重新包装一下,再push进resolve执行队列,这是为了能够获取回调的返回值进行分类讨论
      const fulfilledFn = value =>{
        try {
          //执行第一个（当前的）Promise的成功回调，并获取返回值
          let x = resolveFn(value)
          //分类讨论返回值,如果是Promise,那么等待Promise状态变更,否则直接resolve
          //这里resolve之后，就能被下一个.then()的回调获取到返回值，从而实现链式调用
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
        } catch(error){
          reject(error);
        }
      }
      //把后续then收集的依赖都push进当前Promise的成功回调队列中(_rejectQueue), 这是为了保证顺序调用
      this._resolveQueue.push(fulfilledFn);

      //reject同理
    const rejectedFn  = error => {
      try {
        let x = rejectFn(error)
        x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
      } catch (error) {
        reject(error)
      }
    }
    this._rejectQueue.push(rejectedFn)
  })
 }
}
