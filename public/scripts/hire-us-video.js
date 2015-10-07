(function(){
  function playOnScroll(){
    var NEAR_OFFSET = 50;
    var contactOffset = document
                        .querySelector('#contact-wrapper')
                        .offsetTop;
    var played = false;
    
    window.addEventListener('scroll', function(event){
      if( 
          window.scrollY >= ( contactOffset - NEAR_OFFSET ) &&
          !played
      ){
        played = true;
        player.loadVideoById({
          videoId: 'OnoNITE-CLc',
          startSeconds: 87,
          endSeconds: 60,
          suggestedQuality: 'large'
        });
      }
    });
  }

  function setupPlayer(){    
    player.mute();
    player.setLoop(true);
  }

  window.addEventListener('load', function(){
    setupPlayer();
    playOnScroll();
  });
})();