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


const swiper = new Swiper(".blog-slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: ".blog-slider__pagination",
    clickable: true,
  },
});

(function () {
  "use strict";
  /*
   * Form Validation
   */

  // Fetch all the forms we want to apply custom validation styles to
  const forms = document.querySelectorAll(".needs-validation");
  const result = document.getElementById("result");
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();

          form.querySelectorAll(":invalid")[0].focus();
        } else {
          /*
           * Form Submission using fetch()
           */

          const formData = new FormData(form);
          event.preventDefault();
          event.stopPropagation();
          const object = {};
          formData.forEach((value, key) => {
            object[key] = value;
          });
          const json = JSON.stringify(object);
          result.innerHTML = "Please wait...";

          fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: json,
          })
            .then(async (response) => {
              let json = await response.json();
              if (response.status == 200) {
                result.innerHTML = json.message;
                result.classList.remove("text-gray-500");
                result.classList.add("text-green-500");
              } else {
                console.log(response);
                result.innerHTML = json.message;
                result.classList.remove("text-gray-500");
                result.classList.add("text-red-500");
              }
            })
            .catch((error) => {
              console.log(error);
              result.innerHTML = "Something went wrong!";
            })
            .then(function () {
              form.reset();
              form.classList.remove("was-validated");
              setTimeout(() => {
                result.style.display = "none";
              }, 5000);
            });
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();

    

    const counters = document.querySelectorAll(".counter");

    counters.forEach((counter) => {
      counter.innerText = "0";

      const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const c = +counter.innerText;

        const increment = target / 200;

        if (c < target) {
          counter.innerText = `${Math.ceil(c + increment)}`;
          setTimeout(updateCounter, 1);
        } else {
          counter.innerText = target;
        }
      };

      updateCounter();
    });



     
const divHide = document.getElementById("div-hide");

function handleHide() {
  divHide.style.display = "none";
}

function handleShow() {
  divHide.style.display = "block";
}
    
    




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
  