$(document).ready(function(){
    let deg = 20;
    $('.carousel').carousel();
    setInterval(function() {
      deg += 20;
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
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()  +1; //January is 0!
  var yyyy = today.getFullYear();
  let elem = document.getElementsByClassName('now')[0]

  if ( dd < 10 ) {
      dd = '0'+ dd
  } 

  if( mm < 10 ) {
      mm = '0'+ mm
  } 

  today = dd + '/' + mm + '/' + yyyy;
  elem.innerHTML = today
  });
