window.onload = function() {

  // Definitions
  var clickarea = document.getElementById("click-area");
	// var sRays = document.getElementById("sheet0");

  // Functions

	// cta.addEventListener ("click", function(e) { e.preventDefault(); e.stopPropagation(); Enabler.exit("clickTag1"); }, true);
	// clickarea.addEventListener("click", function(e) { e.preventDefault(); e.stopPropagation(); Enabler.exit("clickTag1"); }, true);

  // Animations


  TweenLite.to(sheet3, .85, {x: 40, y: 400, rotation: 5, rotationX: 0, rotationY: 0, rotationZ: 0, ease: Power2.easeOut, delay: 0}, 0);
  TweenLite.to(sheet2, .85, {x: 0, y: 400, rotation: -4, rotationX: 0, rotationY: 0, rotationZ: 0, ease: Power2.easeOut,delay: .25}, 0);
  TweenLite.to(sheet1, .85, {x: -40, y: 400, rotation: -17, rotationX: 0, rotationY: 0, rotationZ: 0, ease: Power2.easeOut,delay: .5}, 0);

  TweenLite.to(text1, .5, {opacity: 1, ease: Power0.easeNone, delay: .75}, 0);

  TweenLite.to(sheet1, .75, {y: 970, rotation: -187, rotationX: -10, rotationY: 10, scale: 1.2, ease: Power2.easeOut, delay: 4.6}, 0);

  TweenLite.to(text1, .1, {height: 0, ease: Power0.easeNone, delay: 4.58}, 0);
  TweenLite.to(text2, .1, {height: 150, ease: Power0.easeNone, delay: 4.58}, 0);
  // TweenLite.set(text2, {rotation: 0, x: -120, y: -150, delay: 4.8}, 0);
  // TweenLite.set(text2inner, {rotation: 0, delay: 4.8}, 0);

  TweenLite.to(sheet2, .75, {y: 970, rotation: -124, rotationX: -10, rotationY: 10, scale: 1.2, ease: Power2.easeOut, delay: 9.2}, 0);

  TweenLite.to(text2, .1, {height: 0, ease: Power0.easeNone, delay: 9.18}, 0);
  TweenLite.to(text3, .1, {height: 120, ease: Power0.easeNone, delay: 9.18}, 0);
  // TweenLite.set(text3, {rotation: 0, x: -150, y: -120, delay: 9.4}, 0);
  // TweenLite.set(text3inner, {rotation: 0, delay: 9.4}, 0);

  TweenLite.to(sheet3, .75, {y: 970, rotation: -115, rotationX: -10, rotationY: 10, scale: 1.2, ease: Power2.easeOut, delay: 13.25}, 0);


  TweenLite.to(text3, .1, {height: 0, ease: Power0.easeNone, delay: 13.3}, 0);
  TweenLite.to(text4, .15, {height: 30, ease: Power0.easeNone, delay: 13.25}, 0);
  TweenLite.to(cta, .1, {width: 113, ease: Power0.easeNone, delay: 13.28}, 0);
  // TweenLite.to(bg, .5, {x: -40, y: 10, ease: Power2.easeOut, delay: 13.5}, 0);
  TweenLite.set(cta, {zIndex: 1, delay: 14}, 0);

  TweenLite.to(at, .5, {x: 30, opacity: 1, ease: Power2.easeOut, delay: 14}, 0);
  TweenLite.to(breathless, .5, {x: 144, opacity: 1, ease: Power2.easeOut, delay: 14.5}, 0);
  TweenLite.to([logo, copy], .25, {y: -40, opacity: 1, ease: Power2.easeOut, delay: 14.75}, 0);
/**/
}//end
