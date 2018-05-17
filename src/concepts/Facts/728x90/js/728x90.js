window.onload = function() {

  // Definitions
  var clickarea = document.getElementById("click-area");
	// var sRays = document.getElementById("sheet0");

  // Functions

	// cta.addEventListener ("click", function(e) { e.preventDefault(); e.stopPropagation(); Enabler.exit("clickTag1"); }, true);
	// clickarea.addEventListener("click", function(e) { e.preventDefault(); e.stopPropagation(); Enabler.exit("clickTag1"); }, true);

  // Animations

  TweenLite.to(sheet3, .75, {x: 40, y: -200, rotation: 5, rotationX: 0, rotationY: 0, rotationZ: 0, ease: Power2.easeOut, delay: 0}, 0);
  TweenLite.to(sheet2, .75, {x: 0, y: -200, rotation: -4, rotationX: 0, rotationY: 0, rotationZ: 0, ease: Power2.easeOut,delay: .25}, 0);
  TweenLite.to(sheet1, .75, {x: -40, y: -200, rotation: -17, rotationX: 0, rotationY: 0, rotationZ: 0, ease: Power2.easeOut,delay: .5}, 0);

  TweenLite.to(text1, .5, {opacity: 1, ease: Power0.easeNone, delay: .75}, 0);

  TweenLite.to(sheet1, .75, {x: 560, rotation: -37, rotationX: -10, rotationY: 10, scale: 1.2, ease: Power2.easeOut, delay: 4.6}, 0);

  TweenLite.to(text1, .18, {width: 0, ease: Power0.easeNone, delay: 4.62}, 0);
  TweenLite.to(text2, .18, {width: 300, ease: Power0.easeNone, delay: 4.62}, 0);
  TweenLite.set(text2, {rotation: 180, x: 300, y: 60, delay: 4.8}, 0);
  TweenLite.set(text2inner, {rotation: 180, delay: 4.8}, 0);

  TweenLite.to(sheet2, .75, {x: 560, rotation: -24, rotationX: -10, rotationY: 10, scale: 1.2, ease: Power2.easeOut, delay: 9.2}, 0);

  TweenLite.to(text2, .18, {width: 0, ease: Power0.easeNone, delay: 9.22}, 0);
  TweenLite.to(text3, .18, {width: 300, ease: Power0.easeNone, delay: 9.22}, 0);
  TweenLite.set(text3, {rotation: 180, x: 300, y: 90, delay: 9.4}, 0);
  TweenLite.set(text3inner, {rotation: 180, delay: 9.4}, 0);

  TweenLite.to(sheet3, .75, {x: 585, rotation: -15, rotationX: -10, rotationY: 10, scale: 1.2, ease: Power2.easeOut, delay: 13.25}, 0);


  TweenLite.to(text3, .16, {width: 0, ease: Power0.easeNone, delay: 13.27}, 0);
  TweenLite.to(text4, .18, {width: 220, ease: Power0.easeNone, delay: 13.25}, 0);
  TweenLite.to(cta, .1, {width: 113, ease: Power0.easeNone, delay: 13.28}, 0);
  TweenLite.to(bg, .5, {x: -40, y: 10, ease: Power2.easeOut, delay: 13.5}, 0);
  TweenLite.set(cta, {zIndex: 1, delay: 14}, 0);

  TweenLite.to(at, .5, {x: 30, opacity: 1, ease: Power2.easeOut, delay: 14}, 0);
  TweenLite.to(breathless, .5, {x: 144, opacity: 1, ease: Power2.easeOut, delay: 14.5}, 0);
  TweenLite.to([logo, copy], .25, {y: -40, opacity: 1, ease: Power2.easeOut, delay: 14.75}, 0);

}//end
