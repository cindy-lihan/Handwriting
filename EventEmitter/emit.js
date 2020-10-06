class EventEmitter{
  constructor(elem, props){
    this.events = {}
  }
  //可接受数组，监听多个事件
  on(event, callback){
    //监听的事件为数组，则递归调用
    if(Array.isArray(event)){
      event.forEach(item =>{
        this.on(item, callback)
      })
    }else{
      (this.events[event] || (this.events[event]=[])).push(callback)
    }
  }

  off(event, callback){
    // 不传参数，则清空所有事件的监听
    if(! arguments.length){
      this.events = Object.create(null);
    }
    //传的是数组，对数组每个事件递归调用off方法
    if(Array.isArray(event)){
      event.forEach(item =>{
        this.off(item, callback)
      })
    }
    // 获取当前event的所有回调函数
    const cbs = this.events[event]

    // 如果不存在回调，则直接返回
    if(!cbs){
      return 
    }

    // 如果没有指定回调函数，则移除该事件下的所有回调函数
    if(!callback){
      this.events[event] = null
    }

    // 指定了回调函数
    let cb
    let i = cbs.length
    while(i--){
      cb = cbs[i]
      // 在事件对应的回调函数数组里面找出要移除的回调函数，并从数组里移除
      // cb.callback === callback是对once事件的移除
      if(cb === callback || cb.callback === callback){
        cbs.splice(i, 1)
        break;
      }
    }

  }

  emit(event,...args){
    let cbs = this.events[event]
    if(cbs){
      // $emit方法可以传参，这些参数会在调用回调函数的时候传进去
      cbs.forEach(cb =>{
        cb.apply(this, args)
      })
    }

  }
  once(event, callback){
    //封装一个函数on 在on里面调用callback
    function fn(){
     // 每当执行了一次fn，移除event里的fn事件，后面再触发event事件就不会再执行fn事件了，也就不会执行fn里面的callback事件
      this.off(event, fn)
      callback.apply(this, arguments);
    }
    // 这个赋值是在$off方法里会用到的
    // 比如我们调用了vm.$off(callback)来移除callback回调函数，然而我们在调用$once的时候，实际执行的是vm.$on(event, on)
    // 所以在event的回调函数数组里添加的是on函数，这个时候要移除callback，我们无法在回调函数数组里面找到callback函数移除，只能找到on函数
    // 我们可以通过on.callback === callback来判断这种情况，并在回调函数数组里移除on函数
    fn.callback = callback;
    this.on(event, fn)

  }

}

const eventEmit = new EventEmitter();

const handle = (...rest) => {
  console.log("emit",rest);
};

eventEmit.on(["click","scroll"], handle);

eventEmit.emit("click", 1, 2, 3, 4);

eventEmit.off("click", handle);
eventEmit.emit("scroll", 1,3,5);

eventEmit.emit("click", 1, 2);

eventEmit.once("dbClick", () => {
   console.log(123456);
});

// eventEmit.off("dbClick")
eventEmit.emit("dbClick");
eventEmit.emit("dbClick");