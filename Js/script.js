var sliderint=1;
slider(sliderint);
var next_btn=document.getElementById("nex");
next_btn.addEventListener("click",function(){
    next(1);
})
var previous_btn=document.getElementById("prev");
previous_btn.addEventListener("click",function(){
    previous(1)
})
function next(n){
    slider(sliderint +=n)
}
function previous(n){
    slider(sliderint -= n)
}
function slider(n){
    var slides=document.getElementsByClassName("myslider");
    if(n>slides.length){
        sliderint=1;
    }
    if(n<1){
        sliderint=slides.length;
    }

    for(var i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }

    slides[sliderint-1].style.display="block";
}


var sliderint2=1;
slider2(sliderint2);
var next_btn2=document.getElementById("nex2");
next_btn2.addEventListener("click",function(){
    next2(1);
})
var previous_btn2=document.getElementById("prev2");
previous_btn2.addEventListener("click",function(){
    previous2(1)
})
function next2(m){
    slider2(sliderint2 +=m)
}
function previous2(m){
    slider2(sliderint2 -= m)
}
function slider2(m){
    var slides2=document.getElementsByClassName("myslider2");
    if(m>slides2.length){
        sliderint2=1;
    }
    if(m<1){
        sliderint2=slides2.length;
    }

    for(var i=0;i<slides2.length;i++){
        slides2[i].style.display="none";
    }

    slides2[sliderint2-1].style.display="block";
}


var sliderint3=1;
slider3(sliderint3);
var next_btn3=document.getElementById("nex3");
next_btn3.addEventListener("click",function(){
    next3(1);
})
var previous_btn3=document.getElementById("prev3");
previous_btn3.addEventListener("click",function(){
    previous3(1)
})
function next3(f){
    slider3(sliderint3 +=f)
}
function previous3(f){
    slider3(sliderint3 -= f)
}
function slider3(f){
    var slides3=document.getElementsByClassName("myslider3");
    if(f>slides3.length){
        sliderint3=1;
    }
    if(f<1){
        sliderint3=slides3.length;
    }

    for(var i=0;i<slides3.length;i++){
        slides3[i].style.display="none";
    }

    slides3[sliderint3-1].style.display="block";
}


var sliderint4=1;
slider4(sliderint4);
var next_btn4=document.getElementById("nex4");
next_btn4.addEventListener("click",function(){
    next4(1);
})
var previous_btn4=document.getElementById("prev4");
previous_btn4.addEventListener("click",function(){
    previous4(1)
})
function next4(v){
    slider4(sliderint4 +=v)
}
function previous4(v){
    slider4(sliderint4 -= v)
}
function slider4(v){
    var slides4=document.getElementsByClassName("myslider4");
    if(v>slides4.length){
        sliderint4=1;
    }
    if(v<1){
        sliderint4=slides4.length;
    }

    for(var i=0;i<slides4.length;i++){
        slides4[i].style.display="none";
    }

    slides4[sliderint4-1].style.display="block";
}


