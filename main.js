"use strict";

window.onload = function() {
    //connect fahrenheit button (on celcius_fahrenheit.html) to click event handler) to click event handler 
    const calcfBtn = document.getElementById("calcfBtn");
    calcfBtn.onclick = calcfBtnClicked;
}

function calcfBtnClicked() {
    // get celsius temperature from <input> field 
    const calcfField = document.getElementById("calcf");
    let calcf = Number(calcfField.value);
    let fahrenheit = (calcf * 9/5) + 32;

    let fahrenheitResult = document.getElementById("fahrenheitResult");
    fahrenheitResult.value = fahrenheit;
}