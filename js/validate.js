document.addEventListener("DOMContentLoaded", function () {
  const firstInput = document.getElementById("First_name");
  const lastInput = document.getElementById("Last_name");
  const addressInput = document.getElementById("Address");
  const cityInput = document.getElementById("City");
  const stateInput = document.getElementById("State");
  const zipInput = document.getElementById("Zip");
  const phoneInput = document.getElementById("Phone");
  const emailInput = document.getElementById("Email");
  const radioButtons = document.getElementsByName("find");
  const submitButton = document.getElementById("submitButton");
  const visitorIncompleteDiv = document.getElementById("visitor-incomplete");

  function validateForm() {
    const nameRegex = /^[A-Za-z\s'-]+$/; // Allows letters, spaces, hyphens, and apostrophes
    const addressRegex = /^[\w\s.,'-]{5,100}$/; // Allows alphanumerics, spaces, periods, commas, hyphens, apostrophes, 5-100 chars
    const cityRegex = /^[A-Za-z\s'-]{2,50}$/; // Similar to name regex, 2-50 chars
    const stateRegex = /^[A-Za-z\s]{2,20}$/; // Letters and spaces, 2-20 chars
    const zipRegex = /^\d{5}(-\d{4})?$/; // US zip codes (5 digits, optional 4-digit extension)
    const phoneRegex = /^[+]?[0-9\s-]{7,15}$/; // Phone numbers with optional '+' prefix
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format

    const isFirstNameValid = nameRegex.test(firstInput.value.trim());
    const isLastNameValid = nameRegex.test(lastInput.value.trim());
    const isAddressValid = addressRegex.test(addressInput.value.trim());
    const isCityValid = cityRegex.test(cityInput.value.trim());
    const isStateValid = stateRegex.test(stateInput.value.trim());
    const isZipValid = zipRegex.test(zipInput.value.trim());
    const isPhoneValid = phoneRegex.test(phoneInput.value.trim());
    const isEmailValid = emailRegex.test(emailInput.value.trim());
    const isRadioSelected = Array.from(radioButtons).some(
      (radio) => radio.checked
    );

    submitButton.disabled = !(
      isFirstNameValid &&
      isLastNameValid &&
      isAddressValid &&
      isCityValid &&
      isStateValid &&
      isZipValid &&
      isPhoneValid &&
      isEmailValid &&
      isRadioSelected
    );
  }

  [
    firstInput,
    lastInput,
    addressInput,
    cityInput,
    stateInput,
    zipInput,
    phoneInput,
    emailInput,
  ].forEach((input) => input.addEventListener("input", validateForm));
  radioButtons.forEach((radio) =>
    radio.addEventListener("change", validateForm)
  );

  function hideForm() {
    const visitorIncompleteDiv = document.getElementById("visitor-form");
    visitorIncompleteDiv.style.transform = "translateX(100vw)";
  }
  submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    hideForm();
  });
});
