
window.onload = function() {
    // document.getElementById("continue-btn").addEventListener("click", validateEmail);
    // function validateEmail() {
        var inputEmail = document.getElementById("register-email");
        if (inputEmail.value == "") {
            alert(inputEmail.value);
            // var fac = document.getElementById = "form-ids";
            // fac.appendChild(errorBox);
            var errorBox = document.createElement('DIV');
            errorBox.id = "error-box";
            var errorIcon = document.createElement('SPAN');
            errorIcon.className = "error";
            errorBox.appendChild(errorIcon);
            var errorText = document.createElement('P');
            var txt = document.createTextNode("Hello World");
            errorText.appendChild(txt);
            errorText.className = "error-text";
            errorBox.appendChild(errorText);
            document.body.appendChild(errorBox);
        }
    }
// }
