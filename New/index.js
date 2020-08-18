// Otaku 御宅族，简称宅
function Otaku (name, age) {
  this.name = name;
  this.age = age;

  this.habit = 'Games';
}

// 因为缺乏锻炼的缘故，身体强度让人担忧
Otaku.prototype.strength = 60;

Otaku.prototype.sayYourName = function () {
  console.log('I am ' + this.name);
}

var person = new Otaku('Kevin', '18');

console.log(person.name) // Kevin
console.log(person.habit) // Games
console.log(person.strength) // 60

person.sayYourName(); // I am Kevin


function objectFactory() {
  var obj = new Object()
  // 取出第一个参数为构造函数。shift 会修改原数组，所以 arguments 会被去除第一个参数
  Constructor = Array.prototype.shift.call(arguments)
  obj.__proto__ = Constructor.prototype;
  Constructor.apply(obj, arguments);
  var ret = Constructor.apply(obj, arguments);
  return typeof ret === 'object' ? ret : obj;
}

var person2 = objectFactory(Otaku,'Kevin','18')
console.log(person2.name) // Kevin
console.log(person2.age) // Games
console.log(person2.habit) // Games
console.log(person2.strength) // 60

person2.sayYourName(); // I am Kevin