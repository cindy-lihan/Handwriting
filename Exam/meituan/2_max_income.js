var n = 6;
var m = 3;
var input = [
  {price:10,weight:7},
  {price:10,weight:7},
  {price:15,weight:5},
  {price:15,weight:5},
  {price:10,weight:8},
  {price:10,weight:8}]

  var orders = []
for(let i = 1; i<=n; i++){
    //价格
    let price= parseInt(input[i-1].price)
    // 重量
    let weight = parseInt(input[i-1].weight)
    let order = {}
    order.id = i;
    order.money = price + weight*2;
    orders.push(order);
}
var compare = function(obj1, obj2){
    if(obj1.money < obj2.money){
        return 1
    }else if(obj1.money > obj2.money){
        return -1
    }else{
        if(obj1.id < obj2.id){
            return -1
        }else{
            return 1
        } 
    }
}
//排序
orders.sort(compare)

var results = []
for(let j = 0; j<m; j++){
  results.push(orders[j].id)
}
results = results.sort()
var res = "";
for(let j = 0; j<m; j++){
  res = res+ results[j] + " "
}
console.log(res.substr(0,res.length-1))