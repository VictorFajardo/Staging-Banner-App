window.onload = function() {

  // Definitions
  var clickarea = document.getElementById("click-area");

  // Functions

  // Animations
  gsap.to(sheet3, .85, {x: 40, y: 400, rotation: 5, rotationX: 0, rotationY: 0, rotationZ: 0, ease: Power2.easeOut, delay: 0}, 0);
  gsap.to(sheet2, .85, {x: 0, y: 400, rotation: -4, rotationX: 0, rotationY: 0, rotationZ: 0, ease: Power2.easeOut,delay: .25}, 0);
  gsap.to(sheet1, .85, {x: -40, y: 400, rotation: -17, rotationX: 0, rotationY: 0, rotationZ: 0, ease: Power2.easeOut,delay: .5}, 0);
  gsap.to(text1, .5, {opacity: 1, ease: Power0.easeNone, delay: .75}, 0);
  gsap.to(sheet1, .75, {y: 970, rotation: -87, rotationX: -10, rotationY: 10, scale: 1.2, ease: Power2.easeOut, delay: 4.6}, 0);
  gsap.to(text1, .1, {height: 0, ease: Power0.easeNone, delay: 4.58}, 0);
  gsap.to(text2, .1, {height: 150, ease: Power0.easeNone, delay: 4.58}, 0);
  gsap.to(sheet2, .75, {y: 970, rotation: -24, rotationX: -10, rotationY: 10, scale: 1.2, ease: Power2.easeOut, delay: 9.2}, 0);
  gsap.to(text2, .1, {height: 0, ease: Power0.easeNone, delay: 9.18}, 0);
  gsap.to(text3, .1, {height: 120, ease: Power0.easeNone, delay: 9.18}, 0);
  gsap.to(sheet3, .75, {y: 970, rotation: -15, rotationX: -10, rotationY: 10, scale: 1.2, ease: Power2.easeOut, delay: 13.25}, 0);
  gsap.to(text3, .1, {height: 0, ease: Power0.easeNone, delay: 13.3}, 0);
  gsap.to(text4, .15, {height: 60, ease: Power0.easeNone, delay: 13.25}, 0);
  gsap.to(cta, .1, {width: 113, ease: Power0.easeNone, delay: 13.28}, 0);
  gsap.set(cta, {zIndex: 1, delay: 14}, 0);
  gsap.to(at, .5, {x: 30, opacity: 1, ease: Power2.easeOut, delay: 14}, 0);
  gsap.to(breathless, .5, {x: 144, opacity: 1, ease: Power2.easeOut, delay: 14.5}, 0);
  gsap.to([logo, copy], .25, {y: -40, opacity: 1, ease: Power2.easeOut, delay: 14.75}, 0);

}//end
