// Business Logic
 var leapYear = function(number){
  //  if (){
     return false;
  //  }
 };


// User Interface Logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var year = parseInt($("#year").val());
    $("#output").text(leapYear);
  });
});
