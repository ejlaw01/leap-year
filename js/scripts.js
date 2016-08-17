// Business Logic
 var leapYearOrNot = function(number){
   if ((number % 4 === 0) && (number % 100 !== 0) || (number % 400 === 0)){
     return true;
   } else {
     return false;
   }
 };

// User Interface Logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var year = parseInt($("#year").val());
    var leapYear = leapYearOrNot(year);
    debugger;
    if (!year) {
      alert("Write a number, please!");
    } else {
      $("#output").text(leapYear);
    }
  });
});
