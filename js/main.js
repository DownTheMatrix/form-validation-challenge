function init() {
  "use strict";

  /* DOM elements */
  const passwordField = document.querySelector("#password");
  const charsLength = document.querySelector("#chars-length");
  const lowercase = document.querySelector("#lowercase");
  const uppercase = document.querySelector("#uppercase");
  const number = document.querySelector("#number");
  const specialChar = document.querySelector("#special-char");
  const formSubmitBtn = document.querySelector(".form__submit");

  /** Add a new class to the feedback list item to display a different marker.
   * @param {object} [element] - The feedback list item whose marker will change.
   * @param {string} [className] - The feedback list item class.
   * @return {object} The feedback list item with an updated class.
   */
  function addClass(element, className) {
    return element.classList.add(className);
  }

  /** Remove the feedback list item class to display a different marker.
   * @param {object} [element] - The feedback list item whose marker will change.
   * @param {string} [className] - The feedback list item class.
   * @return {object} The feedback list item with an updated class.
   */
  function removeClass(element, className) {
    return element.classList.remove(className);
  }

  /** Check if the conditions are met after the user stopped typing, and enable/disable the form submit button.
   * @return {boolean} Returns true if the password field meets the criteria.
   */
  function enableSubmitBtn() {
    const passwordRequirements = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let timeout = null;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      if (passwordField.value.match(passwordRequirements)) {
        formSubmitBtn.disabled = false;
      } else {
        formSubmitBtn.disabled = true;
      }
    }, 300);
  }

  /* Password validation */
  passwordField.addEventListener("keyup", function () {

    /* Must contain more than 8 characters */
    if (passwordField.value.length >= 8) {
      removeClass(charsLength, "invalid");
      addClass(charsLength, "valid");
    } else {
      removeClass(charsLength, "valid");
      addClass(charsLength, "invalid");
    }

    /* Must contain a lowercase letter */
    if (passwordField.value.match(/[a-z]/g)) {
      removeClass(lowercase, "invalid");
      addClass(lowercase, "valid");
    } else {
      removeClass(lowercase, "valid");
      addClass(lowercase, "invalid");
    }

    /* Must contain an uppercase letter */
    if (passwordField.value.match(/[A-Z]/g)) {
      removeClass(uppercase, "invalid");
      addClass(uppercase, "valid");
    } else {
      removeClass(uppercase, "valid");
      addClass(uppercase, "invalid");
    }

    /* Must contain a number */
    if (passwordField.value.match(/[0-9]/g)) {
      removeClass(number, "invalid");
      addClass(number, "valid");
    } else {
      removeClass(number, "valid");
      addClass(number, "invalid");
    }

    /* Must contain a special character */
    if (passwordField.value.match(/(?=.*[!#$@^%&? "])[!#$@^%&?]/)) {
      removeClass(specialChar, "invalid");
      addClass(specialChar, "valid");
    } else {
      removeClass(specialChar, "valid");
      addClass(specialChar, "invalid");
    }

    enableSubmitBtn();
  });
}

document.addEventListener("DOMContentLoaded", init);