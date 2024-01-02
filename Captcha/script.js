"use strict";

// Data
const numbers = "0123456789";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";

// DOM elements
const captchaText = document.getElementById("captcha__text");
const btn = document.getElementById("btn");
const input = document.getElementById("input");

let chars = [];
let captcha = "";

const getRandomChar = () => {
    const mixedString = numbers.concat(upperCaseLetters, lowerCaseLetters);
    return mixedString[Math.floor(Math.random() * mixedString.length)];
};

const generateRandomCaptcha = () => {
    for (let i = 0; i < 6; i++) {
        captcha += getRandomChar();
    }
    captchaText.textContent = captcha;
};

generateRandomCaptcha();

const checkCaptcha = () => {
    const givenValue = input.value;

    if (givenValue === captcha) {
        input.classList.remove("ring-red-600");
        input.classList.add("ring-green-600");
        btn.disabled = false;
        btn.classList.add("bg-green-500");
        btn.classList.remove("bg-gray-300");
        btn.classList.remove("cursor-not-allowed");
    } else {
        input.classList.remove("ring-green-600");
        input.classList.add("ring-red-600");
        btn.disabled = true;
        btn.classList.remove("bg-green-500");
        btn.classList.add("bg-gray-300");
    }
};

input.addEventListener("input", checkCaptcha);

btn.addEventListener("click", () => {
    if (input.value === captcha) {
        alert("Captcha is correct!"); 
        input.value = "";
        generateRandomCaptcha();
        checkCaptcha();
    }
});
