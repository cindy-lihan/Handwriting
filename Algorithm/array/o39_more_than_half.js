function MoreThanHalfNum_Solution(numbers)
{
    // write code here
    let start = 0;
    let end = numbers.length-1;
    let middle = numbers.length >> 1;
    let index = partition(numbers, start, end)[1];
    while(middle!=index){
        if(index < middle){
            start = index+1;
            index = partition(numbers, start, end)[1];
        }else{
            end = index-1;
            index = partition(numbers, start, end)[1];

        }
    }
    let result = numbers[middle];
    if(!checkMoreThanHalf(numbers,result)){
        result =0;
    }
    return result;
}

function checkMoreThanHalf(numbers, result){
    let times  = 0;
    let moreThanHalf = true;
    for(let i = 0; i<numbers.length; i++){
        if(numbers[i] == result){
            times ++;
           
        }
    }
    if(times * 2 <= numbers.length){
        moreThanHalf = false;
    }
    return moreThanHalf;
}

function partition(numbers, l, r){
    let less = l-1;
    let more = r;
    while(l < more){
        if(numbers[l] < numbers[r]){
            swap(numbers, ++less, l++);    
        }else if(numbers[l] > numbers[r]){
            swap(numbers, --more, l);  
        }else{
           l++;
        } 
    }
    swap(numbers, more, r);
    return [less+1,more]
    
}
function swap(numbers, i ,j){
    let tmp = numbers[i];
    numbers[i] = numbers[j];
    numbers[j] = tmp;
}

let input = [4,2,1,4,2,4]
console.log(MoreThanHalfNum_Solution(input));