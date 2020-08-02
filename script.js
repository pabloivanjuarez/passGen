// variables used for all functions 
var plength, randoPassword, passwordString;

window.addEventListener('load', function () {
    plength = prompt("How many characters would you like your password to be?");

    while (plength < 8 || plength > 128) {
        plength = prompt("Length must be 8-128 characters. How many characters would you like your password to be?");
    }

    var cuppercase = confirm("Would you like to use uppercase letters?");
    var clowercase = confirm("Would you like to use lowercase letters?");
    var cnumbers = confirm("would you like to use numbers?");
    var csymbols = confirm("would you like to use special characters?");

    while (!(cuppercase || clowercase || cnumbers || csymbols)) {
        alert("You must select at least one character type!");

        cuppercase = confirm("Would you like to use uppercase letters?");
        clowercase = confirm("Would you like to use lowercase letters?");
        cnumbers = confirm("would you like to use numbers?");
        csymbols = confirm("would you like to use special characters?");
    }

    var lowercaseChar = "abcdefghijklmnopqrstuvwxyz"
    var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var numbers = "0123456789"
    var symbols = "~!@#$%^&*()_+-="
    randoPassword = "";
    passwordString = "";

    if (cuppercase === true) {
        passwordString = passwordString.concat(uppercaseChar)
    }
    if (clowercase === true) {
        passwordString = passwordString.concat(lowercaseChar)
    }
    if (cnumbers === true) {
        passwordString = passwordString.concat(numbers)
    }
    if (csymbols === true) {
        passwordString = passwordString.concat(symbols)
    }
})

// password Gen
function genPassword() {
    for (let i = 0; i < plength; i++) {
        var randomIdx = Math.floor(Math.random() * passwordString.length);
        console.log(randomIdx + " ==== " + passwordString[randomIdx]);
        randoPassword = randoPassword.concat(passwordString[Math.floor(Math.random() * passwordString.length)])
        console.log(randoPassword)
    }
    return randoPassword;
}

// DOM elements
const resultEl = document.getElementById('password');

document.getElementById('generate').addEventListener('click', () => {
    resultEl.value = genPassword();

})

document.getElementById('clipboard').addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.value;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard');
});