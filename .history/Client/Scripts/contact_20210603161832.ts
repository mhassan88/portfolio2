"use strict";
(function () {
  function clickButton() {
    const sendButton = document.getElementById("myButton");
    sendButton.addEventListener("click", () => {
      let fname: HTMLInputElement = document.getElementById(
        "fname"
      ) as HTMLInputElement;
      console.log(fname);
      // let lname: string = document.getElementById("lname");
      // let email: string = document.getElementById("email");
      // let contact: string = document.getElementById("contact");
      // let message: string = document.getElementById("textArea");
    });
  }
  clickButton();
})();
