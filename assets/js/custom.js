
$(window).on("scroll load", function () {
  var scroll = $(window).scrollTop();
  if (scroll > 90) {
    $(".header_wrapper").addClass("fixed-header");
    $(".header_sub_nav_wrapper").addClass("padding_top_reduce");
  } else if (scroll < 70) {
    $(".header_wrapper").removeClass("fixed-header");
    $(".header_sub_nav_wrapper").removeClass("padding_top_reduce");
  }
});




$(document).ready(function(){




const lenis = new Lenis({
  duration: 1.5,
  smooth: true,
  smoothTouch: false
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

lenis.on("scroll", ScrollTrigger.update);

//  Lenis ko overlay ke andar disable karo
const overlay = document.querySelector(".header_sub_nav_wrapper");

if (overlay) {
  // When mouse enters or user touches overlay → stop Lenis
  overlay.addEventListener("mouseenter", () => lenis.stop());
  overlay.addEventListener("mouseleave", () => lenis.start());
  overlay.addEventListener("touchstart", () => lenis.stop(), { passive: true });
  overlay.addEventListener("touchend", () => lenis.start(), { passive: true });

  //  Extra: prevent Lenis from hijacking wheel events inside overlay
  overlay.addEventListener("wheel", (e) => {
    e.stopPropagation(); // stop event from reaching window scroll
  }, { passive: false });
}




    $(window).trigger("scroll");

    new WOW().init();


    $(".menu_toggle_btn").on("click", function() {
        $(".header_nav").toggleClass("active");
        $(this).toggleClass("active");
        $("body").toggleClass("overflow_hidden");
        $("header").toggleClass("active_menu_wrapper");

        $(".header_search_box").removeClass("active");
        $(".search_toggle").removeClass("active");
    });

    $(".search_toggle").on("click", function() {
        $(".header_search_box").toggleClass("active");
        $(this).toggleClass("active");

         $(".header_nav").removeClass("active");
        $("body").removeClass("overflow_hidden");
        $("header").removeClass("active_menu_wrapper");
        $('.header_sub_nav_wrapper').removeClass('active_sub_nav');
        $('.menu_toggle_btn').removeClass('active');
        
    });

    var currentPage = window.location.pathname.split("/").pop();

   
    $('.header_nav_link').each(function(){
        if($(this).attr('href') === currentPage){
            $(this).addClass('active');
        }
    });


  if(window.matchMedia("(max-width: 1199px)").matches){
    $('.header_nav_link').on('click', function() {
        var target = $(this).data('target');
        $('.header_sub_nav_wrapper').removeClass('active_sub_nav');
        $(".header_nav_link").removeClass("active_dropdowen");
        if (target) {
            $('#' + target).addClass('active_sub_nav');
        }
    });
    
    $(".back_button_sub_menu_mobile").click(function(){
       $('.header_sub_nav_wrapper').removeClass('active_sub_nav');
    });
    $(".menu_close_icon").click(function(){
       $('.header_sub_nav_wrapper').removeClass('active_sub_nav');
    });
  }

    
if(window.matchMedia("(min-width: 1200px)").matches){

  //  $('.header_nav_link').on('mouseenter', function() {
  //       var target = $(this).data('target');
  //       $('.header_sub_nav_wrapper').removeClass('active_sub_nav');
  //       $(".header_nav_link").removeClass("active_dropdowen");
  //       if (target) {
  //           $('#' + target).addClass('active_sub_nav');
  //           $(this).addClass("active_dropdowen");
  //       }
        
  //   });

  $('.header_nav_link').on('mouseenter', function() {
    var target = $(this).data('target');

    $('.header_sub_nav_wrapper').removeClass('active_sub_nav');
    $('.header_nav_link').removeClass('active_dropdowen');

    if (target && $('#' + target).length) {
        // sirf tab active class add ho jab target exist kare
        $('#' + target).addClass('active_sub_nav');
        $(this).addClass('active_dropdowen');
    }
});



    $('.logo_link, .header_search_box, .search_icon_header').on('mouseenter', function() {
        $('.header_sub_nav_wrapper').removeClass('active_sub_nav');
        $(".header_nav_link").removeClass("active_dropdowen");
    });

    $(document).on('mouseleave', function(e) {
      if (e.clientY <= 0 || e.clientX <= 0 || e.clientX >= window.innerWidth || e.clientY >= window.innerHeight) {
          $('.header_sub_nav_wrapper').removeClass('active_sub_nav');
          $(".header_nav_link").removeClass("active_dropdowen");
      }
    });
  // $('.header_sub_nav_wrapper .container').on('mouseleave', function(e) {
  //     var $this = $(this);
  //     var offset = $this.offset();
  //     var bottom = offset.top + $this.outerHeight();
  //     if (e.pageY > bottom) {
  //         $this.closest('.header_sub_nav_wrapper').removeClass('active_sub_nav');
  //         $(".header_nav_link").removeClass("active_dropdowen");
  //     }
  // });



  $('.header_dropdowen_wrapper_2, .header_sub_nav_wrapper_inner').on('mouseleave', function () {
  $(this)
    .closest('.header_sub_nav_wrapper')
    .removeClass('active_sub_nav');
  $('.header_nav_link').removeClass('active_dropdowen');
});

  $(document).on('mousemove', function(e) {
      const scrollbarThreshold = 25;
      if (e.clientX >= window.innerWidth - scrollbarThreshold) {
          $('.header_sub_nav_wrapper').removeClass('active_sub_nav');
          $(".header_nav_link").removeClass("active_dropdowen");
      }
  });

}



$('.header_dropdowen_wrapper_2').each(function () {
    var $wrapper = $(this);

// Mouse enter (tab switch)
$wrapper.find('.headermenu_tab_menu_list ul li a').on('mouseenter', function () {
    var target = $(this).attr('data-rel');

    // Active class switch only in this wrapper
    $wrapper.find('.headermenu_tab_menu_list ul li a').removeClass('active');
    $(this).addClass('active');

    // Stop animations before showing content
    $wrapper.find(".solution_output_wrapper").stop(true, true).hide();
    $wrapper.find("#" + target).stop(true, true).fadeIn('fast');

    return false;
});


    // Click scroll effect (mobile)
    $wrapper.find('.headermenu_tab_menu_list ul li a').on('click', function () {
        if ($(window).width() <= 1200) {
            var $this = $(this);
            var container = $wrapper.find('.headermenu_tab_menu_list ul');
            var scrollLeft = $this.position().left + container.scrollLeft() - 20;
            container.animate({
                scrollLeft: scrollLeft
            }, 400);
        }
    });
});




    // var $firstTab = $('.business_ansurrance_link_target1').first();
    // $firstTab.addClass('active');

    // var defaultTarget = $firstTab.attr('data-target');
    // if (defaultTarget) {
    //     $('#' + defaultTarget).show();
    // }

    // $('.business_ansurrance_link_target1').on('mouseenter', function () {
    //     var target = $(this).attr('data-target');
    //     $('.business_ansurrance_target').hide();
    //     $('#' + target).fadeIn('slow');
    //     $('.business_ansurrance_link_target1').removeClass('active');
    //     $(this).addClass('active');
    // });


     if (window.matchMedia("(min-width: 1200px)").matches){
$('.business_ansurrance_row').each(function () {
    var $row = $(this);

    // Get first tab and activate it
    var $firstTab = $row.find('.business_ansurrance_link_target1').first();
    $firstTab.addClass('active');

    var defaultTarget = $firstTab.attr('data-target');
    if (defaultTarget) {
        $row.find('#' + defaultTarget).show();
    }

    // Tab hover behavior (scoped inside this row)
    $row.find('.business_ansurrance_link_target1').on('mouseenter', function () {
        var target = $(this).attr('data-target');

        // Hide only inside this row
        $row.find('.business_ansurrance_target').hide();

        // Show the hovered tab target
        $row.find('#' + target).fadeIn('fast');

        // Active state only for this row
        $row.find('.business_ansurrance_link_target1').removeClass('active');
        $(this).addClass('active');
    });
});



$('.solution2_link').each(function() {
    var targetId = $(this).attr('data-target');
    // Check agar matching element exist karta hai
    if (!$('#' + targetId).length) {
        // Agar nahi milta to icon hide kar do
        $(this).find('.icon_gray_header_2').hide();
    }
});

$('.business_ansurrance_row').each(function () {
  var $currentRow = $(this);

  function showFirstChildTarget($parentTarget) {
    if ($parentTarget.css('display') === 'block') {
      var $firstSecondLevelLink = $parentTarget.find('.second-level-dropdowen').first();
      var firstTargetId = $firstSecondLevelLink.attr('data-target');

      if ($('#' + firstTargetId).length) { // <- global ID
        $currentRow.find('.second-level-dropdowen').removeClass('active');
        $firstSecondLevelLink.addClass('active');

        $currentRow.find('.third_level_target').stop(true, true).hide();
        $('#' + firstTargetId).stop(true, true).fadeIn(100); // <- global ID
      }
    }
  }

  $currentRow.find('.business_ansurrance_target').each(function () {
    showFirstChildTarget($(this));
  });

  $currentRow.on('mouseenter', '.second-level-dropdowen', function () {
    var $hoveredLink = $(this);
    var targetId = $hoveredLink.attr('data-target');

    if ($('#' + targetId).length) { // <- global ID
      $currentRow.find('.third_level_target').stop(true, true).hide();
      $currentRow.find('.second-level-dropdowen').removeClass('active');

      $hoveredLink.addClass('active');
      $('#' + targetId).stop(true, true).fadeIn(100); // <- global ID
    } else {
      $currentRow.find('.third_level_target').stop(true, true).fadeOut(150);
      $currentRow.find('.second-level-dropdowen').removeClass('active');
    }
  });

  const mutationObserver = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.attributeName === 'style') {
        var $targetElement = $(mutation.target);
        if ($targetElement.hasClass('business_ansurrance_target')) {
          if ($targetElement.css('display') === 'block') {
            showFirstChildTarget($targetElement);
          } else {
            $targetElement.find('.second-level-dropdowen.active').each(function () {
              var targetId = $(this).attr('data-target');
              $('#' + targetId).stop(true, true).fadeOut(50); // <- global ID
            });
          }
        }
      }
    });
  });

  $currentRow.find('.business_ansurrance_target').each(function () {
    mutationObserver.observe(this, { attributes: true, attributeFilter: ['style'] });
  });
});



}


    if (window.matchMedia("(max-width: 1199px)").matches){

      $('.mobile_add_class').click(function () {
      const $desc = $(this).closest('.solution2_li').find('.mobile_menu_dropdowen_header2');
      const isVisible = $desc.is(':visible');
      $('.mobile_menu_dropdowen_header2').slideUp(200);
      $('.solution2_li').removeClass("active");
      if (!isVisible) {
        $desc.stop(true, true).slideDown(200);
        $(this).closest('.solution2_li').addClass("active");
      }
    });

    $('.solution2_li').each(function() {
        const $li = $(this);
        const $arrow = $li.find('.mobile_add_class');
        const $dropdown = $li.find('.mobile_menu_dropdowen_header2');

        if ($dropdown.length === 0) {
            $arrow.addClass('arrow-hide');
        } else {
            $arrow.removeClass('arrow-hide');
        }
    });


     $('.mobile_menu_dropdowen_item_header2').click(function () {
      const $desc = $(this).closest('.mobile_menu_dropdowen_list_header2').find('.mobile_menu_third_level');
      const isVisible = $desc.is(':visible');
      $('.mobile_menu_third_level').slideUp(200);
      $('.mobile_menu_dropdowen_list_header2').removeClass("active");
      if (!isVisible) {
        $desc.stop(true, true).slideDown(200);
        $(this).closest('.mobile_menu_dropdowen_list_header2').addClass("active");
      }
    });

    $('.mobile_menu_dropdowen_list_header2').each(function() {
        const $li = $(this);
        const $arrow = $li.find('.mobile_menu_dropdowen_item_header2');
        const $dropdown = $li.find('.mobile_menu_third_level');

        if ($dropdown.length === 0) {
            $arrow.addClass('arrow-hide');
        } else {
            $arrow.removeClass('arrow-hide');
        }
    });
    

    }










    

   $('.header_sub_nav_wrapper_inner').each(function() {
  var $wrappertabinner = $(this);
  $wrappertabinner.find('.ul_nav_tab_list li span').on('click', function() {
    var target = $(this).attr('data-rel');
    $wrappertabinner.find('.ul_nav_tab_list li span').removeClass('active');
    $(this).addClass('active');
    $wrappertabinner.find('.tab_output_box_nav').hide();
   $wrappertabinner.find('#' + target).fadeIn('slow');

    return false;
  });
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

const section_scale_samless_section = document.querySelector('.samless_section');
if (section_scale_samless_section) {
gsap.timeline({
  scrollTrigger: {
    trigger: section_scale_samless_section,
    start: 'top bottom',
    end: 'top+=80 top',
    scrub: 1,
    markers: false
  }
})
.fromTo(".samless_section",
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

const section_scale_fraud_home = document.querySelector('.fraud_home');
if (section_scale_fraud_home) {
gsap.timeline({
  scrollTrigger: {
    trigger: section_scale_fraud_home,
    start: 'top bottom',
    end: 'top+=80 top',
    scrub: 1,
    markers: false
  }
})
.fromTo(".fraud_home",
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

const section_scale_brand_core = document.querySelector('.brand_core');
if (section_scale_brand_core) {
gsap.timeline({
  scrollTrigger: {
    trigger: section_scale_brand_core,
    start: 'top bottom',
    end: 'top+=80 top',
    scrub: 1,
    markers: false
  }
})
.fromTo(".brand_core",
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

const section_scale_how_we_work_about = document.querySelector('.how_we_work_about');
if (section_scale_how_we_work_about) {
gsap.timeline({
  scrollTrigger: {
    trigger: section_scale_how_we_work_about,
    start: 'top bottom',
    end: 'top+=80 top',
    scrub: 1,
    markers: false
  }
})
.fromTo(".how_we_work_about",
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

const section_scale_section_simply_work = document.querySelector('.section_simply_work');
if (section_scale_section_simply_work) {
gsap.timeline({
  scrollTrigger: {
    trigger: section_scale_section_simply_work,
    start: 'top bottom',
    end: 'top+=80 top',
    scrub: 1,
    markers: false
  }
})
.fromTo(".section_simply_work",
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
if (section_scale4) {
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


const section_scale5 = document.querySelector('.quick-access');
if (section_scale5) {
gsap.timeline({
  scrollTrigger: {
    trigger: section_scale5,
    start: 'top bottom',
    end: 'top+=80 top',
    scrub: 1,
    markers: false
  }
})
.fromTo(".quick-access",
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

const section_scale6 = document.querySelector('.featured-video');
if (section_scale6) {
gsap.timeline({
  scrollTrigger: {
    trigger: section_scale6,
    start: 'top bottom',
    end: 'top+=80 top',
    scrub: 1,
    markers: false
  }
})
.fromTo(".featured-video",
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
      speed: 40,
      direction: isMobile ? 'left' : 'up',   // or 'down', 'left', 'right'
      pauseonhover: true,
      responsive: true
    });
  }

  if ($('.marquee_trusted2').length) {
    $('.marquee_trusted2').infiniteslide({
      speed: 40, 
      direction: isMobile ? 'right' : 'up',   
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


// document.querySelectorAll(".journey_colm").forEach((item) => {
//   gsap.to(item, {
//     x: 0,
//     opacity: 1,
//     ease: "none",
//     scrollTrigger: {
//       trigger: item,
//       start: "top 90%", // start animation when element is near bottom of viewport
//       end: "top 80%",   // end when element reaches middle of viewport
//       scrub: true,      // smooth scroll-sync animation
//     }
//   });
// });




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

        


         // LEFT cards (animate inner only)
function animateJourney(xValue) {
  gsap.utils.toArray(".journy_left").forEach((elem) => {
    gsap.fromTo(elem,
      { x: xValue },
      {
        x: 0,
        ease: "none",
        scrollTrigger: {
          trigger: elem,
          start: "top bottom",
          end: "top center",
          scrub: 0.8,
        }
      }
    );
  });
}

ScrollTrigger.matchMedia({
  "(min-width: 1025px)": () => animateJourney(-200),
  "(max-width: 1024px) and (min-width: 992px)": () => animateJourney(-150),
  "(max-width: 991px) and (min-width: 768px)": () => animateJourney(-100),
  "(max-width: 767px)": () => animateJourney(-50),
});

  // RIGHT cards (animate inner only)
function animateRightJourney(xValue) {
  gsap.utils.toArray(".jouney_right").forEach((elem) => {
    gsap.fromTo(elem,
      { x: xValue },
      {
        x: 0,
        ease: "none",
        scrollTrigger: {
          trigger: elem,
          start: "top bottom",
          end: "top center",
          scrub: 0.8,
        }
      }
    );
  });
}

ScrollTrigger.matchMedia({
  "(min-width: 1025px)": () => animateRightJourney(200),
  "(max-width: 1024px) and (min-width: 992px)": () => animateRightJourney(150),
  "(max-width: 991px) and (min-width: 768px)": () => animateRightJourney(100),
  "(max-width: 767px)": () => animateRightJourney(50),
});





$(".about_pcc_video_box").each(function () {
  const box = $(this);
  const video = box.find(".videoPlayer_subex_proton").get(0);

  // Initial hide
  box.find(".video_wrapper_subex_proton").hide();

  // --- Play from thumbnail ---
  box.find(".play_btn_video_box").on("click", function () {
    box.find(".video_thumbnail_subex_proton").hide();
    box.find(".video_wrapper_subex_proton").show();
    video.play();
    box.find(".play_control_subex_proton").removeClass("active");
    box.find(".pause_control_subex_proton").addClass("active");
  });

  // --- Play control ---
  box.find(".play_control_subex_proton").on("click", function () {
    video.play();
    $(this).removeClass("active");
    box.find(".pause_control_subex_proton").addClass("active");
  });

  // --- Pause control ---
  box.find(".pause_control_subex_proton").on("click", function () {
    video.pause();
    $(this).removeClass("active");
    box.find(".play_control_subex_proton").addClass("active");
  });

  // --- Update progress ---
  video.addEventListener("timeupdate", function () {
    const progress = (video.currentTime / video.duration) * 100;
    box.find(".progress-fill_subex_proton").css("width", progress + "%");
  });

  // --- Click to seek ---
  box.find(".progress_bar_subex_proton").on("click", function (e) {
    const bar = $(this);
    const offset = e.pageX - bar.offset().left;
    const percent = offset / bar.width();
    video.currentTime = percent * video.duration;
  });

  // --- Video ended ---
  video.addEventListener("ended", function () {
    box.find(".video_wrapper_subex_proton").hide();
    box.find(".video_thumbnail_subex_proton").show();
    video.currentTime = 0;
    box.find(".progress-fill_subex_proton").css("width", "0%");
    box.find(".pause_control_subex_proton").removeClass("active");
    box.find(".play_control_subex_proton").addClass("active");
  });
});



 $('.goverence_title_boc').click(function () {
      const $desc = $(this).closest('.goverence_acc_box').find('.goverence_detail_box');
      const isVisible = $desc.is(':visible');
      $('.goverence_detail_box').slideUp(200);
      $('.goverence_acc_box').removeClass("active");
      if (!isVisible) {
        $desc.stop(true, true).slideDown(200);
        $(this).closest('.goverence_acc_box').addClass("active");
      }
    });


});




