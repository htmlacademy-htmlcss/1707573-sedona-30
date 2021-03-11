const appointmentButton = document.querySelector(".appointment .button");
const formPopup = document.querySelector(".travel-hotels");
const travelForm = formPopup.querySelector(".travel-form");
const dateIn = formPopup.querySelector(".in-label-text");
const dateOut = formPopup.querySelector(".out-label-text");
const olderNumbers = formPopup.querySelector(".older-label-numbers");
const kidsNumbers = formPopup.querySelector(".kids-label-numbers");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("older");
} catch (err) {
  isStorageSupport = false;
}

appointmentButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  formPopup.classList.toggle("modal-show");

  if (storage) {
    olderNumbers.value = storage;
    kidsNumbers.value = storage;
  }

  dateIn.focus();
});

travelForm.addEventListener("submit", function (evt) {
  if (!dateIn.value || !dateOut.value || !olderNumbers.value || !kidsNumbers.value) {
    evt.preventDefault();
    formPopup.classList.remove("modal-error");
    formPopup.offsetWidth = formPopup.offsetWidth;
    formPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("older", olderNumbers.value);
      localStorage.setItem("kids", kidsNumbers.value);
    }  
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (formPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      formPopup.classList.remove("modal-show");
    }
  }
});