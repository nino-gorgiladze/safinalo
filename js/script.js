
"use strict";

import { burgerBar } from "./burger.js";
burgerBar();



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}






// სარეგისტრაციოს ვალიდაცია

let form = document.getElementById("formelement");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let errors = {};

  //username
  let usernameValue = document.getElementById("usernamefield").value;

  if (usernameValue.length < 4) {
    errors.username = "Username must be more than 4 characters";
  }

  if (usernameValue == "") {
    errors.username = "Username can not be empty";
  }

  // password
  let passwordValue1 = document.getElementById("passwordfield").value;
  let passwordValue2 = document.getElementById("passwordfiled2").value;

  if (passwordValue1 == "") {
    errors.passw = "password can not be emtpy";
  }
  if (passwordValue1 != passwordValue2) {
    errors.passw2 = "passwords do not match";
  }

  // radio
  let gender = false;
  let radioElements = this.querySelectorAll('[name="gender"]');
  radioElements.forEach((item) => {
    if (item.checked) {
      gender = true;
    }
  });

  if (!gender) {
    errors.gender = "Please Select Your Gender";
  }

  //checkbox
  let checkBoxAgree = document.getElementById("checkfield").checked;
  if (!checkBoxAgree) {
    errors.agree = "You must agree our terms and conditions";
  }

  console.log(errors);

  this.querySelectorAll(".error-text").forEach((el) => {
    el.textContent = " ";
  });

  for (let item in errors) {
    console.log(item); //key

    let errorTextElement = document.getElementById("error_" + item);
    console.log(errorTextElement);

    if (errorTextElement) {
      errorTextElement.textContent = errors[item];
    }
  }

  if (Object.keys(errors).length === 0) {
    this.submit();
  }
});


// show hide password
let passw = document.getElementById("passwordfield");
let icon = document.getElementById("toggleIcon");

icon.addEventListener("click", function () {
  if (passw.type == "password") {
    passw.setAttribute("type", "text");
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    passw.setAttribute("type", "password");
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
});

// email regex
let email = document.getElementById("emailfield");

function validation() {
  let emailValue = document.getElementById("emailfield").value;
  let textError = document.getElementById("error-email");
  let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailPattern.test(emailValue)) {
    textError.textContent = "Your Email is valid";
    textError.style.color = "green";
  } else {
    textError.textContent = "Your Email is invalid";
    textError.style.color = "red";
  }

  if (emailValue == "") {
    textError.innerHTML = " ";
  }
}

email.addEventListener("keyup", validation);










// სლაიდები
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


