// call是若干个参数  apply是数组


Function.prototype.myApply = function(context,args){
  context = context || window;
  args = args || [];

  
  // 调用的对象即为this
  // 独一无二的属性避免覆盖原有属性
  const func = Symbol();
  context.func = this;
  // 调用这个函数
  // 执行这个函数
  const res =  context.func(...args);
  
  delete context.func;
  
  return res;
 
}
function bar(name, age) {
  console.log(name)
  console.log(age)
  console.log(this.value);
}

bar.myApply(foo, ['kevin', 18]); 