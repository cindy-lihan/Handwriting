// 此段放在body便签中
function jsonp(url, options){
  //超时处理
  const { timeout } = options;
  return new Promise((resolve, reject) => {
    //为了防止函数名冲突,函数名字增加
    let funcName = `jsonp${Date.now()}`
    let time = null;
    let scriptNode; 
    // 定义callback函数
    window[funcName] = function(data) {
      if(timeout) clearTimeout;
      resolve(data);
      // 很重要的性能优化点
      // 清除本次请求产生的回调函数和script标签
      delete window[funcName];
      document.body.removeChild(scriptNode);
    }

    // 创建script标签
    scriptNode = document.createElement('script');
    scriptNode.src = `${url}/jsonp?callback=${funcName}`;
    // 发出请求
    document.body.appendChild(scriptNode);
    time = setTimeout(() => {
      reject('network err, timeout')
    }, timeout)
    // 失败
    scriptNode.onerror = function(err) {
      reject(err);
    }
  })
}
jsonp('http://localhost:9090/api',{timeout : 3000})
.then(res => {
  console.log("data:",res);
  document.querySelector('#acc_money').innerHTML=res.money;
})
.catch(err => {
  console.log("error:",err);
})
