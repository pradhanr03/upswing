    $(document).ready(function(){
      $("#owl-demo").owlCarousel({
        navigation : true
      });
      
      $('.owl-carousel').on('mouseenter', '.item-house', function(e) {
        var currentItem = this.getElementsByClassName('overlay-text')[0];
        currentItem.classList.add('show');
      });

      $('.owl-carousel').on('mouseleave', '.item-house', function(e) {
        var currentItem = this.getElementsByClassName('overlay-text')[0];
        currentItem.classList.remove('show');
      });

    });
        