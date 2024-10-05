const mobileMenuToggle = document.querySelector(".mobile-toggle");
const navElementChildren = document.querySelectorAll("nav a");
// Manages Mobile Menu Toggles
mobileMenuToggle.addEventListener("click", function () {
  document.querySelector("nav").classList.toggle("opacity-100");
  document.querySelector("nav").classList.toggle("opacity-0");
  document.querySelector("nav").classList.toggle("-translate-x-[100px]");
  document.querySelector(".icon-menu").classList.toggle("hidden");
  document.querySelector(".icon-menu").classList.toggle("block");
  document.querySelector(".icon-close-menu").classList.toggle("block");
  document.querySelector(".icon-close-menu").classList.toggle("hidden");
});

// Manages Mobile Menu Toggles
for (let num = 0; num < navElementChildren.length; num++) {
  navElementChildren[num].addEventListener("mouseup", () => {
    document.querySelector("nav").classList.toggle("opacity-100");
    document.querySelector("nav").classList.toggle("opacity-0");
    document.querySelector("nav").classList.toggle("-translate-x-[100px]");
    document.querySelector(".icon-menu").classList.toggle("hidden");
    document.querySelector(".icon-menu").classList.toggle("block");
    document.querySelector(".icon-close-menu").classList.toggle("block");
    document.querySelector(".icon-close-menu").classList.toggle("hidden");
  });
}

// Manages Mobile Menu Toggles
document.addEventListener("click", (event) => {
  const mobileMenu = document.querySelector("nav");
  const innerMobileMenu = document.querySelector(".nav-ul");
  const mobileMenuToggle = document.querySelector(".mobile-toggle");
  const faq = document.querySelectorAll(".question");

  if (
    !mobileMenu.contains(event.target) &&
    !innerMobileMenu.contains(event.target) &&
    mobileMenu.classList.contains("opacity-100", "-translate-x-[100px]") &&
    !mobileMenuToggle.contains(event.target)
  ) {
    mobileMenu.classList.remove("opacity-100", "-translate-x-[100px]");
    document.querySelector(".icon-menu").classList.toggle("hidden");
    document.querySelector(".icon-menu").classList.toggle("block");
    document.querySelector(".icon-close-menu").classList.toggle("block");
    document.querySelector(".icon-close-menu").classList.toggle("hidden");
  }

  for (let num = 0; num < faq.length; num++) {
    if (faq[num].contains(event.target)) {
      var targetAns = document.querySelector("#answer" + num);
      var plusMinusSign = document.querySelector("#sign" + num);
      if (targetAns.classList.contains("ans-active")) {
        targetAns.classList.remove("ans-active");
        plusMinusSign.innerHTML = "+";
      } else {
        targetAns.classList.add("ans-active");
        plusMinusSign.innerHTML = "-";
        plusMinusSign.classList.add("bolder-sign");
      }
    }
  }
});

const adjustScreen = (event) => {
  // event.preventDefault();
  if (event.target.href !== window.location.href) {
    sessionStorage.setItem('scrollAfterLoad', 'true');
  }

  setTimeout(() => {
    window.scrollBy(
      {
        top: -76,
        behavior: 'smooth'
      }
    ), 5})
}

// Check on page load whether to scroll
window.addEventListener('load', ()=> {
  if (sessionStorage.getItem('scrollAfterLoad') === 'true') {
    window.scrollBy({
      top: -76,
      behavior: 'smooth'
    });
    sessionStorage.removeItem('scrollAfterLoad'); // Clean up
  }
});


// EMAIL FORM INPUTS VALIDATION FUNCTION
const emailValidation = (emailId, errorMessageId) => {
  const emailInput = document.getElementById(emailId);
  const errorMessage = document.getElementById(errorMessageId);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailInput.value)) {
    event.preventDefault();
    emailInput.classList.add("error");
    errorMessage.style.display = "inline";
  } else {
    emailInput.classList.remove("error");
    errorMessage.style.display = "none";
  }

  document.getElementById(emailId).oninput = () => {
    errorMessage.style.display = "none";
  };
};
