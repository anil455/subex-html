
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

gsap.registerPlugin(ScrollTrigger);

 (function() {
    const dot = document.querySelector(".dot");
    const circle = document.querySelector(".dot circle");
    const links = document.querySelectorAll(".link_cursor");
    let mouse = {x: 0, y: 0};
    let mouseStored = Object.assign({}, mouse);
    gsap.set(circle, {transformOrigin: "50% 50%"});
    window.addEventListener("mousemove", function(e) {
      setMouseCoords(e);
    });
    gsap.ticker.add(animateDot);
  
    gsap.to(dot, {duration: 1, delay: 1,scale: 1,opacity: 1, ease: "Power2.easeInOut",});
    links.forEach(link => {
      link.addEventListener("mouseenter", (e) => {
        gsap.to(circle, { duration: 0.45,scale: 1.3, opacity:0.3, fill: "#f17b40", ease: "Power2.easeOut", });
      });
  
      link.addEventListener("mouseleave", (e) => {
        gsap.to(circle, { duration: 0.3, scale: 1, delay: 0.2, opacity:0.6, fill: "#f17b40", ease: "Power2.easeIn",});
      });
    });
  
    function setMouseCoords(event) {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    }
  
    function animateDot() {
      if (mouseStored.x === mouse.x && mouseStored.y === mouse.y) return;
      gsap.to(dot, {
       x: mouse.x, y: mouse.y, ease: Elastic.easeOut.config(1.25, 1), duration: 2.5, delay: 0.1
      });
      mouseStored.x = mouse.x;
      mouseStored.y = mouse.y;
    }
  }());


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



});