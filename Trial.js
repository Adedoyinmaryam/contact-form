const nameField = document.getElementById("name");
const lnameField = document.getElementById("lname");
const emailField = document.getElementById("email");
const queryTypeField = document.getElementById("query-type");
const textField = document.getElementById("text");
const consentField = document.getElementById("consent");

nameField.addEventListener("blur", validateName);
lnameField.addEventListener("blur", validateLname);
emailField.addEventListener("blur", validateEmail);
queryTypeField.addEventListener("change", validateQueryType);
textField.addEventListener("blur", validateText);

function showalert() {
  var consentField = document.getElementById("consent");
  var consentAlert = document.getElementById("consent-alert");

  if (!consentField.checked) {
    consentAlert.style.display = "block";
    alert("Please consent to being contacted by the team");
    return false;
  } else {
    alert("Message Sent!, Thanks for completing the form. We will be in touch soon!");
  }
}

function validateName() {
  const nameError = document.getElementById("name-error");
  if (nameField.value === "") {
    nameError.textContent = "This field is required";
  } else {
    nameError.textContent = "";
  }
}

function validateLname() {
  const lnameError = document.getElementById("lname-error");
  if (lnameField.value === "") {
    lnameError.textContent = "This field is required";
  } else {
    lnameError.textContent = "";
  }
}

function validateEmail() {
  const emailError = document.getElementById("email-error");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailField.value === "") {
    emailError.textContent = "This field is required";
  } else if (!emailRegex.test(emailField.value)) {
    emailError.textContent = "Invalid email address";
  } else {
    emailError.textContent = "";
  }
}

function validateQueryType() {
  const queryTypeError = document.getElementById("query-type-error");
  if (queryTypeField.value === "Select") {
    queryTypeError.textContent = "Please select a query type";
  } else {
    queryTypeError.textContent = "";
  }
}

function validateText() {
  const textError = document.getElementById("text-error");
  if (textField.value === "") {
    textError.textContent = "This field is required";
  } else if (textField.value.length < 10) {
    textError.textContent = "Message must be at least 10 characters long";
  } else {
    textError.textContent = "";
  }
}