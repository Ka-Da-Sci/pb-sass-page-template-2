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

const ratingsVal = document.getElementById("rating-num").textContent;

const ratingsValFrac = () => {
  const rawVal = parseFloat(ratingsVal);
  return rawVal % 1;
}

const caliberateRating = (event) => {
  const ratingsPar = document.getElementById("star-ratings");
  const ratingsParChildren = ratingsPar.children;
  
  Array.from(ratingsParChildren).slice(0, parseInt(Math.floor(ratingsVal))).forEach((rating) => {
    rating.classList.remove("bg-gray-500");
    rating.classList.add("bg-yellow-500");
  })
  if (ratingsValFrac() > 0.3 && parseInt(Math.floor(ratingsVal)) < 5){
    ratingsParChildren[parseInt(Math.floor(ratingsVal))].classList.remove("bg-gray-500");
    ratingsParChildren[parseInt(Math.floor(ratingsVal))].classList.add('bg-[linear-gradient(to_right,_yellow,_gray)]')
  }
}
caliberateRating();

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
const testimonies = document.querySelector(".testimonials-track").children;

document.addEventListener("DOMContentLoaded", () => {
  let testimonialsCount = 0;
  let endTestimonialsCount = +testimonialsCount + 3;
  let slideIndicators = Array.from(document.querySelectorAll(".t-indicators div"));
  let testimonialSliderIndicators = document.getElementById("t-indicators");
  
  // Manages the rendering of the Testimonials section
  const testimonialsProtocol = () => {

    // testimonialsTrack.innerHTML = "";
    testimonialSliderIndicators.innerHTML = "";
    let indicatorCount = 1;

    // Returns 10 if the number of available testimonials is greater than 10, otherwise just return the number of available testimonials.
    const requiredNum = () => {
      let num = Array.from(testimonies).length;
      if (Array.from(testimonies).length > 10){
        num = 10;
      } 
      return num;
    }

    if (endTestimonialsCount > requiredNum()) {
      endTestimonialsCount = requiredNum();
    }

    // creates between 0 and 10 indicator elemnts depending on the value returned by requiredNum function above.
    for (let seq = 0; seq < requiredNum(); seq++){
      const testimonialSliderIndicator = document.createElement("div");
      const testimonialSliderIndicatorText = document.createElement("p");
      testimonialSliderIndicatorText.textContent = indicatorCount;
      testimonialSliderIndicator.className = "t-indicator";
      testimonialSliderIndicator.classList.add('flex', 'items-center', 'justify-center', 'sm:w-[15px]', 'sm:h-[15px]', 'w-[9px]', 'h-[9px]', 'rounded-[50%]', 'cursor-pointer', 'bg-[rgba(217,217,217,1)]');
      testimonialSliderIndicatorText.classList.add('hidden');
      testimonialSliderIndicator.id = `t-indicator-${indicatorCount-1}`;
  

      testimonialSliderIndicator.appendChild(testimonialSliderIndicatorText);
      testimonialSliderIndicators.appendChild(testimonialSliderIndicator);
      indicatorCount ++;
    }

    // Renders the most recent testimonials (number depends on the value returned by requiredNum).
    Array.from(testimonies).forEach((testimonial) => {
      testimonial.style.display = "none";

    })

    const targetTestimonies = Array.from(testimonies).slice(0, requiredNum()).slice(testimonialsCount, endTestimonialsCount);
    targetTestimonies.forEach((testimonial) => {
      testimonial.style.display = "flex";
    })

    testimonialSliderIndicators = document.getElementById("t-indicators");
    slideIndicators = Array.from(document.querySelectorAll(".t-indicators div"));
    slideIndicators.forEach(indicator => {
      indicator.classList.remove('bg-[rgba(35,_70,_255,_1)]', 'text-[white]');
    })

    let indicatorIndex = testimonialsCount;
    if (testimonialsCount >= Array.from(testimonies).length){
      indicatorIndex = Array.from(testimonies).length - 1;
    }
    const testimnlChildren = testimonialSliderIndicators.children;
    testimnlChildren[indicatorIndex].classList.remove('bg-[rgba(217,217,217,1)]');
    testimnlChildren[indicatorIndex].classList.add('bg-[rgba(35,_70,_255,_1)]', 'text-[white]');

  }

  document.addEventListener("click",  (event) => {
    let indicatorIndexes = document.querySelectorAll(".t-indicators div");
    indicatorIndexes.forEach(index => {
      if (index.contains(event.target)){
        indicatorIndexes.forEach(indexed => {
          indexed.classList.remove('bg-[rgba(35,_70,_255,_1)]', 'text-[white]');
        })
        const indexId = index.id;
        const slicedIndex = indexId.split("t-indicator-");
        testimonialsCount = slicedIndex[slicedIndex.length-1];
        endTestimonialsCount = +testimonialsCount + 3;
        console.log(testimonialsCount);
        testimonialsProtocol();
      }
    })
  })

  // testimonialsProtocol();

  const testimonialCarouselSlider = () => {
    testimonialsProtocol();
    if (testimonialsCount <= Array.from(testimonies).length - 1){
      testimonialsCount ++;
      endTestimonialsCount = testimonialsCount + 3;
    } else{
      testimonialsCount = 0;
      endTestimonialsCount = testimonialsCount + 3;
      testimonialCarouselSlider();
    }
  }

  testimonialCarouselSlider();

  setInterval(testimonialCarouselSlider, 20000);
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
