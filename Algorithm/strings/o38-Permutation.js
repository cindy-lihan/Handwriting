/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(str) {
  // write code here
         var temp=[]// 用于存放所有全排列的数组
         if(str.length==0) return []
         if(str.length==1){
             //如果当前的字符串长度维1或者长度为0  那么直接返回该字符串即可
             temp.push(str)
         }else{
             // 反之  遍历该字符串
             var  map={}
             for(var i=0;i<str.length;i++){
                 //取出当前字符
                var  s= str[i]
                //将剩余的字符拼接为一个新的字符串
                if(!map[s]){
                var  newStr=str.slice(0,i)+str.slice(i+1,str.length)
                // 对新的字符串进行全排列--返回结果
                var l = permutation(newStr)
                // 遍历返回的全排列  在每个全排列的字符串前面加上取出的字符s
                for(var j=0;j<l.length;j++){
                    var t = s+l[j]
                    temp.push(t)//加入到结果数组中
                }
                 map[s]=true
               }
             }
         }
     return  temp
 };

 console.log(permutation("aa"))
 