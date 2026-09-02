document.addEventListener("DOMContentLoaded",()=>{const form=document.querySelector("#contact-form");const success=document.querySelector("#success");form?.addEventListener("submit",event=>{event.preventDefault();form.hidden=true;success?.classList.add("show")})});

