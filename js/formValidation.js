function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function formInvalid(){
    iconError.style.visibility = "visible";
    email.style.border = "1.5px solid hsl(0, 93%, 68%)"; 
}


const btnSubmit = document.querySelector(".submit"),
      iconError = document.querySelector(".iconError"),
      msgError  = document.querySelector(".msgError"),
      email = document.querySelector(".form-email input[name='email']"),
      message = {
          empty: "Please fill this field",
          invalidEmail: "Please provide a valid email"
      };

btnSubmit.onclick = function(){
    let emailValue = email.value;

    if(emailValue.length == 0){
        msgError.innerHTML = message.empty;
        formInvalid();
    }else if(!validateEmail(emailValue)){
        msgError.innerHTML = message.invalidEmail;
        formInvalid();
    }else{
        iconError.style.visibility = "hidden";
        msgError.innerHTML= ""
        email.style.border = "1.5px solid hsl(0, 36%, 70%)"
    }
    return false
}
