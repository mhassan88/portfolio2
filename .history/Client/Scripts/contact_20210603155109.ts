"use strict";
(function () {
  window.addEventListener("load", Start);
  function clickButton() {
    const sendButton = document.getElementById("myButton");
    sendButton.addEventListener("click", () => {
      console.log("button was clicked");
    });
  }
  clickButton();
})();
