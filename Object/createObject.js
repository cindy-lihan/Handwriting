// 1.工厂模式 （缺点：对象无法识别）
function createPerson(name, age) { 
  var obj = new Object();
  obj.name = name;
  obj.age = age ;
  obj.sayName = function () {  
    console.log("name",this.name)
  }
  return obj;
}

// 2.构造函数模式（缺点：方法多次创建）
// function Person(name,age) { 
//   this.name = name;
//   this.age = age;
//   this.sayName = function () {  
//     console.log("name",this.name)
//   }
//  }

// 3.原型模式（缺点：引用类型共享会互相影响）
// function Person(){};
// Person.prototype.name = "cindy";
// Person.prototype.age = 18;
// Person.prototype.sayName = function () {  
//     console.log("name",this.name)
// }

// 3.1 优化原型模式（缺点：引用类型共享）
// Person.prototype = {
//   constructor: Person,
//   name: "cindy",
//   friends: ["shuyu","shanshan"],
//   age: 18,
//   sayName : function () {  
//     console.log("name",this.name)
//   }
// }

// 4. 组合模式 (私有属性用构造函数，共有属性和方法用原型)
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.friends = ["shuyu","shanshan"];
// }

// Person.prototype = {
//   constructor: Person,
//   sayName : function () {  
//     console.log("name",this.name)
//   }
// }
// 4.1 动态原型模式
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.friends = ["shuyu","shanshan"];
//     if(typeof this.sayName != "function"){
//       // Person.prototype.sayName = function(){
//       //   console.log(this.name)
//       // }
//       Person.prototype = {
//         constructor: Person,
//         sayName: function () {
//             console.log(this.name);
//         }
//     }
//     }
//   }
  
// 5.寄生构造函数模式
// function Person(name, age) { 
//   var obj = new Object();
//   obj.name = name;
//   obj.age = age ;
//   obj.sayName = function () {  
//     console.log("name",this.name)
//   }
//   return obj;
//  }

// 6.稳妥构造函数模式
function person(name){
  var o = new Object();
  o.sayName = function(){
      console.log(name);
  };
  return o;
}

var person1 = person('kevin');

person1.sayName(); // kevin

person1.name = "daisy";

person1.sayName(); // kevin

console.log(person1.name); // daisy


// var person1 = createPerson("cindy", 18);
// var person2 = createPerson("jack", 28);
// var person1 = new Person("cindy", 18);
// console.log(person1.name);
// console.log(person1.age);
// person1.sayName();
// var person2 = new Person();
// person2.name = "jack";
// person2.age = 28;
// person2.sayName();

// person2.friends.push("huihui");
// console.log(person1.friends);
// console.log(person2.friends);




