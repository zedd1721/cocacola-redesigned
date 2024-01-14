let tl = gsap.timeline();

tl.from(".nav>a, .ri-search-line", {
    y: -200,
    duration: 1,
    delay: 0.2,

})

gsap.from(".nav .logo #line1", {
    x: -300,
    opacity: 0,
    duration: 1,
    delay: 0.5,
})

gsap.from(".nav .logo #line2", {
    x: 300,
    opacity: 0,
    duration: 1,
    delay: 0.5,
})

gsap.from(".nav .logo img", {
    scale: 0,
    opacity: 0,
    duration: 1,
    delay: 0.5,
})

gsap.from(".row",{
    x: 550,
    duration: 1,
    stagger: 1,
    delay:2,
    
})

tl.from(".middle .capsule", {
    scale: 0,
    opacity: 0,
    duration: 2,
    delay: 3.5,
})

gsap.from(".scroll", {
    y:20,
    duration: 1,
    repeat: -1,
    // delay: 2,
    yoyo: true,
})

// gsap.from(".left span", {
//     scale: 1,

// })

gsap.from(".left h1, .left p, .left .btn",{
    x: -550,
    duration:1,
    delay: 2,
})

