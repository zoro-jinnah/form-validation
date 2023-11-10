const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPassInput = document.getElementById("confirmpassword");

const form = document.getElementById("form");

const passToggleBtn = document.getElementById("passbtn");
const passEyeIcon = document.querySelector("#passbtn i");

const cpassToggleBtn = document.getElementById("cpassbtn");
const cpassEyeIcon = document.querySelector("#cpassbtn i");

passToggleBtn.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.setAttribute("type", "text");
    passEyeIcon.classList.add("fa-eye-slash");
    passEyeIcon.classList.remove("fa-eye");
  } else {
    passwordInput.setAttribute("type", "password");
    passEyeIcon.classList.remove("fa-eye-slash");
    passEyeIcon.classList.add("fa-eye");
  }
});

cpassToggleBtn.addEventListener("click", () => {
  if (confirmPassInput.type === "password") {
    confirmPassInput.setAttribute("type", "text");
    cpassEyeIcon.classList.add("fa-eye-slash");
    cpassEyeIcon.classList.remove("fa-eye");
  } else {
    confirmPassInput.setAttribute("type", "password");
    cpassEyeIcon.classList.remove("fa-eye-slash");
    cpassEyeIcon.classList.add("fa-eye");
  }
});

function isValidEmail(emailValue) {
  const regex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  return regex.test(emailValue.toLowerCase());
}

function setError(element, message) {
  const inputControl = element.parentElement.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerHTML = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
}

function setSuccess(element) {
  const inputControl = element.parentElement.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerHTML = "";
  inputControl.classList.remove("error");
  inputControl.classList.add("success");
}

function validateInputs() {
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  const confirmPassValue = confirmPassInput.value.trim();

  if (emailValue === "") {
    setError(emailInput, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(emailInput,"Please provide a valid email");
  } else {
    setSuccess(emailInput);
  }

  if (passwordValue === "") {
    setError(passwordInput, "Password is required");
  }
  else if(passwordValue.length<8){
    setError(passwordInput,"Password must be at least 8 characters");

  } 
  else {
    setSuccess(passwordInput);
  }
  if (confirmPassValue === "") {
    setError(confirmPassInput, "Confirm Password is required");
  } 
  else if(confirmPassValue !==passwordValue){
    setError(confirmPassInput,"Password doesn't match")
  }
  else {
    setSuccess(confirmPassInput);
    alert("thank for registering ")

  }


  // Add validation for confirm password if needed

  // If you have other fields to validate, you can add them here

  // Check if all validations pass before submitting the form
  if (emailValue !== "" && isValidEmail(emailValue) && passwordValue !== "") {
    // You can submit the form or perform other actions here
  }

}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});
