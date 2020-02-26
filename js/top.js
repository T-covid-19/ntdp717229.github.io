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