//IIFE -- Immediately Invoked Function Expression
"use strict";

(function () {
  function Start(): void {
    console.log("App Started");
  }

  window.addEventListener("load", Start);
  //Event listner for send message button
  function clickButton() {
    const sendButton = document.getElementById("myButton");
    sendButton.addEventListener("click", () => {
      console.log("button was clicked");
    });
  }
  clickButton();
})();
