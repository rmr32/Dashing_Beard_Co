
gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(ScrollToPlugin);

// Check for Touch Devices
var isTouch = 'ontouchstart' in document.documentElement;

// If on a non Touch device
if(!isTouch) {

} // Not a Touch



        // // Animation by toggle class visible
        // var oilController = new ScrollMagic.Controller();

        // $('.info').each(function(){
        //     var myScene = new ScrollMagic.Scene({
        //         triggerElement: this,
        //         triggerHook: 0.8,
        //        // offset: -100,
        //         duration: "80%"
        //     })
        //     .setClassToggle(this, 'visible')
        //     .addIndicators()
        //     .addTo(oilController);
        // });


        // // Bottle Info Animation
        // var bottleController = new ScrollMagic.Controller();

        // $('.bottle').each(function(){
        //     var myScene = new ScrollMagic.Scene({
        //         triggerElement: this,
        //         triggerHook: 0.8,
        //        // offset: -100,
        //         duration: "80%"
        //     })
        //     .setClassToggle(this, 'visible')
        //     .addIndicators()
        //     .addTo(bottleController);
        // });


// Animation for each oil section via loops
// ****************************************

        // gsap.to(".oilPic", {
        //   scrollTrigger: {
        //     trigger: ".oilPic",
        //     toggleActions: "restart none restart none",
        //     markers: true, // Adds indicator markers
        //     start: "20% 80%", // Starts the trigger animation
        //     end: "80% 20%" // Ends the trigger animation
        //   },
        //   opacity: .5,
        //   rotation: 360,
        //   duration: 3
        // });

        // const oilpics = gsap.utils.toArray(".oilPic");
        // oilpics.forEach(oilPic => {
        //   gsap.to(oilPic, { 
        //     scrollTrigger: {
        //       trigger: oilPic,
        //       toggleActions: "restart none restart none",
        //       markers: true, // Adds indicator markers
        //       start: "20% 80%", // Starts the trigger animation
        //       end: "80% 20%" // Ends the trigger animation
        //     }
        //   })
        // });

        // const oils = gsap.utils.toArray('.oilPic');
        // oils.forEach(oilPic => {
        //   gsap.to(oilPic, { 
        //     x: 300,
        //     scrollTrigger: {
        //       trigger: oilPic,
        //       scrub: true
        //     }
        //   })
        // });


        // var ctrl = new ScrollMagic.Controller();

        // // Create scenes in jQuery each() loop
        // $(".scene").each(function(i) {
        //   var infobox = $(this).find(".info");
        //   var oilimg = $(this).find(".oilPic");
        //   var tl = new TimelineMax();
          
        //   tl.from(infobox, { x: -1000 });
        //   tl.from(oilimg, { x: 1000});
          
        //   new ScrollMagic.Scene({
        //     triggerElement: this,
        //     triggerHook: 0.8,
        //     //duration: "80%" //Add duration to animate in syn with scroll
        //   })
        //     .setTween(tl)
        //     .addIndicators({
        //       colorTrigger: "white",
        //       colorStart: "white",
        //       colorEnd: "white",
        //       indent: 40
        //     })
        //     .addTo(ctrl);
        // });





// Provide Flicker Animation to info section
// *****************************************

        var $flicker = $('.frame p'),
            tlMove = new TimelineMax({repeat: -1});
        var $flicker2 = $('.info h1'),
            tlMove = new TimelineMax({repeat: -1});
        var $flicker3 = $('.info .icons'),
            tlMove = new TimelineMax({repeat: -1});
        var $flicker4 = $('.info p'),
            tlMove = new TimelineMax({repeat: -1});


        tlMove
          .to([$flicker, $flicker2, $flicker3, $flicker4], 0.05, {opacity: 0.9, x: 0, y: 0})
          .to([$flicker, $flicker2, $flicker3, $flicker4], 0.05, {x: -1, y: 1})
          .to([$flicker, $flicker2, $flicker3, $flicker4], 0.05, {x: 0, y: 0})
          .to([$flicker, $flicker2, $flicker3, $flicker4], 0.05, {opacity: 0.8, x: 0, y: -1})
          .to([$flicker, $flicker2, $flicker3, $flicker4], 0.05, {x: 1, y: 0})
          .to([$flicker, $flicker2, $flicker3, $flicker4], 0.05, {opacity: 1, x: 1, y: 1})
          .to([$flicker, $flicker2, $flicker3, $flicker4], 0.05, {x: 0, y: 0});



//Code section for horizontal scroll
//*****************************************

        //Version 1
        //***************************************

          // let sections = gsap.utils.toArray(".scroll .scene");

          // gsap.to(sections, {
          //   xPercent: -100 * (sections.length - 1),
          //   ease: "none",
          //   scrollTrigger: {
          //     trigger: ".horizontal",
          //     pin: true,
          //     start: "top",
          //     scrub: 1,
          //     snap: {
          //       snapTo: 1 / (sections.length - 1),
          //       duration: {min: 0.1, max: 0.3},
          //       delay: 0
          //     },

          //     // Base vertical scrolling on how wide the container is so it feels more natural.
          //     end: () => "+=" + (document.querySelector(".scroll").offsetWidth / 6)
          //   }
          // });


        //Version 2
        //*****************************************
          // gsap.utils.toArray(".scene").forEach((scene, i) => {
          //   ScrollTrigger.create({
          //     trigger: scene,
          //     start: "top top",
          //     pin: true,
          //     scrub: .5,
          //     snap: {snapTo: 1, duration: 0.5, delay: 0},
          //     pinSpacing: false
          //   });
          // });


// Pin each section during vertical scroll
// ***************************************

          // // Code using GSAP pinning
          // // For multiple scenes
          // gsap.utils.toArray(".page").forEach((scene, i) => {
          //   ScrollTrigger.create({
          //     trigger: scene,
          //     start: "top top",
          //     pin: true,
          //     scrub: .5,
          //     snap: {snapTo: 1, duration: 0.5, delay: 0},
          //     pinSpacing: false
          //   });
          // });

          // ScrollTrigger.create({
          //   trigger: ".page",
          //   start: "top top",
          //   pin: true,
          //   scrub: .5,
          //   snap: {snapTo: 1, duration: 0.5, delay: 0},
          //   pinSpacing: false
          // });







          ScrollTrigger.create({
            trigger: '.chart',
            start: 'center center',
            end: 'bottom top',
            toggleClass: '.visible', //this toggles the specified CSS class on the trigger element
            // onEnter: drawPoints //this fires the drawPoints function when the trigger enters the scroller from above
          })
// Pin each section during vertical scroll with Flicker
// ****************************************************
        let sections = gsap.utils.toArray("section"),
            currentSection = sections[0];

        gsap.defaults({overwrite: 'auto', duration: 0.3});

        // stretch out the body height according to however many sections there are. 
        gsap.set("body", {height: (sections.length * 100) + "%"});

        // create a ScrollTrigger for each section
        sections.forEach((section, i) => {
          ScrollTrigger.create({
            // use dynamic scroll positions based on the window height (offset by half to make it feel natural)
            start: () => (i - 0.5) * innerHeight,
            end: () => (i + 0.5) * innerHeight,
            // when a new section activates (from either direction), set the section accordingly.
            onToggle: self => self.isActive && setSection(section)
          });
        });

        function setSection(newSection) {
          if (newSection !== currentSection) {
            gsap.to(currentSection, {scale: 0.8, autoAlpha: 0})
            gsap.to(newSection, {scale: 1, autoAlpha: 1});
            currentSection = newSection;
          }
        }

        // Handles the infinite part, wrapping around at either end....
        // ****************************************************
              // ScrollTrigger.create({
              //   start: 1,
              //   end: () => ScrollTrigger.maxScroll(window) - 1,
              //   onLeaveBack: self => self.scroll(ScrollTrigger.maxScroll(window) - 2),
              //   onLeave: self => self.scroll(2)
              // }).scroll(2);















            //   //Smooth Scrolling with Nav Bar
            //   // Detect if a link's href goes to the current page
            //   function getSamePageAnchor (link) {
            //     if (
            //     link.protocol !== window.location.protocol ||
            //     link.host !== window.location.host ||
            //     link.pathname !== window.location.pathname ||
            //     link.search !== window.location.search
            //     ) {
            //     return false;
            //     }
            
            //     return link.hash;
            // }
                    
            // // Scroll to a given hash, preventing the event given if there is one
            // function scrollToHash(hash, e) {
            //     const elem = hash ? document.querySelector(hash) : false;
            //     if(elem) {
            //         if(e) e.preventDefault();
            //         gsap.to(window, {duration: .8, scrollTo: {y: elem, offsetY: 93}});
            //     }
            // }
                    
            // // If a link's href is within the current page, scroll to it instead
            // document.querySelectorAll('a[href]').forEach(a => {
            //     a.addEventListener('click', e => {
            //     scrollToHash(getSamePageAnchor(a), e);
            //     });
            // });
            
            // // Scroll to the element in the URL's hash on load
            // scrollToHash(window.location.hash);