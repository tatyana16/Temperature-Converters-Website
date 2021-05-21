"use strict";

window.onload = function() {
    //connect celsius button (on fahrenheit_celsius.html) to click event handler) to click event handler 
    const calccBtn = document.getElementById("calccBtn");
    calccBtn.onclick = calccBtnClicked;
}

function calccBtnClicked() {
    // get celsius temperature from <input> field 
    const fahrenheitInputField = document.getElementById("fahrenheitInput");
    let fah = Number(fahrenheitInputField.value);
    
    let celsius = (fah - 32) * 5/9;

    let celsiusResult = document.getElementById("celsiusResult");
    celsiusResult.value = celsius;
}