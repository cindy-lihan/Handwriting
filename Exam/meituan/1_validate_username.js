var input = ['Oook','HHhh6','ABCD','meituan','666']
for(let i =0; i<input.length; i++){
     regtest(input[i])
}
// 1.正则表达式
function regtest(str){
  var reg1 = /^[a-zA-Z]{1}/
  var reg2 = /\d/
  var reg3 = /[^a-zA-Z0-9]/
  if(reg1.test(str) && reg2.test(str) && !reg3.test(str)){
    console.log('Accept')
  }else{
    console.log('Wrong')
  }
}
// 2.字符验证
// function validateUserName(str){
//   return first(str)
// }

// function first(str){
//   var reg1 = /^[a-zA-Z]{1}[a-zA-Z0-9]$/
//   var result1 = reg1.test(str);
//   return result1
// }

  

