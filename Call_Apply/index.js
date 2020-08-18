// 模拟call和apply的思想
// 核心思想为 1.改变this的指向 2.执行函数
// 例子
// var foo = {
//   value: 1
// };

// function bar() {
//   console.log(this.value);
// }

// bar.call(foo);

Function.prototype.myCall = function (context) {
  var context = context || window;
  // 利用this指向调用该函数的对象
  context._fn = this;
  
  var args = [];
  for(let i = 1, len = arguments.length; i < len; i++){
    args.push('arguments['+i+']');
  }
  var result = eval('context._fn('+args+')')
  delete context._fn
  return result;

}

Function.prototype.myApply = function (context, arr) {
  var context = context || window;
  // 利用this指向调用该函数的对象
  context._fn = this;
  
  var args = [];
  if(! arr){
    result = context._fn();
  }else{
    for(let i = 0, len = arr.length; i < len; i++){
      args.push('arr['+i+']');
    }
    result = eval('context._fn('+args+')')
  }
  delete context._fn
  return result;

}

var value = 2;

var obj = {
    value: 1
}

function bar(name, age) {
    console.log(this.value);
    return {
        value: this.value,
        name: name,
        age: age
    }
}

bar.myCall(null); // 2

console.log(bar.myCall(obj, 'kevin', 18));
bar.myApply(null); // 2

console.log(bar.myApply(obj, ['kevin', 18]));

