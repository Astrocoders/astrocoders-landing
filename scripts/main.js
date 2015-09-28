$(document).ready(function(){
  if(!('ontouchstart' in window)){
    $('#content').fullpage({
      sectionSelector: 'section',
      scrollingSpeed: 600,
      touchSensitivity: 60
    });
  }

  // Find a better way to this
  // fullPage.js wraps section's content with .fp-tableCell
  // and applies to it some awkward styles.
  $('body').find('.fp-tableCell').each(function(){
      $(this).replaceWith(this.childNodes);
  });
});