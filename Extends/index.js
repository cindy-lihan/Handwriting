// 1.原型链继承
// function Parent() { 
//   this.name = 'cindy'
// }

// Parent.prototype.sayName = function () {
//   console.log("name:",this.name)
// }

// function Child() {  

// }
// Child.prototype = new Parent();
// console.log("Child.prototype",Child.prototype)

// var child1 = new Child();
// child1.sayName();

// 2.借用构造函数
function Parent() { 
    this.names = ['cindy','jack'];
    this.sayNames = function(){
      console.log(this.names);
    }
}
function Child() {
  Parent.call(this);
}

var child1 = new Child();
child1.names.push('rose');
child1.sayNames();

var child2 = new Child();
child2.sayNames();

