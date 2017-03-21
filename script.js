//sets element to the variable $pic
var $pic = $("#pic"); 

$pic.click(function(){
   //Your code goes here
   $("#pic").css("top",$("#pic").offset().top + 40);
setInterval(function(){
    $("#pic").css("top",$("#pic").offset().top + 40);
}, 1000)
})

       
  