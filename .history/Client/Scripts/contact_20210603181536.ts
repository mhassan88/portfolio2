"use strict";

(function () {
  function clickButton() {
    let firstName: string = (
      document.getElementById("fname") as HTMLInputElement
    ).value;
    let lastName: string = (
      document.getElementById("lname") as HTMLInputElement
    ).value;
    let email: string = (document.getElementById("email") as HTMLInputElement)
      .value;
    let phone: string = (document.getElementById("phone") as HTMLInputElement)
      .value;
    let message: string = (
      document.getElementById("Textarea") as HTMLTextAreaElement
    ).value;
    window.location.replace("/");
  }
})();
