'use strict';

var header_content = document.querySelector("#header_content");
const currentScroll = window.pageYOffset;


// https://www.w3schools.com/howto/howto_js_sticky_header.asp
$(window).scroll(function(){
    if ($(window).scrollTop() >= 130) {
        $('.header_content').addClass('fixed_header');

        console.log("header fixed to the top");
    }
    else {
        $('.header_content').removeClass('fixed_header');
        console.log('header not not fixed to the top');
    }

    if($(window).scrollTop() >= 50){
        $('.hamburgur').addClass('fixed_ham');
    }
    else {
        $('.hamburgur').removeClass('fixed_ham');
    }
});


function openNav(){
  console.log('side navigation opened');
  document.getElementById("mySidenav").style.width = "200px";
  $('.icon').addClass('hidden');
}

function closeNav(){
  console.log('side navigation closed');
  document.getElementById("mySidenav").style.width = "0px";
  $('.icon').removeClass('hidden');
}
