
function quickSort(arr, l ,r){
  if (l < r) {
    swap(arr, l + parseInt(Math.random() * (r - l + 1)), r);
    p = partition(arr, l, r);
    quickSort(arr, l, p[0] - 1);
    quickSort(arr, p[1] + 1, r);
  }
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, l, r){
  var less = l-1;
  var more = r;
  while(l < more){
    if(arr[l] < arr[r]){
      swap(arr, ++less,l++)
    }else if(arr[l] > arr[r]){
      swap(arr, --more, l);
    }else{
      l++;
    }
  }
  swap(arr, more, r);
  return [less+1, more];
}

var array = [1,8,9,3,4,3,3,7]
quickSort(array, 0, array.length-1);
console.log(array)