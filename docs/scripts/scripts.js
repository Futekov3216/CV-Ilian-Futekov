$(document).ready(function(){
  $('.carousel').carousel();
  setInterval(function() {
   $('.carousel').carousel('next');
 }, 2000);
});
