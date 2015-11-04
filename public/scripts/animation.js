(function(window){

  function when(selector){
    var el = document.querySelector(selector);
    var offsetTop = el.offsetTop - 54;
    var beyondHeight = offsetTop + el.clientHeight;

    var onIn = function(){};
    var onOut = function(){};

    var hasIn = false;
    var hasOut = false;

    window.addEventListener('scroll', function(event){
      var isIn = window.scrollY >= offsetTop;
      var isOut = window.scrollY >= beyondHeight;
      if(isIn && !isOut && !hasIn){
        onIn(el);
        hasOut = false;
        hasIn = true;
      } else if(isOut && !hasOut){
        onOut(el);
        hasOut = true;
        hasIn = false;
      }
    });

    return {
      in: function(fn){
        onIn = fn;

        return this;
      },

      out: function(fn){
        onOut = fn;

        return this;
      }
    }
  }

  (function(window, when){
    window.addEventListener('load', function(){
      when('#team-wrapper')
        .in(function(el){
          var items = el.querySelectorAll('.flex-grid-item');

          klass(items, 'add', 'active');
        })
        .out(function(el){
          var items = el.querySelectorAll('.flex-grid-item');

          klass(items, 'remove', 'active');
        });

        when('#services-article')
          .in(function(el){
            var items = el.querySelectorAll('.flex-grid-item');

            klass(items, 'add', 'active');
          })
          .out(function(el){
            var items = el.querySelectorAll('.flex-grid-item');

            klass(items, 'remove', 'active');
          });
    });

    function klass(items, action, klass){
      for (var i = 0; i < items.length; i++) {
        items[i].classList[action](klass);
      }
    }
  })(window, when);

})(window);
