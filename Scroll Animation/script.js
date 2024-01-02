"use strict";

const animationItems = document.querySelectorAll(".animationItem");

const scrollAnimation = () => {
    animationItems.forEach((animationItem) => {
        const triggerPoint = window.innerHeight * 0.8;
        const { top: distanceFromTop } = animationItem.getBoundingClientRect();

        animationItem.style.transition = "all 200ms linear";

        if (distanceFromTop < triggerPoint) {
            animationItem.style.opacity = 1;
            animationItem.style.transform = "translateY(0)";
            animationItem.classList.remove("opacity-0");
        } else {
            animationItem.style.opacity = 0;
            animationItem.style.transform = "translateY(50px)";
            animationItem.classList.add("opacity-0");
        }
    });
};

scrollAnimation();

window.addEventListener("scroll", scrollAnimation);
