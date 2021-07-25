
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


// Check for Touch Devices
var isTouch = 'ontouchstart' in document.documentElement;

// If on a non Touch device
if(!isTouch) {

} // Not a Touch

// PreLoader Script
// *****************************************
        //Set timed delay before removing loading screen
          window.addEventListener("load", function(){
              window.setTimeout(function(){
                  const loader = document.querySelector(".loader");
                  loader.className += " hidden";
              }, 3000);
          });

// Open/Close Nav Menu Script
// *****************************************
          document.getElementById("menu").onclick = function(e){
              var nameCheck = document.getElementById("toggler");
              nameCheck.checked = !nameCheck.checked;
          }

// Smooth Scrolling with Nav Bar
// *****************************************
        //Detect if a link's href goes to the current page
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

        //Scroll to a given hash, preventing the event given if there is one
          function scrollToHash(hash, e) {
            const elem = hash ? document.querySelector(hash) : false;
            if(elem) {
                if(e) e.preventDefault();
                gsap.to(window, {duration: .8, scrollTo: {y: elem, offsetY: 93}});
            }
          }

        //If a link's href is within the current page, scroll to it instead
          document.querySelectorAll('a[href]').forEach(a => {
              a.addEventListener('click', e => {
              scrollToHash(getSamePageAnchor(a), e);
              });
          });

        //Scroll to the element in the URL's hash on load
          scrollToHash(window.location.hash);

        //Auto Scrolls to top on relaod
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
        //Simple SnapTo
          let sections = gsap.utils.toArray(".panel");
          ScrollTrigger.create({
            snap: {
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
  

// Animate Modals for Oil Section
// *****************************************   
        //Define Section for each Oil
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

        //Define Main element for each Oil
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

        //Define Back element for each Oil
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

        //Define Front element for each Oil
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

        //Define Title element for each Oil
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

        //Define Excerpt element for each Oil
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
        

// Modal for each oil
// *****************************************   

        //Modal Array for each Oil's Button
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

            //Click event on Oil Button
              button.addEventListener("click", e => {
                $(button).addClass('active');
                $(objMain[id_name]).css('z-index', 12);
                $(objExcerpt[id_name]).css('z-index', 11);
                tweenMain.play();
                tweenBack.play();
                tweenFill.play();
                tweenExcerpt.play().duration(1);
              }); // Button Click Event

            //Click event on NavArrow
              document.getElementById("navArrow").addEventListener("click", e => {
                $(button).removeClass('active');
                $(objMain[id_name]).css('z-index', 3);
                $(objExcerpt[id_name]).css('z-index', 1);
                tweenMain.reverse();
                tweenBack.reverse();
                tweenFill.reverse();
                tweenExcerpt.reverse().duration(0.3);
              }); // NavArrow

            //Click event on NavBar
              document.getElementById("navBar").addEventListener("click", e => {
                $(button).removeClass('active');
                $(objMain[id_name]).css('z-index', 3);
                $(objExcerpt[id_name]).css('z-index', 1);
                tweenMain.reverse();
                tweenBack.reverse();
                tweenFill.reverse();
                tweenExcerpt.reverse().duration(0.3);
              }); // NavBar

          }); //Bottle Array


        // function onComplete(message, num) {
        //   console.log(message, num);
        // }
        //   onComplete: onComplete, 
        //   onCompleteParams: ["param", 7]
