document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector("#contact-form");
  const contactSuccess = document.querySelector("#contact-success");
  const contactError = document.querySelector("#contact-error");
  contactForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalLabel = submitButton?.textContent;

    if (contactError) contactError.hidden = true;
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending…";
    }

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Form submission failed");

      contactForm.hidden = true;
      contactSuccess?.classList.add("show");
      contactForm.reset();
    } catch (error) {
      if (contactError) contactError.hidden = false;
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalLabel;
      }
    }
  });
});
