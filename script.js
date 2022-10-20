let fullName = document.getElementById("fullname");
let mail = document.getElementById("mail");
let password = document.getElementById("password");
let confrimPassword = document.getElementById("confirm-password");

let btn = document.getElementById("register");

let result = document.getElementById("result")

btn.onclick = () => {
    if(fullName.value == "") {
        result.innerText = "İsim boş bırakılamaz!"
    }else if(mail.value == "") {
        result.innerText = "Mail boş bırakılamaz!"
    }else if(password.value == "") {
        result.innerText = "Şifre boş bırakılamaz!"
    } else if(confrimPassword.value == "") {
        result.innerText = "Şifre tekrarı boş bırakılamaz"
    }else if(password.value.length <= 8) {
        result.innerText = "Şifre en az 8 kararkter olmalı!"
    }else if(confrimPassword.value.length <= 8) {
        result.innerText = "Şifre tekrarı en az 8 kararkter olmalı!"
    }else if(!(password.value == confrimPassword.value) ) {      
        result.innerText = "Şifreler uyuşmuyor!" 
    }else {
        result.innerText = ""
    }
}
    


