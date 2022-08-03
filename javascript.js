let pass = document.getElementById("password");
let confirm_pass = document.getElementById("confirm-password");
let msg = document.createElement('div');
let container = document.querySelector(".error-container");
msg.classList.add('error-msg');
msg.textContent = "* Password does not match";

confirm_pass.addEventListener("input", (e) => {
    if(pass.value === e.target.value){
        removeError();
    }
    else{
        addError();
    }
});

pass.addEventListener("input", (e) => {
    if(confirm_pass.value.length > 0){
        if(pass.value === confirm_pass.value){
            removeError();
        } else {
            addError();
        }
    }
});

function removeError(){
    pass.classList.remove("error");
    confirm_pass.classList.remove("error");
    if(container.childNodes.length === 1){
        container.removeChild(msg);
    }
}

function addError(){
    pass.classList.add("error");
    confirm_pass.classList.add('error');
    if(container.childNodes.length === 0){
        container.appendChild(msg);
    }    
}