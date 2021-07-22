
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


// Check for Touch Devices
var isTouch = 'ontouchstart' in document.documentElement;

// If on a non Touch device
if(!isTouch) {


} // Not a Touch

// <!-- ************* PreLoader Script *************-->
    //Set timed delay before removing loading screen
    window.addEventListener("load", function(){
        window.setTimeout(function(){
            const loader = document.querySelector(".loader");
            loader.className += " hidden";
        }, 3000);
    });


// <!-- ************* Open/Close Nav Menu Script *************-->
    document.getElementById("menu").onclick = function(e){
        var nameCheck = document.getElementById("toggler");
        nameCheck.checked = !nameCheck.checked;
        // nameCheck.onchange();
    }

//Smooth Scrolling with Nav Bar
// *****************************************
        // Detect if a link's href goes to the current page
            function getSamePageAnchor (link) {
              if (
                link.protocol !== window.location.protocol ||
                link.host !== window.location.host ||
                link.pathname !== window.location.pathname ||
                link.search !== window.location.search
              ) {
              return false;
              }
              return link.hash;
            }

        // Scroll to a given hash, preventing the event given if there is one
            function scrollToHash(hash, e) {
              const elem = hash ? document.querySelector(hash) : false;
              if(elem) {
                  if(e) e.preventDefault();
                  gsap.to(window, {duration: .8, scrollTo: {y: elem, offsetY: 93}});
              }
            }

        // // If a link's href is within the current page, scroll to it instead
            document.querySelectorAll('a[href]').forEach(a => {
                a.addEventListener('click', e => {
                scrollToHash(getSamePageAnchor(a), e);
                });
            });

        // Scroll to the element in the URL's hash on load
            scrollToHash(window.location.hash);

        // Auto Scrolls to top on relaod
            // window.onbeforeunload = function () {
            //   window.scrollTo(0, 0);
            // }; 

// Random Flicker Animation
// *****************************************
        //Declare variables for each flicker animation
        var $flicker1 = $('.mainheader');
        var $flicker2 = $('#dashing .frame');
        var $flicker3 = $('#oil');
        var $flicker4 = $('#applying .frame');
        var $flicker5 = $('#footer');
        var $flicker6 = $('#menu2');

        //Function to return a random number
        function random(min, max) {
          return min +Math.random() * (max-min);
        }

        //Function to Animate each variable randomly
        function randomMovement() {
          gsap.to([
            $flicker1, 
            $flicker2, 
            $flicker3, 
            $flicker4, 
            $flicker5, 
            $flicker6
          ], 0.05, {opacity: random(0.9,1), x: random(-1,1), y: random(-1,1), onComplete:randomMovement});
        }
        randomMovement();


// Snap to closest section
// ****************************************************
        // Simple SnapTo
        // ****************************************************
            let sections = gsap.utils.toArray(".panel");
            ScrollTrigger.create({
              snap: {
                // snapTo: 1 / 4, 
                snapTo: 1 / (sections.length - 1),
                delay: 0,
                scrub: 0,
                duration: 0.3,
                ease: "none"
              }
            });

      
// Fade the main logo on scroll
// *****************************************          
        gsap.to(".logo", {
          scrollTrigger: {
            trigger: ".spacer",
            start: "30% top",
            end: "+=100",
            scrub: .7,
            // markers: true,
            toggleActions: "restart play reverse none"
          },
          opacity: .03,
        });
  

// Animate each section during vertical scroll
// ****************************************************

        // // Fade in and out while pinned (issues with navbar, uncomment scroll.scss)
        // // ****************************************************
            // let sections = gsap.utils.toArray(".panel"),
            // currentSection = sections[0];

            // gsap.defaults({overwrite: 'auto', duration: 0.1});

            // // stretch out the body height according to however many sections there are. 
            // gsap.set("body", {height: (sections.length * 100) + "%"});

            // // create a ScrollTrigger for each section
            // sections.forEach((section, i) => {
            //   ScrollTrigger.create({
            //     // use dynamic scroll positions based on the window height (offset by half to make it feel natural)
            //     start: () => (i - 0.5) * innerHeight,
            //     end: () => (i + 0.5) * innerHeight,
            //     // when a new section activates (from either direction), set the section accordingly.
            //     onToggle: self => self.isActive && setSection(section)
            //   });
            // });

            // function setSection(newSection) {
            //   if (newSection !== currentSection) {
            //     gsap.to(currentSection, {scale: 0.8, autoAlpha: 0})
            //     gsap.to(newSection, {scale: 1, autoAlpha: .8});
            //     currentSection = newSection;
            //   }
            // }

            // // Handles the infinite part, wrapping around at either end....
            // // ****************************************************
            // ScrollTrigger.create({
            //   start: 1,
            //   end: () => ScrollTrigger.maxScroll(window) - 1,
            //   onLeaveBack: self => self.scroll(ScrollTrigger.maxScroll(window) - 2),
            //   onLeave: self => self.scroll(2)
            // }).scroll(2);





        // Animate (Fade in/out, Scale) each section during vertical scroll
        // ****************************************************
        // gsap.utils.toArray('.panel').forEach(section => {

          // gsap.fromTo(section, {scale: 0.8, opacity: 0
          // },{
          //   opacity: 1,
          //   scale: 1,
          //   scrollTrigger: {
          //     trigger: section,
          //     start: "50% 100%",
          //     end: "50% 50%",
          //     scrub: 1,
          //     scale: 1,
          //     //markers: true,
          //   }
          // });
          
          // gsap.fromTo(section, {scale: 1
          // },{
          //   opacity: 0,
          //   scale: 0.8,
          //   scrollTrigger: {
          //     trigger: section,
          //     start: "52% 50%",
          //     end: "100% 0%",
          //     scrub: 1,
          //     // markers: true,
          //   }
          // });
          // ScrollTrigger.create({
          //   trigger: section,
          //   start: "50% 100%",
          //   end: "50% 50%",
          //   markers: true,
          //   pin: true

          // })

        //   gsap.fromTo(section, {scale: 0.8
        //   },{
        //     opacity: 1,
        //     scale: 1,
        //     scrollTrigger: {
        //       trigger: section,
        //       start: "50% 100%",
        //       end: "50% 50%",
        //       scrub: 1,
        //       scale: 1,
        //       //markers: true,
        //     }
        //   });
          
        //   gsap.fromTo(section, {scale: 1
        //   },{
        //     opacity: 0,
        //     scale: 0.8,
        //     scrollTrigger: {
        //       trigger: section,
        //       start: "52% 50%",
        //       end: "100% 0%",
        //       scrub: 1,
        //       // markers: true,
        //     }
        //   });

        // });









        // SNAPS FAST WITH FADE IN BUT NAV ISSUES
        // ****************************************************
            // const firstElem = document.querySelector(".panel");

            // function goToSection(i, anim) {
            //   gsap.to(window, {
            //     scrollTo: {y: i*innerHeight + firstElem.offsetTop, autoKill: false, ease: "power1.inOut"},
            //     duration: 0
            //   });
              
            //   if(anim) {
            //     anim.restart();
            //   }
            // }

            // gsap.utils.toArray(".panel").forEach((panel, i) => {
              
            //   const activepanelEnter = panel.previousElementSibling;
              
            //   ScrollTrigger.create({
            //     trigger: panel,
            //     onEnter: () => {
            //       goToSection(i)
            //       gsap.fromTo(activepanelEnter, { opacity: 1 }, { duration: 0.25, opacity: 0 })
            //       gsap.fromTo(panel, { opacity: 0 }, { duration: 0.5, delay: 0.75, opacity: 1 })      
            //     },
                
            //   });
              
            //   const activepanelEnterBack = panel.nextElementSibling;
              
            //   ScrollTrigger.create({
            //     trigger: panel,
            //     start: "bottom bottom",
            //     onEnterBack: () => {
            //       goToSection(i)
            //       gsap.fromTo(activepanelEnterBack, { opacity: 1 }, { duration: 0.5, opacity: 0 })
            //       gsap.fromTo(panel, { opacity: 0 }, { duration: 0.5, delay: 0.75, opacity: 1 })
            //     }
            //   });
            // });





// Corrections to make NAV work (Use class on nav list)
// ****************************************************

        // var offset= $("#applying").offset().top;

        // $("#dash").click(function() {
        //   event.preventDefault()
        //   gsap.to(window, 1,{scrollTo:{y:"1000"}});
        //   // gsap.to(window, 1, {scrollTo:{y:$("#top").offset().top}});
        // });
        // $("#product").click(function() {
        //   event.preventDefault()
        //   gsap.to(window, 1,{scrollTo:{y:"2000"}});
        //   // gsap.to(window, 1, {scrollTo:{y:$("#top").offset().top}});
        // });
        // $("#apply").click(function() {
        //   event.preventDefault()
        //   gsap.to(window, 1,{scrollTo:{y:"3000"}});
        //   // gsap.to(window, 1, {scrollTo:{y:$("#top").offset().top}});
        // });

        //Attempt 2
        // gsap.utils.toArray(".menu a").forEach(function(a) {
        //   a.addEventListener("click", function(e) {
        //     e.preventDefault();
        //     gsap.to(window, {duration: 1, scrollTo: e.target.getAttribute("href")});
        //     console.log("ok");
        //   });
        // });





// Animate Oil Section on bottle hover
// *****************************************   
        // Define Section for each Oil
        var objSection = {
          gentlemanFill : ".gentleman",
          playboyFill : ".playboy",
          aristocratFill : ".aristocrat",
          loggerFill : ".logger",
          entertainerFill : ".entertainer",
          outlawFill : ".outlaw",
          bohemianFill : ".bohemian",
          default : ".main"
        };

        // Define Main element for each Oil
        var objMain = {
          gentlemanFill : ".gentlemanMain",
          playboyFill : ".playboyMain",
          aristocratFill : ".aristocratMain",
          loggerFill : ".loggerMain",
          entertainerFill : ".entertainerMain",
          outlawFill : ".outlawMain",
          bohemianFill : ".bohemianMain",
          default : ".main"
        };

        // Define Back element for each Oil
        var objBack = {
          gentlemanFill : ".gentlemanBack",
          playboyFill : ".playboyBack",
          aristocratFill : ".aristocratBack",
          loggerFill : ".loggerBack",
          entertainerFill : ".entertainerBack",
          outlawFill : ".outlawBack",
          bohemianFill : ".bohemianBack",
          default : ".back"
        };

        // Define Front element for each Oil
        var objFront = {
          gentlemanFill : ".gentlemanFront",
          playboyFill : ".playboyFront",
          aristocratFill : ".aristocratFront",
          loggerFill : ".loggerFront",
          entertainerFill : ".entertainerFront",
          outlawFill : ".outlawFront",
          bohemianFill : ".bohemianFront",
          default : ".front"
        };

        // Define Title element for each Oil
        var objTitle = {
          gentlemanFill : ".gentlemanTitle",
          playboyFill : ".playboyTitle",
          aristocratFill : ".aristocratTitle",
          loggerFill : ".loggerTitle",
          entertainerFill : ".entertainerTitle",
          outlawFill : ".outlawTitle",
          bohemianFill : ".bohemianTitle",
          default : ".title"
        };

        // Define Excerpt element for each Oil
        var objExcerpt = {
          gentlemanFill : ".gentlemanExcerpt",
          playboyFill : ".playboyExcerpt",
          aristocratFill : ".aristocratExcerpt",
          loggerFill : ".loggerExcerpt",
          entertainerFill : ".entertainerExcerpt",
          outlawFill : ".outlawExcerpt",
          bohemianFill : ".bohemianExcerpt",
          default : ".Excerpt"
        };
        
        // Define gradients for each Oil
        var objRadial = {
          gentleman : "radial-gradient(rgba(67,88,105,.3),rgba(0,0,0,0) 70%)",
          playboy : "radial-gradient(rgba(113,115,117,.3),rgba(0,0,0,0) 70%)",
          aristocrat : "radial-gradient(rgba(104,81,122,.3),rgba(0,0,0,0) 70%)",
          logger : "radial-gradient(rgba(163,64,55,.2),rgba(0,0,0,0) 70%)",
          entertainer : "radial-gradient(rgba(212,152,64,.2),rgba(0,0,0,0) 70%)",
          outlaw : "radial-gradient(rgba(155,130,92,.2),rgba(0,0,0,0) 70%)",
          bohemian : "radial-gradient(rgba(91,125,106,.3),rgba(0,0,0,0) 70%)",
          default : "radial-gradient(rgba(0,0,0,.0),rgba(0,0,0,0) 0%)"
        };

        // Define box shadow for each Oil
        var objShadow = {
          gentleman : "0 0 20px rgba(67,88,105, 1)",
          playboy : "0 0 20px rgba(113,115,117, 0.7)",
          aristocrat : "0 0 20px rgba(104,81,122, 0.7)",
          logger : "0 0 20px rgba(163,64,55, 0.7)",
          entertainer : "0 0 20px rgba(212,152,64, 0.7)",
          outlaw : "0 0 20px rgba(155,130,92, 0.7)",
          bohemian : "0 0 20px rgba(91,125,106, 1)",
          default : "0 0 10px rgba(252, 252, 252, .7)"
        };

        // // Animate function
        // gsap.utils.toArray(".bottle").forEach(bottle => {
        //   //Get Id of bottle
        //   var id_name = $(bottle).attr('id');

        //   //Animates Scale, Radial Background, and Drop Shadow on Bottle Hover
        //   $(bottle).hover(function(){
        //     gsap.to(bottle, {scale: 1.3, duration: 0.1, ease: "power3.easeOut"});
        //     gsap.to(".oil", {background: objRadial[id_name], duration: 0.5, ease: "power3.easeOut"});
        //     gsap.to(".frame", {"--box": objShadow[id_name]});
        //   }, function() {
        //     gsap.to(bottle, {scale: 1, duration: 0.1, ease: "power3.easeOut"});
        //     gsap.to(".oil", {background: objRadial["default"], duration: 0.5, ease: "power3.easeOut"});
        //     gsap.to(".frame", {"--box": objShadow["default"]});
        //   }); //Bottle Hover
          
        // }); //Bottle Array

        

// Modal for each oil
// *****************************************   

        // Modal Array for each Oil's Button
        gsap.utils.toArray(".fill").forEach(button => {
          
          //Get Id of oil
          var id_name = $(button).attr('id');

          //Animation for OilFill
          const tweenFill = gsap.to(button, {
            duration: 0.2,
            paused: true,
            width: '130vw',
            height: '40vh',
            top:"50%",
            yPercent:-50,
            x: '15vw'
          }); // OilFill Tween

          //Animation for current Main Oil Bottle
          const tweenMain = gsap.to(objMain[id_name], {
            duration: 0.5, 
            paused: true,
            x: '30vw'
          }); // Main Oil Tween

          //Animation for current Back/Front Images and Background Title
          const tweenBack = gsap.to([objBack[id_name], objFront[id_name], objTitle[id_name]], {
            duration: 0.5, 
            paused: true,
            opacity: 0 
          }); // Back/Front/Title Tween

          //Animation for current Excerpt
          const tweenExcerpt = gsap.to(objExcerpt[id_name], {
            duration: 1, 
            paused: true,
            opacity: 1,
            ease: "power4.in"
          }); // Excerpt Tween

          //Click event on Button
          button.addEventListener("click", e => {
            // button.classList.toggle("active");
            $(button).addClass('active');
            $(objMain[id_name]).css('z-index', 12);
            $(objExcerpt[id_name]).css('z-index', 11);

            tweenMain.play();
            tweenBack.play();
            tweenFill.play();
            tweenExcerpt.play().duration(1);
            
            // if(button.classList.contains("active")) {
            //   tweenMain.play();
            //   tweenBack.play();
            // } else {
            //   tweenMain.reverse();
            //   tweenBack.reverse();
            // } // If Active Statement

            // Click event on NavArrow
            document.getElementById("navArrow").addEventListener("click", e => {
              $(button).removeClass('active');
              $(objMain[id_name]).css('z-index', 3);
              $(objExcerpt[id_name]).css('z-index', 1);
              tweenMain.reverse();
              tweenBack.reverse();
              tweenFill.reverse();
              tweenExcerpt.reverse().duration(0.3);
            }); // NavArrow

            // Click event on NavBar
            document.getElementById("navBar").addEventListener("click", e => {
              $(button).removeClass('active');
              $(objMain[id_name]).css('z-index', 3);
              $(objExcerpt[id_name]).css('z-index', 1);
              tweenMain.reverse();
              tweenBack.reverse();
              tweenFill.reverse();
              tweenExcerpt.reverse().duration(0.3);
            }); // NavBar

          }); // Button Click Event
          
        }); //Bottle Array


        function onComplete(message, num) {
          console.log(message, num);
        }

        // gsap.utils.toArray(".fill").forEach(button => {
                  //Animates Scale, Radial Background, and Drop Shadow on Bottle Hover
          // $(button).hover(function(){
          //   // gsap.to(button, {scale: 1.3, duration: 0.1, ease: "power3.easeOut"});
          //   // gsap.to(".main__element", {background: objRadial[id_name], duration: 0.5, ease: "power3.easeOut"});
          //   // gsap.to(".frame", {"--box": objShadow[id_name]});
          // }, function() {
          //   // gsap.to(button, {scale: 1, duration: 0.1, ease: "power3.easeOut"});
          //   // gsap.to(".oil", {background: objRadial["default"], duration: 0.5, ease: "power3.easeOut"});
          //   // gsap.to(".frame", {"--box": objShadow["default"]});
          // }); //Bottle Hover
      // }

              // const tween = gsap.to(shape, {
        //   // width: '150vw', 
        //   // x: '20vw', 
        //   // height: '45vh', 
        //   paused: true, 
        //   onComplete: onComplete, 
        //   onCompleteParams: ["param", 7]
        // });