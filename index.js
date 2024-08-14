$(document).ready(function() {
    $("h1").css("color","orange");
    $("body").hide();
    $("body").fadeIn(2200);
    
   
});
$("h1").mouseenter(function() {
    $("h1").addClass("abc");
});
$("h1").mouseleave(function() {
    $("h1").removeClass("abc");
});
console.log("hello node");

