var confirm = document.querySelector("#confirmation");
var button = document.querySelector("button");
 
var change_border = function() {
    var password = document.querySelector("#password");
    var pass_value = password.value;
    if(pass_value !== null && pass_value !== confirmation.value) {
        password.style.border = "3px solid red";
        confirm.style.border = "3px solid red";
    }
}

button.addEventListener("click", change_border);