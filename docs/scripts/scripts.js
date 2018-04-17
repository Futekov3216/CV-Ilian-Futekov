$(document).ready(function(){
    let deg = 20;
    $('.carousel').carousel();
    setInterval(function() {
      deg = deg + 20;
      $('.glyphicon-cog').css({
        transform: 'rotate('+ deg +'deg)'
      });
      $('.carousel').carousel('next');
   }, 2000);

   $(window).scroll(function(){
      var $maxScroll=300;
      var $maxScale=1.3;
      var $x=$(window).scrollTop()/1000+1;
      if($(window).scrollTop()>$maxScroll) $x=$maxScale;
          $('.firstSection h1,h2').css({
            transform: 'scale('+$x+','+$x+')'
          });


  });
});
