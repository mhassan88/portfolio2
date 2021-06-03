//IIFE -- Immediately Invoked Function Expression
"use strict";

(function () {
  function Start(): void {
    console.log("App Started");
    // //Event listner for send message button
    // const sendButton = document.getElementById("myButton");
    // sendButton.addEventListener("click", () => {
    //   console.log("button was clicked");
    // });
  }

  window.addEventListener("load", Start);
})();
