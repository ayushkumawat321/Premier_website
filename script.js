gsap.from("#over1,#over2",{
    width:0,
    duration:5,
    delay:1,
});
gsap.from("#over1 h2,#over2 img",{
    duration:1,
    opacity:0,
    delay:6,
});

gsap.to("#alphabet h6",{
    duration:0.4,
    rotationX:360,
    stagger:0.15,
    scrollTrigger:{
        trigger:"#alphabet",
        scroller:"body",
        start:"top 60%"
    }
});
gsap.to("#page2-1 h2",{
    duration:1,
    rotationX:360,
    scrollTrigger:{
        trigger:"#page2-1 h2",
        scroller:"body",
        start:"top 60%",
    }
});
gsap.to("#page4 img",{
    width:"100%",
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true,        
    }
});
gsap.from("#page7 img",{
    borderRadius:"150px",
    scale:0.4,
    scrollTrigger:{
        trigger:"#page7",
        scroller:"body",
        start:"top 0%",
        end:"top -100%",
        scrub:1,
        pin:true,
    }
})