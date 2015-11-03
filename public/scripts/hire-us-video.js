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
        player.playVideo();
        played = true;
      }
    });
  }

  function setupPlayer(){
    player.mute();
    player.setLoop(true);
    player.loadVideoById({
      videoId: 'OnoNITE-CLc',
      startSeconds: 87,
      endSeconds: 60,
      suggestedQuality: 'large'
    });

    setTimeout(function(){
      player.pauseVideo();
    }, 0);
  }

  window.addEventListener('load', function(){
    setupPlayer();
    playOnScroll();
  });
})();
