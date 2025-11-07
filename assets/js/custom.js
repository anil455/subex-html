
$(window).on("scroll load", function () {
  var scroll = $(window).scrollTop();
  if (scroll > 90) {
    $(".header_wrapper").addClass("fixed-header");
  } else if (scroll < 70) {
    $(".header_wrapper").removeClass("fixed-header");
  }
});




$(document).ready(function(){

    $(window).trigger("scroll");

    new WOW().init();


    $(".menu_toggle_btn").on("click", function() {
        $(".header_nav").toggleClass("active");
        $(this).toggleClass("active");
        $("body").toggleClass("overflow_hidden");
    });

    // $('.expectations_card').eq(1).addClass('active');
      $('.expectations_card').on('mouseenter', function() {
      $(this).addClass('active')
            .siblings('.expectations_card').removeClass('active');
    });

     $('.native_ai_card').eq(1).addClass('active');
    $('.native_ai_card').on('mouseenter', function() {
        var $this = $(this);
        $this.addClass('active').siblings('.native_ai_card').removeClass('active active2');
        clearTimeout($this.data('timeoutId'));
        var timeoutId = setTimeout(function() {
            $this.addClass('active2');
        }, 800);
        $this.data('timeoutId', timeoutId);
    });

    $('.native_ai_card').on('mouseleave', function() {
        var $this = $(this);
        clearTimeout($this.data('timeoutId'));
        $this.removeClass('active2');
    });


    
    



   document.addEventListener("mousemove", (e) => {
  const trail = document.createElement("div");
  trail.className = "trail";
  document.body.appendChild(trail);

  trail.style.left = `${e.pageX}px`;
  trail.style.top = `${e.pageY}px`;

  setTimeout(() => {
    trail.remove();
  }, 800); // Remove after animation
});

gsap.registerPlugin(ScrollTrigger);

  document.querySelectorAll('.anim_parrent_each').forEach((section) => {
  const stepTitleArea_fade = section.querySelector('.anim_parrent_selector_each');
  const content = section.querySelector('.anim_selector');

  if (!stepTitleArea_fade || !content) return;

  const nodes = Array.from(content.childNodes);
  content.innerHTML = ''; 

  nodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const words = node.textContent.split(' ');
      words.forEach((word, index) => {
        const span = document.createElement('span');
        span.classList.add('word');
        span.textContent = word;
        content.appendChild(span);
        if (index < words.length - 1) {
          content.appendChild(document.createTextNode(' '));
        }
      });
    } 
  });

  // Animate words and videos progressively as you scroll
  gsap.timeline({
    scrollTrigger: {
      trigger: stepTitleArea_fade,
      start: 'top 90%',
      end: 'bottom 60%',
      scrub: 1,
      markers: false,
    },
  })
  .fromTo(
    section.querySelectorAll('.word'),
    { opacity: 0.3, y: 90 },
    { opacity: 1, y: 0, stagger: 0.1, duration: 5, ease: 'power2.out' }
  );
});



const section_scale2 = document.querySelector('.subex_role');
if (section_scale2) {
gsap.timeline({
  scrollTrigger: {
    trigger: section_scale2,
    start: 'top bottom',
    end: 'top+=80 top',
    scrub: 1,
    markers: false
  }
})
.fromTo(".subex_role",
  { 
    scale: 0.90,
    borderRadius: "30px"
  },
  { 
    scale: 1,
    borderRadius: "0px",
    ease: "power2.out",
    duration: 2
  }
);
}

const section_scale1 = document.querySelector('.global_shift');
if (section_scale1) {
gsap.timeline({
  scrollTrigger: {
    trigger: section_scale1,
    start: 'top bottom',
    end: 'top+=80 top',
    scrub: 1,
    markers: false
  }
})
.fromTo(".global_shift",
  { 
    scale: 0.90,
    borderRadius: "30px"
  },
  { 
    scale: 1,
    borderRadius: "0px",
    ease: "power2.out",
    duration: 2
  }
);
}

const section_scale3 = document.querySelector('.fearless_section');
if (section_scale3) {
gsap.timeline({
  scrollTrigger: {
    trigger: section_scale3,
    start: 'top bottom',
    end: 'top+=80 top',
    scrub: 1,
    markers: false
  }
})
.fromTo(".fearless_section",
  { 
    scale: 0.90,
    borderRadius: "30px"
  },
  { 
    scale: 1,
    borderRadius: "0px",
    ease: "power2.out",
    duration: 2
  }
);
}


const section_scale4 = document.querySelector('.leadership_section');
if (section_scale3) {
gsap.timeline({
  scrollTrigger: {
    trigger: section_scale4,
    start: 'top bottom',
    end: 'top+=80 top',
    scrub: 1,
    markers: false
  }
})
.fromTo(".leadership_section",
  { 
    scale: 0.90,
    borderRadius: "30px"
  },
  { 
    scale: 1,
    borderRadius: "0px",
    ease: "power2.out",
    duration: 2
  }
);
}



  







  $('.tab-menu-list li span').on('click', function(){
            var target = $(this).attr('data-rel');
            $('.tab-menu-list li span').removeClass('active');
            $(this).addClass('active');
            $("#" + target).fadeIn('slow').siblings(".tab-output-box").hide();
            var $ul = $('.tab-menu-list ul');
            var position = $(this).position().left;
            var scroll = $ul.scrollLeft();
            $ul.animate({
                scrollLeft: scroll + position - ($ul.width() / 2) + ($(this).outerWidth() / 2)
            }, 300);
            
            return false;
        });


function isInViewport(el) {
    if (!el || !el.length) return false;
    const rect = el.get(0).getBoundingClientRect();
    return (
      rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom > 0
    );
  }

  function animateCount($el) {
    if ($el.data("animated")) return;
    $el.data("animated", true);

    const countTo = parseInt($el.attr("data-count"), 10);
    $el.text("0");

    $({ countNum: 0 }).animate(
      { countNum: countTo },
      {
        duration: 2000,
        easing: "swing",
        step: function (now) {
          $el.text(Math.floor(now));
        },
        complete: function () {
          $el.text(countTo);
        },
      }
    );
  }

  function checkCounters() {
    $(".trusted_card_count").each(function () {
      const $this = $(this);
      if (isInViewport($this)) {
        animateCount($this);
      }
    });
  }
  $(window).on("scroll resize load", checkCounters);
  setTimeout(checkCounters, 300);


const isMobile = window.innerWidth < 992;

if ($('.marquee_trusted').length) {
    $('.marquee_trusted').infiniteslide({
      speed: 70,
      direction: isMobile ? 'left' : 'up',   // or 'down', 'left', 'right'
      pauseonhover: true,
      responsive: true
    });
  }

  if ($('.marquee_trusted2').length) {
    $('.marquee_trusted2').infiniteslide({
      speed: 70, 
      direction: isMobile ? 'right' : 'down',   
      pauseonhover: true,
      responsive: true
    });
  }

  if ($(window).width() < 768 && $('.jouney_marque_row').length) {
    $('.jouney_marque_row, .jurney_marque').infiniteslide({
      speed: 0,
      direction: 'left',
      pauseonhover: true,
      responsive: true
    });

    var marqueeStarted = false;

    $(window).on('scroll', function() {
      var $section = $('.journey_section');
      var sectionTop = $section.offset().top;
      var windowBottom = $(window).scrollTop() + $(window).height();
      if (!marqueeStarted && windowBottom > sectionTop + 50) {
        marqueeStarted = true;
        setTimeout(function() {
          $('.jouney_marque_row, .jurney_marque').infiniteslide({
            speed: 50,
            direction: 'left',
            pauseonhover: true,
            responsive: true
          });
        }, 5000);
      }
    });
  }




    $('.fearless_tab_output_inner').each(function() {
        var $tab = $(this); 
        $tab.find('.fearless_inner_colm').on('mouseenter', function() {
            $tab.find('.ferless_card_title').removeClass('active');
            $(this).find('.ferless_card_title').addClass('active');
        });
    });

      $('.tab-menu-list-ferless li span').on('click', function(){
            var target = $(this).attr('data-rel');
            $('.tab-menu-list-ferless li span').removeClass('active');
            $(this).addClass('active');
            $("#" + target).fadeIn('slow').siblings(".tab-output-box-fearless").hide();
            var $ul = $('.tab-menu-list-ferless  ul');
            var position = $(this).position().left;
            var scroll = $ul.scrollLeft();
            $ul.animate({
                scrollLeft: scroll + position - ($ul.width() / 2) + ($(this).outerWidth() / 2)
            }, 300);
            
            return false;
        });


     
        if ($('.btn_toggle_ceo').length) {
          $('.btn_toggle_ceo').on('click', function () {
            const contentWrapper = $('.show_ceo_more_content');
            const ceoMessage = $('.ceo_message');
            contentWrapper.slideToggle(300);
            ceoMessage.toggleClass('active');
            $(this).toggleClass('active');
          });
        }



});




