gsap.to("#box",{
  x:1000,
  duration:3,
  Delay:2,
  rotate:360,
  backgroundColor:"yellow",
  scale:0.5,
  borderRadius:"50%"
})

gsap.from("h1",{
  opacity:0,
  duration:1,
  y:30,
  delay:4,
  stagger:-0.5
})

var tl = gsap.timeline()

 tl.from("h2",{
  y:-60,
  opacity:0,
  duration:0.5,
  delay:0.5
})

tl.from("h3",{
  y:-60,
  opacity:1,
  duration:0.5,
  delay:1.5,
  stagger:0.3
})