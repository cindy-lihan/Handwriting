// bind返回绑定好的函数
Function.prototype.myBind = function(context){
  let fn = this;
  let arg = Array.prototype.slice.call(arguments, 1);

  var fNOP = function () {};

  //如果是构造函数调用，则不绑定this，参数保持

}