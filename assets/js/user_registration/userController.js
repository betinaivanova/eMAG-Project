

(function () {
    function createErrorMsg(addClass,errorText,index) {
        var div = document.getElementsByClassName('msg-box')[index];
        div.className += ' ' + addClass;
        div.innerHTML = '';
        var span = document.createElement('span');
        span.className = 'error';
        var icon = document.createElement('i');
        icon.className = 'fa fa-exclamation-triangle fa-lg';
        span.appendChild(icon);
        div.appendChild(span);
        var paragraph = document.createElement('p');
        paragraph.className = 'error-text';
        paragraph.innerText = errorText;
        div.appendChild(paragraph);
    }

    function createSuccessMsg(addClass,successText,index) {
        var div = document.getElementsByClassName('msg-box')[index];
        div.className += ' ' + addClass;
        div.innerHTML = '';
        var span = document.createElement('span');
        span.className = 'success';
        var icon = document.createElement('i');
        icon.className = 'fa fa-check fa-lg';
        span.appendChild(icon);
        div.appendChild(span);
        var paragraph = document.createElement('p');
        paragraph.className = 'success-text';
        paragraph.innerText = successText;
        div.appendChild(paragraph);
    }

    document.getElementById('register-email').addEventListener('focus',function() {
        document.getElementById('register-email').value = ' ';
    },false)
    document.getElementById('register-password').addEventListener('focus',function() {
        document.getElementById('register-password').value = ' ';
    },false)

var registerBtn = document.getElementById('register-btn');
registerBtn.addEventListener('click', function (event) {
    event.preventDefault();
    event = event || window.event;
    var registerEmail = document.getElementById('register-email');
    var registerPassword = document.getElementById('register-password');
    var repeatPassword = document.getElementById('register-repeat-password');
    var registerName = document.getElementById('register-name');

    if(userManager.isValidName(registerName.value)) {
        createSuccessMsg('success-box','валидно име',0);
        registerName.style.border = "1px solid #89bb65";
    } else {
        createErrorMsg('error-box','въведете име по-дълго от 4 символа',0);
        registerName.style.border = "1px solid #CC0000";
    }

    if(userManager.isValidEmail(registerEmail.value)) {
        createSuccessMsg('success-box','валиден имейл',1);
        registerEmail.style.border = "1px solid #89bb65";
    } else {
        createErrorMsg('error-box','грешeн имейл!',1);
        registerPassword.style.border = "1px solid #CC0000";
    }

    if(userManager.isValidPassword(registerPassword.value)) {
        createSuccessMsg('success-box','валидна парола',2);
        registerPassword.style.border = "1px solid #89bb65";
    } else {
        createErrorMsg('error-box','въведете парола по-дълга от 4 символа',2);
        registerPassword.style.border = "1px solid #CC0000";
    }

    if(userManager.isRepeatPassword(registerPassword.value,repeatPassword.value)) {
        if(repeatPassword.value != '') {
            createSuccessMsg('success-box','паролите съвпадат',3);
            repeatPassword.style.border = "1px solid #89bb65";
        }
    } else {
        createErrorMsg('error-box','паролите не съвпадат',3);
        repeatPassword.style.border = "1px solid #CC0000";
    }

    if (userManager.isValidEmail(registerEmail.value) &&
            userManager.isValidPassword(registerPassword.value) &&
            userManager.isValidName(registerName.value) && 
            userManager.isRepeatPassword(registerPassword.value,repeatPassword.value)) {
            userManager.addUser(registerName.value, registerEmail.value, registerPassword.value);
            // userManager.addUser(registerName.value, registerEmail.value, registerPassword.value);
            window.location.href = './index.html';
        }

    }, false);

})();


