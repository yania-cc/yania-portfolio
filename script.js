document.getElementById("year").textContent = new Date().getFullYear();

function sendMessage(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const successMessage = document.getElementById("successMessage");

  successMessage.textContent = `Thank you, ${name}! Your message has been submitted. (This is a demo form)`;

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}
