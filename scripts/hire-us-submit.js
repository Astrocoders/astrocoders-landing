window.addEventListener('DOMContentLoaded', function(){
  var form = document.querySelector('#hireUsForm');
  var btn = form.querySelector('button');
  var inputs = arrayFromTagsList(form.getElementsByTagName('input'));
  var textarea = arrayFromTagsList(form.getElementsByTagName('textarea'));
  var fields = inputs.concat(textarea);
  var xmlhttp = new XMLHttpRequest();
  var postURL = "https://astromail.astrocoders.com/mail/kAGu38vSsJe4i546T";
  document.domain = 'astrocoders.com';

  form.addEventListener('submit', function(event){
    event.preventDefault();
    var data = fields.reduce(function(acc, field) {
      acc[field.name] = field.value;
      return acc;
    }, {});

    xmlhttp.send(data);
    btn.disabled = true;
  });


  xmlhttp.open("POST", postURL);
  xmlhttp.setRequestHeader('Content-type', 'application/json');
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == XMLHttpRequest.DONE) {
      if(xmlhttp.status == 200){
        console.log('Response: ' + xmlhttp.responseText );
      } else {
        console.log('Error: ' + xmlhttp.toString() )
      }
    }
  };

  // Helpers

  function arrayFromTagsList(list) {
    return Array.prototype.slice.call(list);
  }

});
