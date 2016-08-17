// Business Logic
 var leapYearOrNot = function(number){
   if (number % 4 === 0){
     return true;
   }
   else {
     return false;
   }
 };


// User Interface Logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var year = parseInt($("#year").val());
    var leapYear = leapYearOrNot(year);
    $("#output").text(leapYear);
  });
});
