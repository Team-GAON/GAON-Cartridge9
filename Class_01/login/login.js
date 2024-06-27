document.getElementById("login").addEventListener("click", ()=>{
    let emailv = document.getElementById("email");
    let passwordv = document.getElementById("password");
    console.log(emailv.value, passwordv.value);
    emailv.value = null;
    passwordv.value = null;
})