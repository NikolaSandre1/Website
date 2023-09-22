const loginBox = document.querySelector('.login-section');
const regLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');


regLink.addEventListener("click",()=>{
    loginBox.classList.add("active");
})

loginLink.addEventListener("click",()=>{
    loginBox.classList.remove("active");
})


