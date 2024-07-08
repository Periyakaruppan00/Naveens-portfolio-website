const scriptURL =
  "https://script.google.com/macros/s/AKfycbyah-lXV3CxTEA3OPKUqrFLiQ2i-VQP6kELrLtbceDOMTN848ZmvCrrjfq8mMIKYOzN/exec";
const form = document.forms["submit-to-google-sheet"];
const send = document.getElementById("send");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      send.innerHTML = "&#10003; Message send Successfully";
      setTimeout(function () {
        send.innerHTML = "";
      }, 2000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
