window.addEventListener('DOMContentLoaded', function(){
  var form = document.querySelector('#hireUsForm');
  var btn = form.querySelector('button');

  form.addEventListener('submit', function(){
    btn.disabled = true;
  });
});
