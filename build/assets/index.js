const mobileMenuToggle = document.querySelector(".mobile-toggle");
const navElementChildren = document.querySelectorAll("nav a");
const pageData = {
  testimonials: [
    {
      reviewerName: "Davies",
      xLink : './error404.html',
      dateOfReview: "July 20, 2024",
      reviewerPhoto: "./assets/images/sc-1.jpg",
      reviewerRating: {
        excellent: 4,
        poor: 1,
      },
      review:
        "Horem ipsum dolor sit amet, consec elit. Nunc vulputate libet interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },

    {
      reviewerName: "Vincent",
      xLink : './error404.html',
      dateOfReview: "July 25, 2024",
      reviewerPhoto: "./assets/images/sc-2.jpg",
      reviewerRating: {
        excellent: 4,
        poor: 1,
      },
      review:
        "Consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },

    {
      reviewerName: "Audrey",
      xLink : './error404.html',
      dateOfReview: "20 Aug, 2024",
      reviewerPhoto: "./assets/images/sc-3.jpg",
      reviewerRating: {
        excellent: 4,
        poor: 1,
      },
      review:
        "Horem ipsum doluujjdj sit amet, consectetur adipiscing elit. Nunc vulputate libero tis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },

    {
      reviewerName: "Jackson",
      xLink : './error404.html',
      dateOfReview: "20 Nov, 2024",
      reviewerPhoto: "./assets/images/sc-4.jpg",
      reviewerRating: {
        excellent: 4,
        poor: 1,
      },
      review:
        "Horem ipsum vmmvj dolorg elit. Nunc vulputate libero ejjdj  et velit interdum, ac aliquet odio mattis. Class aptent taciu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },

    {
      reviewerName: "Amy",
      xLink : './error404.html',
      dateOfReview: "20 July 2024",
      reviewerPhoto: "./assets/images/sheila-dp.png",
      reviewerRating: {
        excellent: 4,
        poor: 1,
      },
      review:
        "Horem ipsumng elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },

    {
      reviewerName: "Wilshere",
      xLink : './error404.html',
      dateOfReview: "20 Sept, 2024",
      reviewerPhoto: "./assets/images/sc-2.jpg",
      reviewerRating: {
        excellent: 4,
        poor: 1,
      },
      review:
        "Horem ipsum dolor sitkkgkfm fjfm dunsn elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },

    {
      reviewerName: "Joy",
      xLink : './error404.html',
      dateOfReview: "12 Oct, 2024",
      reviewerPhoto: "./assets/images/joy-dp.png",
      reviewerRating: {
        excellent: 4,
        poor: 1,
      },
      review:
        "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad lkfjjf iokmdjdn ynshsr, per inceptos himenaeos.",
    },

    {
      reviewerName: "Mickie",
      xLink : './error404.html',
      dateOfReview: "08 Nov, 2024",
      reviewerPhoto: "./assets/images/sc-3.jpg",
      reviewerRating: {
        excellent: 4,
        poor: 1,
      },
      review:
        "Horem dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent tacitijfkkcn ooofhhf ysts a nostra, per inceptos himenaeos.",
    },

    {
      reviewerName: "Steve",
      xLink: './error404.html',
      dateOfReview: "19 Dec, 2024",
      reviewerPhoto: "./assets/images/sc-4.jpg",
      reviewerRating: {
        excellent: 4,
        poor: 1,
      },
      review:
        "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
  ],
};


document.addEventListener("DOMContentLoaded", () => {
  let testimonialsCount = 0;
  let slideIndicators = Array.from(document.querySelectorAll(".t-indicators div"));
  let testimonialSliderIndicators = document.getElementById("t-indicators");
  const testimonialsTrack = document.querySelector(".testimonials-track");
  
  // Manages the rendering of the Testimonials section
  const testimonialsProtocol = () => {

    testimonialsTrack.innerHTML = "";
    testimonialSliderIndicators.innerHTML = "";
    let indicatorCount = 1;

    // Returns 10 if the number of available testimonials is greater than 10, otherwise just return the number of available testimonials.
    const requiredNum = () => {
      let num = pageData["testimonials"].length;
      if (pageData["testimonials"].length > 10){
        num = 10;
      } 
      return num;
    }

    // creates between 0 and 10 indicator elemnts depending on the value returned by requiredNum function above.
    for (let seq = 0; seq < requiredNum(); seq++){
      const testimonialSliderIndicator = document.createElement("div");
      const testimonialSliderIndicatorText = document.createElement("p");
      testimonialSliderIndicatorText.textContent = indicatorCount;
      testimonialSliderIndicator.className = "t-indicator";
      testimonialSliderIndicator.id = `t-indicator-${indicatorCount-1}`;
  

      testimonialSliderIndicator.appendChild(testimonialSliderIndicatorText);
      testimonialSliderIndicators.appendChild(testimonialSliderIndicator);
      indicatorCount ++;
    }

    // Renders the most recent testimonials (number depends on the value returned by requiredNum).
    pageData["testimonials"].slice(testimonialsCount, pageData["testimonials"].length).slice(0, 3).forEach((testimonial) => {
      const testimonialDiv = document.createElement("div");
      const profileDiv = document.createElement("div");
      const profileNameSocial = document.createElement("div");
      const reviewerPhotoContainer = document.createElement("div");
      const reviewerPhoto = document.createElement("img");
      const reviewerName = document.createElement("p");
      const xIconLink = document.createElement("a");
      const xIcon = document.createElement("img");
      const reviewTxt = document.createElement("p");
      const hRule = document.createElement("hr");
      const reviewDate = document.createElement("p");
      
  
      testimonialDiv.className = "testimonial";
      profileDiv.className = "reviewer-profile";
      profileNameSocial.className = "reviewer-name-social";
      reviewerPhoto.src = testimonial["reviewerPhoto"];
      reviewerPhoto.className = "reviewer-dp";
      reviewerPhotoContainer.className = "reviewer-dp-container";
      reviewerName.textContent = testimonial["reviewerName"];
      reviewerName.className = "reviewer-name";
      reviewTxt.textContent = testimonial["review"];
      reviewTxt.className = "review-txt";
      xIconLink.setAttribute("href", testimonial["xLink"]);
      xIcon.src = "./assets/images/x-icon.svg";
      xIcon.className = "twitter-icon";
      reviewDate.className = "testimonial-id-timestamp";
      reviewDate.textContent = testimonial["dateOfReview"];
      
      reviewerPhotoContainer.appendChild(reviewerPhoto);
      profileDiv.appendChild(reviewerPhotoContainer);
      profileNameSocial.appendChild(reviewerName);
      xIconLink.appendChild(xIcon);
      profileNameSocial.appendChild(xIconLink);
      profileDiv.appendChild(profileNameSocial);
  
      testimonialDiv.appendChild(profileDiv);
      testimonialDiv.appendChild(reviewTxt);
      testimonialDiv.appendChild(hRule);
      testimonialDiv.appendChild(reviewDate);
  
      testimonialsTrack.appendChild(testimonialDiv);


    })

    testimonialSliderIndicators = document.getElementById("t-indicators");
    slideIndicators = Array.from(document.querySelectorAll(".t-indicators div"));
    slideIndicators.forEach(indicator => {
      indicator.classList.remove("active");
    })

    const testimnlChildren = testimonialSliderIndicators.children;
    console.log(testimnlChildren[testimonialsCount]);
    testimnlChildren[testimonialsCount].classList.add("active");

  }

  document.addEventListener("click",  (event) => {
    let indicatorIndexes = document.querySelectorAll(".t-indicators div");
    indicatorIndexes.forEach(index => {
      if (index.contains(event.target)){
        indicatorIndexes.forEach(indexed => {
          indexed.classList.remove("active");
        })
        const indexId = index.id;
        const slicedIndex = indexId.split("t-indicator-");
        testimonialsCount = slicedIndex[slicedIndex.length-1];
        console.log(testimonialsCount);
        testimonialsProtocol();
      }
    })
  })

  testimonialsProtocol();

  const testimonialCarouselSlider = () => {
    testimonialsProtocol();
    if (testimonialsCount < pageData["testimonials"].length - 1){
      testimonialsCount ++;
    } else{
      testimonialsCount = 0;
      testimonialCarouselSlider();
    }
    console.log(testimonialsCount);
  }

  testimonialCarouselSlider();

  setInterval(testimonialCarouselSlider, 200000000);
});
