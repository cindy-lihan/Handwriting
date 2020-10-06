function quickSort_detail(arr, left, right) {
  var len = arr.length;
  var partitionIndex;
  left = typeof left !== 'number' ? 0 : left;
  right = typeof right !== 'number' ? len - 1 : right;

  // 如果需要排序的起始索引小于终止索引则执行排序;递归的终止条件；
  if (left < right) {

      // partition的返回值作为partitionIndex来分隔数组；
      // 索引partitionIndex左边的元素均小于arr[partitionIndex]；
      // 右边的元素均大于arr[partitionIndex]；
      partitionIndex = partition(arr, left, right);

// 数组中小于arr[partitionIndex]的部分(索引left到partitionIndex-1)再次使用quickSort排序；
      quickSort(arr, left, partitionIndex - 1);

// 数组中大于arr[partitionIndex]的部分(索引partitionIndex+1到right)再次使用quickSort排序；
      quickSort(arr, partitionIndex + 1, right);
  }
  // 递归执行直到不满足left<right;返回本身；
  return arr;
}

function partition(arr, left, right) {
  /*
   * 这部分是具体实现排序的部分；
   * 将left赋值给pivot，作为参照物，因为left在最左边，只需要从左到右比较一遍即可判断整个数组；
   * index索引是arr中待交换位置；
   */
  var pivot = right;
  var index = left;
  // for循环从参照物arr[pivot]下一个元素arr[pivot+1]开始一直比较到子数组结束arr[right]；
  for (var i = index; i < right; i++) {

// 循环中如果有任何小于参照物的，就将他交换到index的位置，然后index向右移动到下一个位置；
      if (arr[i] < arr[pivot]) {
          swap(arr, i, index);
          index++;
      }
  }
  /*
   * 因为每次都是交换完后index移动到下一个位置，所以在循环结束时，index仍为待交换的位置；
   * 此时索引pivot+1到index-1的元素都小于参照物arr[pivot]；
   */

  // 交换pivot和index-1索引的值之后index-1索引左边全都是小于arr[index-1]的元素；
  swap(arr, pivot, index);

  // 返回index作为拆分子数组的分界线；
  return index;
}
/*
* 普通的交换，将a[i]和a[j]的数值交换；
*/
function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}



// 快排
function quickSort(arr, l, r){
  if(l < r){
    const mid = partition1(arr,l,r);
    quickSort(arr, l, mid-1);
    quickSort(arr, mid+1, r);
  }
}

function swap(arr,i ,j){
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function partition1(arr, l, r){
  //选择最后一个元素为基准点
  const pivot = arr[r];
  // i是初始化为起始下标的前一个
  var index = l;
  for(var j = index; j<r;j++){
    if(arr[j]<pivot){
      swap(arr,j,index);
      index++;
    }
  }
  swap(arr, index, r);
  return index;
}

// var array = [1,8,9,3,4,12,3]
// quickSort(array, 0, array.length-1);
// console.log(array)


var array = [1,8,9,3,4,3,3,7]
quickSort(array, 0, array.length-1);
console.log(array)

