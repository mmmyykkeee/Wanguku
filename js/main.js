(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    let counter = document.querySelectorAll(".counter");
let a = Array.from(counter);
a.map((items)=>{
    let count = items.innerHTML;
    items.innerHTML = "";
    let countNumber = 0;

    function counterUP(){
        items.innerHTML = countNumber++;
        if(countNumber > count){
            clearInterval(stop);
    }
}
    let stop = setInterval(()=>{
        counterUP();
    }, items.dataset.speed/count);
});
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


//     var navbarCollapse = document.getElementById("navbarCollapse"),
//   stop = navbarCollapse.offsetTop,
//   docBody = document.documentElement || document.body.parentNode || document.body,
//   hasOffset = window.pageYOffset !== undefined,
//   scrollTop;

// window.onscroll = function(e) {
//   scrollTop = hasOffset ? window.pageYOffset : docBody.scrollTop;
//   if (scrollTop >= stop) {
//     navbarCollapse.className = 'sticky';
//   } else {
//     navbarCollapse.className = '';
//   }
// };


let swiper_setting = {
    spaceBetween: 1000,
    pagination: {
      el: '.swiper-pagination',
    }
  }
  
  var swiper_nodes = document.querySelectorAll('.swiper');
  
  /* loop throw */
    [].forEach.call(swiper_nodes, function(swiper_node) {
      // do whatever
      let swiper = new Swiper(swiper_node, swiper_setting);
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

setInterval(function() {
    plusslidess(1)
  }, 10000);
  
  
  let slideIndex = 1;
  showslidess(slideIndex);
  
  // Next/previous controls
  function plusslidess(n) {
      showslidess(slideIndex += n);
  }
  // Thumbnail image controls
  function currentSlide(n) {
    showslidess(slideIndex = n);
  }
  function showslidess(n) {
      let i;
      if (document.querySelector(".carousels")) {
          let slidesshowPage = document.querySelector(".carousels");
          if (slidesshowPage.classList.contains("carousels")) {
              let slidess = slidesshowPage.querySelectorAll(".myslidess");
              if (n > slidess.length) {
              slideIndex = 1
              };
              if (n < 1) {
              slideIndex = slidess.length
              };
          for (i = 0; i < slidess.length; i++) {
              slidess[i].style.display = "none";
          };
          slidess[slideIndex-1].style.display = "block";
          }
      }
  }
  
  
  setInterval(function() {
    plusslidess(1)
  }, 10000);
  