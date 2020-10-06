function ajax(url){
  return new Promise((resolve, reject)=>{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if(xhr.readyState !=4){
        return
      }
       if(xhr.readyState ==4 && xhr.status == 200){
         resolve(xhr.responseText)
      }else{
        reject('error')
      }
    }
    xhr.open('get', url)
    xhr.send()
  })
}
