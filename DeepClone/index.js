//深拷贝
function deepClone(obj,hash = new WeakMap()){
  if(obj === null){
    return obj;
  }
  if(obj instanceof Date) return new Date(obj);
  if(obj instanceof RegExp) return new RegExp(obj);
  // 对于普通的值和函数，不需要深拷贝
  if(typeof obj !== "object"){
    return obj;
  }
  // 是对象则要进行深拷贝
  if(hash.get(obj)) return hash.get(obj);
  // 找到的是所属类原型上的constructor,而原型上的constructor指向的是当前类本身
  //不用单独考虑数组
  let cloneObject = new obj.constructor();

  hash.set(obj, cloneObject);

  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      cloneObject[key] = deepClone(obj[key],hash)
    }
  }
  return cloneObject;
  
}

let obj = { name: 1, address: { x: 100 }, titles:[1,2,3] };
obj.o = obj; // 对象存在循环引用的情况
let d = deepClone(obj);
obj.address.x = 200;
obj.titles.push(5)
console.log("dd",d);
console.log("object",obj)

class Single {
  //ES6类的静态方法（只能直接由类名调用的方法）：static getInstance
  //ES6类的静态属性：直接挂载在类名上的方法，如：Single.instance()
  static getInstance() {
     Single.incrementId();
      if (!Single.instance) {
        Single.instance = new Single();
          return Single.instance
      }
      return Single.instance;
  }
  constructor(){
    this._id = Single.incrementId();
  }

  static incrementId() {
    if (!this.latestId) this.latestId = 1
    else this.latestId++
    return this.latestId
  }
}


