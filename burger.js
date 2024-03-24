"use strict";

const burger= document.querySelector('.burger');
const offmenu = document.querySelector('.off-menu');

export function burgerBar( ) {

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    offmenu.classList.toggle('active');
})
}

