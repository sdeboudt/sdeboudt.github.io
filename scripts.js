var xmlns="http://www.w3.org/2000/svg", xlinkns ="http://www.w3.org/1999/xlink", select = function(s) {
      return document.querySelector(s);
    }, selectAll = function(s) {
      return document.querySelectorAll(s);
    }, container = select('.container'), bubble = select('#bubble'), bubbleGroup = select('.bubbleGroup');

//•••••PLAY WITH THESE VALUES••••••••//

var numBubbles = 12;
var bubbleSize = 7;
var offset = 2;
var startScale = 2;
var endScale = 0;
//1 = normal, 0.5 is half, 2 is double etc
var animationSpeed = 1.3;
//whether they join like liquid or not
var hasGooFilter = true;

//•••••••••••••••••••••••

TweenMax.set(bubbleGroup,{
  filter:(hasGooFilter) ? 'url(#goo)' : ''
})

TweenMax.set(bubble, {
  attr:{
    r:bubbleSize
  }
})
TweenMax.set(container, {
  position:'absolute',
  xPercent:-50,
  yPercent:-50,
  left:'50%',
  top:'50%'
})

var tl = new TimelineMax(), b;

for(var i = 0; i <numBubbles; i++){

  b = document.createElementNS(xmlns, 'use');
  bubbleGroup.appendChild(b);
  TweenMax.set(b,{
    svgOrigin:'300 300'
  })
    b.setAttributeNS(xlinkns, 'xlink:href', '#bubble');

    TweenMax.set(b,{
      rotation:i * (360/numBubbles)
    });

    var t = TweenMax.fromTo(b, 1, {
      scale:startScale
    },{
      scale:endScale,
      repeat:-1,
      ease:Power1.easeInOut,
      yoyo:true
    })
      tl.add(t, i/offset)
    }

TweenMax.set(bubbleGroup,{
  transformOrigin:'50% 50%'
})

tl.seek(100);
tl.timeScale(animationSpeed);
