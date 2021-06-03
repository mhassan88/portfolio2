//IIFE -- Immediately Invoked Function Expression
"use strict";

(function () {
  function Start(): void {
    console.log("App Started");
    const sendButton = document.getElementById("myButton");
  }

  window.addEventListener("load", Start);
})();
