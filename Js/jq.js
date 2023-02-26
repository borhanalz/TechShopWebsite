
$(document).ready(function () {

    function hovers(btn,object){
        $(btn).hover(function(){
            $(object).toggle();
        })
    }
    hovers("#category_text",".submenu_category");
    hovers(".news",".submenu_news");
    hovers(".services",".submenu_service");


    $(".toggle img").click(function(){
        
        $(".menu_small").show();

        if($(".menu_small").show()){
        $("body").append("<div class='fog'></div>");
            $(".fog").click(function(){
                $(".menu_small").hide();
                $(".fog").remove();
            })
        }
    })

    $("#exit_small_menu").click(function(){
        $(".fog").remove();
        $(".menu_small").hide();
    })

    $(".category_small").click(function () {
        $(".slide_category").slideToggle();
    })

    $(".news_small").click(function(){
        $(".slide_news").slideToggle();
    })

    $(".services_small").click(function(){
        $(".slide_service").slideToggle();
    })


    $(".signup_text").click(function(){
        $("#signin_div").hide();
        $("#signup_div").show();

        $("#signin_div2").hide();
        $("#signup_div2").show();

        if($(".signin_ac").hasClass("active2")){
            $(".signin_ac").removeClass("active2");
            $(".signup_ac").addClass("active2");
        }

    })

    $(".signin_text").click(function(){
        $("#signup_div").hide();
        $("#signin_div").show();

        $("#signin_div2").show();
        $("#signup_div2").hide();

        if($(".signup_ac").hasClass("active2")){
            $(".signup_ac").removeClass("active2");
            $(".signin_ac").addClass("active2");
        }

    })
   

    $(".sign_wide").hover(function () {
        $(".signs").toggle();     
    });

    $(".sign_small").click(function () {
        if($(".items").hasClass("open")){
            $(".items").removeClass("open");
            $(".items").hide();
            $(".signs_small").addClass("open");
            $(".signs_small").show();
        }else{
            $(".items").addClass("open");
            $(".items").show();
            $(".signs_small").removeClass("open");
            $(".signs_small").hide();
        }
    });


    //Validations

    $("#sub_signin").click(function() {
        var usernamelogin=$("#username_login").val();
        var error1=$("#error1");
        var passwordlogin=$("#password_login").val();
        var error2=$("#error2");
        Validation1(usernamelogin,error1);
        validations2(passwordlogin,error2);
    })

    $("#sub_signup").click(function() {
        var usernamesignup=$("#username_signup").val();
        var error3=$("#error3");
        var email_signup=$("#email_signup").val();
        var error4=$("#error4");
        var passwordsignup=$("#password_signup").val();
        var error5=$("#error5");
        Validation1(usernamesignup,error3);
        Validation1(usernamesignup,error4);
        validations2(passwordsignup,error5);
    })

    $("#sub_signin_small").click(function(){
       var username_signin_small=$("#username_signin_small").val();
       var password_signin_small=$("#password_signin_small").val();
       var error6=$("#error6");
       var error7=$("#error7");

       Validation1(username_signin_small,error6);
        validations2(password_signin_small,error7);
    })

    $("#sub_signup_small").click(function () {
      var username_signup_small=$("#username_signup_small").val();
      var email_signup_small=$("#email_signup_small").val();
       var password_signup_small=$("#password_signup_small").val();
       var error8=$("#error8");
       var error9=$("#error9");
       var error10=$("#error10");

       Validation1(username_signup_small,error8);
       Validation1(email_signup_small,error9);
       validations2(password_signup_small,error10)
    })


    function Validation1(input1,errornum1){
        if(input1==""){
            $(errornum1).css("color","red");
        }
        else{
           $(errornum1).css("color","transparent");

           if(isNaN(input1)){
               $(errornum1).css("color","transparent");
           }else {
               $(errornum1).css("color","red");
           }
         }
    }

    function validations2(input,errornum){
        if(input==""){
            $(errornum).css("color","red");
        }
         else{
           $(errornum).css("color","transparent");
         }
    }

    $("#sabt").click(function(e){
        e.preventDefault();
    })

    $(".submenu_mobiles").hover(function() {
        $(".sublayer_mobiles").toggle();
    })

    $(".submenu_laptops").hover(function(){
        $(".sublayer_laptops").toggle();
    })

    $(".submenu_monitors").hover(function(){
        $(".sublayer_monitors").toggle();
    })

    $(".submenu_accessories").hover(function(){
        $(".sublayer_accessories").toggle();
    })



    $(".submenu_mobile_small").click(function() {
        $(".sublayer_mobiles_small").slideToggle();
    })

    $(".submenu_laptop_small").click(function() {
        $(".sublayer_laptop_small").slideToggle();
    })

    $(".submenu_monitor_small").click(function() {
        $(".sublayer_monitor_small").slideToggle();
    })

    $(".submenu_accessories_small").click(function() {
        $(".sublayer_accessories_small").slideToggle();
    })


    $("#product1").click(function() {
        window.location.assign("../HTML/product1.html")
    })

    $("#landing").click(function(){
        window.location.assign("../HTML/index.html")
    })

    $("#black").click(function(){
        if($("#blue").hasClass("active_color")){
            $("#blue").removeClass("active_color");
        }
        if($("#white").hasClass("active_color")){
            $("#white").removeClass("active_color");
        }
        if($("#gold").hasClass("active_color")){
            $("#gold").removeClass("active_color");
        }
        $("#black").addClass("active_color");
    })

    $("#white").click(function(){
        if($("#blue").hasClass("active_color")){
            $("#blue").removeClass("active_color");
        }
        if($("#black").hasClass("active_color")){
            $("#black").removeClass("active_color");
        }
        if($("#gold").hasClass("active_color")){
            $("#gold").removeClass("active_color");
        }
        $("#white").addClass("active_color");
    })

    $("#gold").click(function(){
        if($("#blue").hasClass("active_color")){
            $("#blue").removeClass("active_color");
        }
        if($("#white").hasClass("active_color")){
            $("#white").removeClass("active_color");
        }
        if($("#black").hasClass("active_color")){
            $("#black").removeClass("active_color");
        }
        $("#gold").addClass("active_color");
    })

    $("#blue").click(function(){
        if($("#black").hasClass("active_color")){
            $("#black").removeClass("active_color");
        }
        if($("#white").hasClass("active_color")){
            $("#white").removeClass("active_color");
        }
        if($("#gold").hasClass("active_color")){
            $("#gold").removeClass("active_color");
        }
        $("#blue").addClass("active_color");
    })

    $(".num").hover(function(){
        $(".shoppting_cart_div").toggle()
    })

})



