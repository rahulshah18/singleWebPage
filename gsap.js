/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* global gsap */

var t = gsap.timeline()

t.from(".part1" , {
    y:-100,
    duration: 0.5,
    delay: 0.5,
    opacity: 0,
})
t.from(".part2" , {
    y:-100,
    duration: 0.5,
    opacity: 0,
})
t.from(".part3" , {
    y:-100,
    duration: 0.5,
    opacity: 0,
})

t.from(".text h1", {
    x:-10000
})
t.from(".text span", {
    x:100000,
})
t.from(".text h2", {
    y:10000
})
t.from(".icons, .img2 img , .part2 h3:nth-last-child(1)", {
    y:1,
    x:-1,
    y:-1,
    x:+1,
    duration:0.2,
    yoyo:true,
    repeat:-1
})
t.from(".img1  img, .img2 img", {
    scale:0,
    opacity:0,
    stagger:0.3
})