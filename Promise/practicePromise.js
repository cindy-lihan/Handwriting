let imgUrl = "https://c-ssl.duitang.com/uploads/item/201803/09/20180309203626_qgnvp.jpeg";

function getImg(url) {  
  const p = new Promise((resolve, reject) => {
    let img = document.createElement('img');

    img.onload = () => {
      resolve(img)

    }

    img.onerror = () => {
      const err = new Error(`图片加载失败 ${src}`)
      reject(err)
    }
    img.src = url;

  })
  return p;
}

getImg(imgUrl).then((img) => {
  console.log(img.width);
  return img;
}).then((img) => {
  console.log(img.height);
}).catch((err) => {
  console.log(err);
})
  
