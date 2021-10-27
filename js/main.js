/* DOM elements */
const passwordField = document.querySelector("#password");
const charsLength = document.querySelector("#chars-length");
const lowercase = document.querySelector("#lowercase");
const uppercase = document.querySelector("#uppercase");
const number = document.querySelector("#number");
const specialChar = document.querySelector("#special-char");

/* Password validation */
passwordField.addEventListener("keyup", function () {
    
  /* Must contain more than 8 characters */
  if (passwordField.value.length >= 8) {
    charsLength.classList.remove("invalid");
    charsLength.classList.add("valid");
  } else {
    charsLength.classList.remove("valid");
    charsLength.classList.add("invalid");
  }

  /* Must contain a lowercase letter */
  if (passwordField.value.match(/[a-z]/g)) {
    lowercase.classList.remove("invalid");
    lowercase.classList.add("valid");
  } else {
    lowercase.classList.remove("valid");
    lowercase.classList.add("invalid");
  }

  /* Must contain an uppercase letter */
  if (passwordField.value.match(/[A-Z]/g)) {
    uppercase.classList.remove("invalid");
    uppercase.classList.add("valid");
  } else {
    uppercase.classList.remove("valid");
    uppercase.classList.add("invalid");
  }

  /* Must contain a number */
  if (passwordField.value.match(/[0-9]/g)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  /* Must contain a special character */
  if (passwordField.value.match(/(?=.*[!#$@^%&? "])[!#$@^%&?]/)) {
    specialChar.classList.remove("invalid");
    specialChar.classList.add("valid");
  } else {
    specialChar.classList.remove("valid");
    specialChar.classList.add("invalid");
  }
});
