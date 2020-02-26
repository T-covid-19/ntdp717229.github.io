$(window).scroll(function() {
    if ($(this).scrollTop() > 4100) {
        $('#handna').fadeOut("fast");
    } else if ($(this).scrollTop() > 900) {
        $('#handna').stop().fadeIn("fast");
    } else {
        $('#handna').stop().fadeOut("fast");
    }
});


$(document).ready(function(){
    $("#goTop").click(function(event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop:0,
        },1000)
        
    });
    
$(".turnToContent").click(function(){
var targetId=$(this).attr("href");
var linkScroll=$(targetId).offset().top;
if($(window).width()<400){
linkScroll-linkscroll-60
}
$("html,body").animate({
scrollTop:linkScroll-120},1000);
});
});