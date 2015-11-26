(function(window){
  window.addEventListener('DOMContentLoaded', function(){
    var navLinks = document.querySelector('nav .links');

    navLinks.addEventListener('click', delegateEventTo('a', function(event){
      event.preventDefault();

      var menuHeight = navLinks.clientHeight;

      goToAnchorEl(event, menuHeight);
    }));
  });

  function delegateEventTo(child, callback){
    return function(event){
      if( event.target && event.target.nodeName == child.toUpperCase()){
        callback(event);
      }
    };
  }

  function goToAnchorEl(event, offset){
    var anchor = document.querySelector(event.target.getAttribute('href'));
    var anchorOffset = anchor.offsetTop;

    window.scrollTo(0, anchorOffset - offset);
  }
})(window);
