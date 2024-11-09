let email = document.getElementById("email");
let login = document.getElementById("login");
let emailerror = document.getElementById("emailerror");
let passworderror = document.getElementById("passworderror");
let warningmsg = document.getElementById("warningmsg");
let password = document.getElementById("password");
let confirmpassword = document.getElementById("confirmpassword");
let createaccount = document.getElementById("createaccount");
let error = document.getElementById("error");
let username = document.getElementById("username");
let getusername = document.getElementById("getusername");
let name=document.getElementById("name");
let countdown = 5;
let waitcount = 5;

function all() {
    email.addEventListener("blur", function(event) {
        if (event.target.value === "") {
            emailerror.textContent = "Required*";
        } else {
            emailerror.textContent = "";
        }
    })
    password.addEventListener("blur", function(event) {
        if (event.target.value === "") {
            passworderror.textContent = "Required*";
        } else {
            passworderror.textContent = "";
        }
    })
    confirmpassword.addEventListener("blur", function(event) {
        if (event.target.value === "") {
            warningmsg.textContent = "Required*";
        } else {
            warningmsg.textContent = "";
        }
    })
    username.addEventListener("blur",function(event){
        if(event.target.value===""){
            name.textContent="Please Enter your Name "
        }else{
            name.textContent=""
        }
    })
    
}
all();
createaccount.addEventListener("click", function(event) {
    if (email.value === "" & password.value === "" & confirmpassword.value === "") {
        error.textContent = "Fill above details";
    } else if (password.value !== confirmpassword.value) {
        warningmsg.textContent = "password and confirmpassword should be same";
    } else {
        error.textContent = "";
        let getusernamevalue = username.value;
        setInterval(function() {}, 1000)
        getusername.textContent = "Hello, " + getusernamevalue + " connecting to..ourdatabase...please wait..." + countdown;
        let intervalid = setInterval(function() {
            countdown = countdown - 1;
            if (countdown === 0) {
                getusername.textContent = "Sorry, " + getusernamevalue + " we didn't found your email..contact customer care.";
            }
        }, 1000);
    }
})
login.addEventListener("submit", function(event) {
    event.preventDefault();
})