window.addEventListener('DOMContentLoaded', function(){
  var form = document.querySelector('#hireUsForm');
  var btn = form.querySelector('button');
  var xmlhttp = new XMLHttpRequest();
  var postURL = "https://astromail.astrocoders.com/mail/kAGu38vSsJe4i546T";
  document.domain = 'astrocoders.com';

  form.addEventListener('submit', function(event){
    event.preventDefault();
    xmlhttp.send(new FormData(form));
    btn.disabled = true;
  });


  xmlhttp.open("POST", postURL);
  xmlhttp.setRequestHeader('Content-type', 'text/plain');
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == XMLHttpRequest.DONE) {
      if(xmlhttp.status == 200){
        console.log('Response: ' + xmlhttp.responseText );
      } else {
        console.log('Error: ' + xmlhttp.toString() )
      }
    }
  };
});
