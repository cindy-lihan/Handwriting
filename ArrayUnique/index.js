// 数组去重
// 1.双层循环【兼容性好】
// function unique(arr){
//   var res = []
//   for(var i =0 ; i < arr.length;i++){
//     for(var j = 0; j < res.length; j++){
//       if(arr[i] === res[j]){
//         break;
//       }
//     }
//     // 如果array[i]是唯一的，那么执行完循环，j等于resLen
//     if(j === res.length){
//       res.push(arr[i])
//     }
//   }
//   return res
// }
//2.用indexOf简化内层循环
// function unique(arr){
//   var res = []
//   for(var i =0 ; i < arr.length;i++){
//     var current = arr[i];
//     if(res.indexOf(current) === -1){
//       res.push(current)
//     }
//   }
//   return res
// }

//3. 排序后去重
// function unique(arr){
//   var res  = [];
//   var sortedArray = arr.concat().sort();
//   var seen ;
//   for(let i = 0, len = sortedArray.length; i< len; i++){
//     //如果是第一个元素或者相邻的元素不相同
//     if(!i || seen !== sortedArray[i]){
//       res.push(sortedArray[i])
//     }
//     seen = sortedArray[i]


//   }
//   return res;
// }


//4. Set
// function unique(arr){
//   return Array.from(new Set(arr));
// }

// 4.组合排序和未排序的方法  - unique API
//参数 isSorted 判断传入的数组是否是已排序的，如果为 true，就判断相邻元素，如果为 false，就用 indexOf 进行判断

// function unique(arr,isSorted){
//   var res = [];
//   var seen;
//   for(var i=0, len = arr.length; i < len; i++){
//     var val = arr[i];
//     if(isSorted){
//       如果是第一个元素或者相邻的元素不相同
//     if(!i || seen !== sortedArray[i]){
//       res.push(sortedArray[i]);
//     }
//       seen = val;
//     }else{
//       if(res.indexOf(val) === -1){
//         res.push(val);
//       }
//     }
//   }
//   return res;
// }

// 优化：考虑特殊处理，例如字母的大小写视为一致，比如'a'和'A'

function unique(arr, isSorted, iteratee){
  var res = [];
  var seen;
  for(var i=0, len = arr.length; i < len; i++){
    var val = arr[i];
    var computed = iteratee ? iteratee(val, i, arr) : val;
    if(isSorted){
      如果是第一个元素或者相邻的元素不相同
    if(!i || seen !== sortedArray[i]){
      res.push(sortedArray[i]);
    }
      seen = val;
    }else{
      if(res.indexOf(val) === -1){
        res.push(val);
      }
    }
  }
  return res;
}

var array = [1, 2, 3, 1, '1', '1'];
var array2 = [1, 1,1,1,2, 3];

console.log(unique(array2),true)