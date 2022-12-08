$(document).ready(function(){
    $('.menu-bar-show ').click(function(){
    $('.menu').addClass("menu-bar ");
    $('.ul').addClass('slider')
});
$('.menu-bar-hide').click(function(){
    $('.menu').removeClass("menu-bar")
    $('.ul').removeClass('slider')
});
})