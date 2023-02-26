$(document).ready(function(){

    var topsells=$("#topsells");
    var topnew_phones=$("#topnew_phone")
    var topnew_laptops=$("#topnew_laptops")
    var brands=$("#brands_slider")

    product_slider(topsells)
    product_slider(topnew_laptops)
    product_slider(topnew_phones)
    product_slider(brands)


    function product_slider(name){
        name.owlCarousel({
            rtl:true,
            loop:true,
            margin:10,
            autoplay:true,
            responsiveClass:true,
             loop:true,
             margin:10,
             nav:true,
         responsive:{
             0:{
                 items:1,
             },
             600:{
                 items:2,
             },
             1000:{
                 items:5,
             }
         }
     })
    }
})