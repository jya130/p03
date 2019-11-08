'use strict';

$(window).scroll(function(){
    if ($(window).scrollTop() >= 700) {
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
