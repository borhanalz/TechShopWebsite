var kharid=document.getElementById('kharid1');
kharid.addEventListener("click",cart_added)

function cart_added(){

    document.getElementById("check_cart").style.display="none";
   
    var pro_name=document.getElementById("product_name");
    var pro_img=document.getElementById("imgmain");
    var pro_price=document.getElementById("price");

    var my_li=document.createElement("li");
    var my_name=document.createElement("p");
    var my_price=document.createElement("div");
    var my_ul=document.getElementById("shopping_cart");
    var my_img=document.createElement("img");
    
    my_ul.appendChild(my_li)
    my_name.innerHTML=pro_name.innerHTML;
    my_li.appendChild(my_img)
    my_li.appendChild(my_name)
    my_li.appendChild(my_price)
    my_img.src="../Images/9db64cde85334e3bf4a6571547d339c57867f11f_1634032209-removebg-preview.png";
    my_price.innerHTML=pro_price.innerHTML;


}
