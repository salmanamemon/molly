Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", {videos: ["./0.mp4", "./2.mp4", "./3.mp4"]});

var tl = gsap.timeline({
    scrollTrigger:{
        trigger: "#fimages",
        scroller: "body",
        pin: true,
        //markers:true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1,
    }
});
tl.to(".fleftelm", {
    y: "-300%",
    ease: Power1,
});

let sections = document.querySelectorAll(".fleftelm");
Shery.imageEffect(".images", {
    style: 5,
    //debug:true,
    slideStyle:(setScroll) =>{
        sections.forEach(function(section, index){
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                scrub: 1,
                onUpdate: function(prog){
                    //console.log(prog);
                    setScroll(prog.progress + index)
                },
            });
        });
    },
    //config: {onMouse : {value: 1}},
});

var t2 = gsap.timeline({
    scrollTrigger:{
        trigger: ".container",
        scroller: "body",
        pin: true,
        // markers:true,
        start: "top center",
        end: "bottom center",
        scrub: 1,
    }
});
t2.from(".footer", {
    y: 400,
    opacity:0,
    ease: Power1,
});