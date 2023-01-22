const tl = gsap.timeline({defaults: {duration: 0.75, ease: "power1.out"}})

tl.fromTo('.square', {y: 0, rotation: '0deg'}, {y: -20, yoyo: true, repeat: -1})
