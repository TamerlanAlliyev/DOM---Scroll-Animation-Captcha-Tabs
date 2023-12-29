"use strict";

const animationItems = document.querySelectorAll(".animationItem");

const scrollAnimation =()=>{
    animationItems.forEach((animationItems)=>{
        const triggerPoint = window.innerHeight*0.8;
        const {top:distanceFromTop} = animationItems.getBoundingClientRect();

        animationItems.style.transition = "all 200ms linear";

        if(distanceFromTop<triggerPoint){
            animationItems.style.opacity = 0;
            animationItems.style.transform = "translateY(50px)";
            animationItems.classList.remove("opacity-0")
        }else{
            animationItems.style.opacity = 0;
            animationItems.style.transform = "translateY(50px)";
            animationItems.classList.remove("opacity-0")

        }

    })
}

scrollAnimation();

window.addEventListener("scroll",scrollAnimation)