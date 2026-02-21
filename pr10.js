function validationForm(){
    const username=document.getElementById("username").value;
    const password=document.getElementById("password").value;
    if (username=="" || password==""){
        alert("please Enter username and password");
        return true;
    }
    alert("form submitted username is:"+username+",password is:"+password);
    return true;
}
