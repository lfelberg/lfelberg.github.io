document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector("#contact-form");
  const contactSuccess = document.querySelector("#contact-success");
  contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    contactForm.hidden = true;
    contactSuccess?.classList.add("show");
  });

  const signupForm = document.querySelector("#signup-form");
  const signupSuccess = document.querySelector("#signup-success");
  signupForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    signupForm.hidden = true;
    if (signupSuccess) signupSuccess.style.display = "block";
  });
});

