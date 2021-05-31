//IIFE -- Immediately Invoked Function Expression
"use strict";

(function(){

    function Start():void
    {
        console.log("App Started");
    }

    window.addEventListener("load", Start);

})();
