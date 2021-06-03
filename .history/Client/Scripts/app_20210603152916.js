"use strict";
(function () {
    function Start() {
        console.log("App Started");
    }
    window.addEventListener("load", Start);
    function clickButton() {
        const sendButton = document.getElementById("myButton");
        sendButton.addEventListener("click", () => {
            console.log("button was clicked");
        });
    }
})();
//# sourceMappingURL=app.js.map