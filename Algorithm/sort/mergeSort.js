/*
核心思想：左侧部分排好顺序，右侧部分排好顺序，
再设立一个辅助数组，再整体外排。
*/
function mergeSort(arr, l ,r){
    if(r === l){
        return;
    }
    let mid = l + parseInt((r-l)/2); //防止l+r溢出,要用位运算或者转int 否则会等于小数
    mergeSort(arr, l, mid);
    mergeSort(arr, mid+1, r);
    merge(arr, l, mid, r);
}

function merge(arr, l, m, r){
    let helper = [];
    let i= 0;
    let p1 = l;
    let p2 = m+1;
    // 都没有越界
    while(p1 <=m && p2<=r){
        helper[i++]= arr[p1] < arr[p2] ? arr[p1++] :arr[p2++];
    }
    //必有一个没有越界
    while(p1 <=m){
        helper[i++] = arr[p1++]

    }
    while(p2<=r){
        helper[i++] = arr[p2++]
    }
    for(let j=0; j< helper.length; j++){
        arr[l+j] = helper[j];
    }
}


let arr = [1,2,4,12,4,9,33,23,13]
console.log('排序前',arr)
mergeSort(arr, 0, arr.length-1)
console.log('排序后',arr)