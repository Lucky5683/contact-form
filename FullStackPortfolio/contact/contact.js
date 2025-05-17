const form = document.getElementById("contactForm");
const responseMessage = document.getElementById("responseMessage");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  responseMessage.textContent = "";

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    responseMessage.style.color = "yellow";
    responseMessage.textContent = "Please fill out all fields.";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    responseMessage.style.color = "yellow";
    responseMessage.textContent = "Please enter a valid email address.";
    return;
  }

  responseMessage.style.color = "#90ee90";
  responseMessage.textContent = "Thanks for reaching out! I'll get back to you soon.";

  form.reset();
});
