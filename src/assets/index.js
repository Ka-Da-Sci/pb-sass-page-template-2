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
    sessionStorage.setItem("scrollAfterLoad", "true");
  }

  setTimeout(() => {
    window.scrollBy({
      top: -76,
      behavior: "smooth",
    }),
      5;
  });
};

// Check on page load whether to scroll
window.addEventListener("load", () => {
  if (sessionStorage.getItem("scrollAfterLoad") === "true") {
    window.scrollBy({
      top: -76,
      behavior: "smooth",
    });
    sessionStorage.removeItem("scrollAfterLoad"); // Clean up
  }
});

// Mock function to simulate a backend response
const simulateBackend = (formData) => {
  return new Promise((resolve) => {
    // Simulate a 1-second delay to mimic server processing
    setTimeout(() => {
      // Simulate validation: ensure all fields are present

      if (
        !formData["fullName"] ||
        !formData["email"]
      ) {



        console.log(formData);
        // reject(new Error("All form fields are required."));
        resolve({
          status: 403,
          message: "All form fields are required.",
        });
      }

      // Simulate email validation on the server
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formData["email"])) {
        // reject(new Error("Invalid email address."));
        resolve({
          status: 403,
          message: "Invalid email address.",
        });
      }

      // Simulate a successful response
      resolve({
        status: 201,
        message: "Sign up successful.",
      });
    }, 1000); // 1-second delay
  });
};

// Handle form submission
const handleFormSubmission = (emailId, errorMessageId) => async (event) => {
  event.preventDefault(); // Prevent default form submission

  const emailInput = document.getElementById(emailId);
  const errorMessage = document.getElementById(errorMessageId);

  // Client-side email validation
  if (!emailValidation(emailId, errorMessageId)) {
    return; // Stop if email is invalid
  }

  // Disable the submit button to prevent multiple submissions
  const submitButton = event.target.querySelector("button[type='submit']");
  submitButton.disabled = true;
  submitButton.textContent.trim() !== ""
    ? (submitButton.textContent = "Processing...")
    : "";

  try {
    // Collect form data
    const formData = {"email": event.target.querySelector("input[name=email]").value, "fullName":  event.target.querySelector("input[name=fullName]").value};
    console.log(formData)


    // Simulate backend request
    let response;
    response = await simulateBackend(formData);

    if (response.status === 201) {
      event.target.reset();
      // Show success message in hover card
      toggleHoverCard("Success", response.message);
    } else {
      toggleHoverCard("Form Error!", response.message);
    }
  } catch (error) {
    // Show error message in hover card
    toggleHoverCard(
      "Error",
      error.message ||
        "An error occurred while submitting the form. Please try again later."
    );
  } finally {
    // Re-enable the submit button
    submitButton.disabled = false;
    submitButton.textContent.trim() !== ""
      ? (submitButton.textContent = "Signup To The VIP JVs List")
      : "";
  }

  // Clear email error message when user starts typing
  emailInput.oninput = () => {
    errorMessage.style.display = "none";
    emailInput.classList.remove("error");
  };
};

const signUpForm = document.querySelector(".form-container");
signUpForm.addEventListener(
  "submit",
  handleFormSubmission("sign-up-email", "sign-up-email-error-message")
);

// EMAIL FORM INPUTS VALIDATION FUNCTION
const emailValidation = (emailId, errorMessageId) => {
  const emailInput = document.getElementById(emailId);
  const errorMessage = document.getElementById(errorMessageId);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  document.getElementById(emailId).oninput = () => {
    errorMessage.style.display = "none";
  };

  if (!emailPattern.test(emailInput.value)) {
    emailInput.classList.add("error");
    errorMessage.style.display = "inline";
    return false;
  } else {
    emailInput.classList.remove("error");
    errorMessage.style.display = "none";
    return true;
  }
};

const toggleHoverCard = (headerText, bodyText) => {
  const hoverCard = document.getElementById("hover-card");
  const hoverCardBody = document.getElementById("hover-card-body-text");
  const hoverCardHeader = document.getElementById("hover-card-header-text");

  hoverCard.classList.toggle("hidden");
  hoverCardHeader.textContent = headerText;
  hoverCardBody.textContent = bodyText;
};
