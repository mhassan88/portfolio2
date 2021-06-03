"use strict";
(function () {
  function clickButton() {
    const sendButton = document.getElementById("myButton");
    sendButton.addEventListener("click", () => {
      let firstName: string = (
        document.getElementById("fname") as HTMLInputElement
      ).value;
      let lastName: string = (
        document.getElementById("lname") as HTMLInputElement
      ).value;
      let email: string = (document.getElementById("email") as HTMLInputElement)
        .value;
      let phone: string = (
        document.getElementById("contact") as HTMLInputElement
      ).value;
    });
  }
  clickButton();
})();
