document.getElementById("signup").addEventListener("click", ()=>{
    let emailv = document.getElementById("email");
    let passwordv = document.getElementById("password");
    let repasswordv = document.getElementById("repassword");
    if(passwordv.value == repasswordv.value){
        location.href = "../login/login.html"
        emailv.value = null;
        passwordv.value = null;
        repasswordv.value = null;
    }
    else{
        document.getElementById("not").innerText = "비밀번호가 일치하지 않습니다."
    }
})