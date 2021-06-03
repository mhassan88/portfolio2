//IIFE -- Immediately Invoked Function Expression
"use strict";

(function () {
  function Start(): void {
    console.log("App Started");
    const button = document.getElementById(myButton);
  }

  window.addEventListener("load", Start);
})();
