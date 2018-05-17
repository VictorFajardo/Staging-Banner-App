window.onload = function() {

  // Definitions
  var clickarea = document.getElementById("click-area");
	// var sRays = document.getElementById("sheet0");

  // Functions

  var canvas = document.getElementById("text5");
  var ctx = canvas.getContext("2d");
  var img = document.getElementById("base");
  var mask = document.getElementById("mask");
  ctx.drawImage(img, 0, 0, 160, 600);
  var tweenMask = {
    x  : 160,
    y  : -100,
    scale : 100
  };

  function counter() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.drawImage(mask, tweenMask.x, -tweenMask.y, tweenMask.scale, tweenMask.scale);
    ctx.globalCompositeOperation="source-out";
    ctx.drawImage(img, 0, 0, 160, 600);
    ctx.restore();
  }

	// cta.addEventListener ("click", function(e) { e.preventDefault(); e.stopPropagation(); Enabler.exit("clickTag1"); }, true);
	// clickarea.addEventListener("click", function(e) { e.preventDefault(); e.stopPropagation(); Enabler.exit("clickTag1"); }, true);

  // Animations


  TweenLite.set(text1, {opacity: 1, ease: Power2.easeIn, delay: 0}, 0);
  TweenLite.to(spot1, .5, {opacity: 1, ease: Power2.easeIn, delay: 1.25}, 0);
  TweenLite.to([text1, spot1], 1, {opacity: 0, ease: Power2.easeOut, delay: 2.75}, 0);

  TweenLite.to(text2, .5, {opacity: 1, ease: Power2.easeIn, delay: 2.75}, 0);
  TweenLite.to(spot2, .5, {opacity: 1, ease: Power2.easeIn, delay: 4}, 0);
  TweenLite.to([text2, spot2], 1, {opacity: 0, ease: Power2.easeOut, delay: 5.5}, 0);

  TweenLite.to(text3, .5, {opacity: 1, ease: Power2.easeIn, delay: 5.5}, 0);
  TweenLite.to(spot3, .5, {opacity: 1, ease: Power2.easeIn, delay: 6.75}, 0);
  TweenLite.to([text3, spot3], 1, {opacity: 0, ease: Power2.easeOut, delay: 8.25}, 0);

  TweenLite.to(text4, .5, {opacity: 1, ease: Power2.easeIn, delay: 8.25}, 0);
  TweenLite.to(spot4, .5, {opacity: 1, ease: Power2.easeIn, delay: 9.5}, 0);
  TweenLite.to([text4, spot4], 1, {opacity: 0, ease: Power2.easeOut, delay: 11}, 0);

  TweenLite.to(text5, .5, {opacity: 1, ease: Power2.easeIn, delay: 11}, 0);
  TweenLite.set(black, {opacity: 0, delay: 13.5}, 0);
  TweenLite.set([cta, ipf], {opacity: 1, delay: 13.5}, 0);
  TweenLite.to(tweenMask, .5, {x: "-=475", y: "+=190", scale:"+=700", ease: Linear.easeNone, onUpdate: counter, delay: 13.5}, 0);



  TweenLite.set(cta, {zIndex: 1, delay: 14}, 0);

  TweenLite.to(at, .5, {x: 30, opacity: 1, ease: Power2.easeOut, delay: 14}, 0);
  TweenLite.to(text6, .5, {opacity: 1, ease: Power2.easeOut, delay: 14}, 0);
  TweenLite.to(breathless, .5, {x: 144, opacity: 1, ease: Power2.easeOut, delay: 14.5}, 0);
  TweenLite.to([logo, copy], .25, {y: -40, opacity: 1, ease: Power2.easeOut, delay: 14.75}, 0);

}//end
