var img1=document.getElementById("img1");
var img2=document.getElementById("img2");
var img3=document.getElementById("img3");
var img4=document.getElementById("img4");

img1.addEventListener("click",function(){
   setTimeout(gallery(this),)
})

img2.addEventListener("click",function(){
    gallery(this)
})

img3.addEventListener("click",function(){
    gallery(this)
})

img4.addEventListener("click",function(){
    gallery(this)
})

function gallery(img){

var mainimage=document.getElementById("imgmain");

mainimage.src=img.src;
}




