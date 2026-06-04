const usernameElement = document.getElementById("userName");
const emailElement = document.getElementById("userEmail");
const passwordElement = document.getElementById("userPassword");
const checkBox = document.getElementById("userCheck-box");
const formElement = document.getElementById("form");
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const checkboxError = document.getElementById("checkboxError");

formElement.addEventListener("submit", function(event){
    event.preventDefault();

    const userNameInput= usernameElement.value.trim();
    const userEmailInput = emailElement.value.trim();
    const userPasswordInput = passwordElement.value.trim();
    const checkBoxInput= checkBox.checked; 

    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    checkboxError.textContent = "";

     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(userNameInput === ""){
        usernameError.textContent = "Username is required";
        return;
    } 

    if(userEmailInput === ""){
        emailError.textContent = "Email is required";
        return;
    }

   

    if (!emailPattern.test(userEmailInput)) {
    emailError.textContent = "Enter a valid email address";
    return;
}

    if(userPasswordInput === ""){
        passwordError.textContent = "Password is required";
        return;
    }

    if (userPasswordInput.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters";
    return;
}

if(!checkBoxInput){
    checkboxError.textContent = "Checkbox not ticked";
    return;
}

});