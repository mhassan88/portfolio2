/*    contact.ts
      Name: Muhammad Hassan 
      ID: 301178235
      Date: 03 June 2021
*/
"use strict";

(function () {
  //Click button event handler function
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
      let phone: string = (document.getElementById("phone") as HTMLInputElement)
        .value;
      let message: string = (
        document.getElementById("Textarea") as HTMLTextAreaElement
      ).value;
      //post request to send the form data to server
      $.post(
        "http://127.0.0.1:3000/contact",
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          phone: phone,
          message: message,
        },
        function (data) {}
      );
      //redirecting to homepage
      window.location.replace("/");
    });
  }
  clickButton();
})();
