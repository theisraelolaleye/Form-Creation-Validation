document.addEventListener("DOMContentLoaded", () => {
  // All your JavaScript goes inside here

  console.log("DOM fully loaded and parsed");

  const form = document.getElementById("registration-form ")
  const feedbackDiv = document.getElementById("form-feedback")


  const usernameInput = document.getElementById("username")
  const emailInput = document.getElementById("email")
  const passwordInput = document.getElementById("password")


  form.addEventListener('submit', (event) => {
    event.preventDefault()

    const username = usernameInput.value.trim()
    const email = emailInput.value.trim()
    const password = passwordInput.value.trim()

    let isValid = true;
    let messages = [];

    // username validation 
    if (username.length < 3) {
      isValid = false;
      messages.push("Please enter a valid username.");
      return;
    }

    // email validation
    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push("Please enter a valid email address.");
      return;
    }

    // password validation 
    if (password.length < 8) {
      isValid = false;
      messages.push("Please enter a valid password.");
      return;
    }

    // Feedback display logic
    feedbackDiv.style.display = "block"

    if (isValid) {
      feedbackDiv.textContent = "Registration successful"
      feedbackDiv.style.color = "28a745"
    }
    if (!isValid) {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545";
    }

  })


});
