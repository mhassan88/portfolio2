"use strict";
(function () {
    function clickButton() {
        const sendButton = document.getElementById("myButton");
        sendButton.addEventListener("click", () => {
            let firstName = document.getElementById("fname").value;
            let lastName = document.getElementById("lname").value;
            let email = document.getElementById("email")
                .value;
            let phone = document.getElementById("phone")
                .value;
            let message = document.getElementById("Textarea").value;
            $.post("http://127.0.0.1:3000/contact", {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                message: message,
            }, function (data) { });
            window.location.replace("/");
        });
    }
    clickButton();
})();
//# sourceMappingURL=contact.js.map