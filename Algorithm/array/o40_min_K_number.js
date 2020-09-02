// function GetLeastNumbers_Solution(input, k)
// {
//     let res = []
//     let start = 0;
//     let end = input.length-1;
//     let index = partition(input,start,end)[1];
//     while(index !== k-1){
//         if(index < k-1){
//             start = index + 1;
//             index = partition(input,start,end)[1];
//         }else {
//             end = index -1;
//             index = partition(input,start,end)[1];
//         }
//     }
//     // 第m大的数
//     for(let i = 0; i<k; i++){
//         res.push(input[i]);
        
//     }
//     return res;
// }

// function partition(numbers, l, r){
//     let less = l-1;
//     let more = r;
//     while(l < more){
//         if(numbers[l] < numbers[r]){
//             swap(numbers, ++less, l++);    
//         }else if(numbers[l] > numbers[r]){
//             swap(numbers, --more, l);  
//         }else{
//            l++;
//         } 
//     }
//     swap(numbers, more, r);
//     return [less+1,more];
// }
// function swap(numbers, i ,j){
//     let tmp = numbers[i];
//     numbers[i] = numbers[j];
//     numbers[j] = tmp;
// }
// let input = [4,5,1,6,2,7,3,8]
// console.log(GetLeastNumbers_Solution(input,4))

function GetLeastNumbers_Solution(arr, k)
{
    // write code here
    function quickSort(left, right) {
    if (left >= right) return
    var i = left; var j = right - 1;
    while (true) {
        while (arr[i] < arr[right]) { i++ }
        while (arr[j] > arr[right]) { j-- }
        if (i < j) {
            let tem1 = arr[i]
            arr[i] = arr[j]
            arr[j] = tem1
        } else {
            break
        }
    }
    let tem = arr[i]
    arr[i] = arr[right]
    arr[right] = tem

    quickSort(left, i - 1)
    quickSort(i + 1, right)
}

function a(arr) {
    quickSort(0, arr.length - 1)
}
    a(arr);
    let res=[]
    for(let i in arr){
        if(i<k){
        res.push(arr[i])
        }
    }
    if(arr.length<k){
        return []
    }else{
            return res
    }

    
}
