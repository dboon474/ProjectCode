
const peanutButterType = document.getElementById("peanut-butter-type");
const jellyType = document.getElementById("jelly-type");
const breadType = document.getElementById("bread-type");
const toasted = document.getElementById("toasted");

document.querySelector("form").addEventListener("submit", event => {

  event.preventDefault();

  if (peanutButterType.value === "") {
    alert("Please select a peanut butter type");
  } else if (jellyType.value === "") {
    alert("Please enter a jelly type");
  } else if (breadType.value === "") {
    alert("Please enter a bread type");
  } else if (!toasted.checked) {
    alert("Please specify whether you prefer your PB&J toasted");
  } else {
    alert("Form submitted successfully!");
  }
});