function validName() {
  var name = document.getElementById("name");
  var parent = name.parentElement;
  var error = parent.querySelector(".error");
  if (name.value.trim().length == 0) {
    name.classList.add("i_error");
    error.classList.remove("green");
    error.classList.add("red");
    error.innerHTML = "Name is required";
    return false;
  } else if (!name.value.trim().match(/^[A-Za-z0-9\s._'-]{2,50}$/)) {
    name.classList.add("i_error");
    error.classList.remove("green");
    error.classList.add("red");
    error.innerHTML = "Username invalid";
    return false;
  } else {
    name.classList.remove("i_error");
    error.classList.remove("red");
    error.classList.add("green");
    error.innerHTML = "Valid";
    return true;
  }
}
function validEmail() {
  var email = document.getElementById("email");
  var parent = email.parentElement;
  var error = parent.querySelector(".error");
  if (email.value.trim().length == 0) {
    email.classList.add("i_error");
    error.classList.remove("green");
    error.classList.add("red");
    error.innerHTML = "Email is required";
    return false;
  } else if (
    !email.value
      .trim()
      .match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
  ) {
    email.classList.add("i_error");
    error.classList.remove("green");
    error.classList.add("red");
    error.innerHTML = "Email invalid";
    return false;
  } else {
    email.classList.remove("i_error");
    error.classList.remove("red");
    error.classList.add("green");
    error.innerHTML = "Valid";
    return true;
  }
}
function validPassword() {
  var password__box = document.querySelector(".password");
  var password__input = document.querySelector(".password input#password");
  var parent = document.querySelector(".password").parentElement;
  var error = parent.querySelector(".error");
  if (password__input.value.trim().length==0) {
    password__box.classList.add("i_error");
    error.classList.remove("green");
    error.classList.add("red");
    error.innerHTML = "Password is required";
    return false;
  } else if (!(password__input.value.trim().length >= 6)){
    password__box.classList.add("i_error");
    error.classList.remove("green");
    error.classList.add("red");
    error.innerHTML = "Minimum 6 characters are required";
    return false
  }
  else{
    password__box.classList.remove("i_error");
    error.classList.remove("red");
    error.classList.add("green");
    error.innerHTML = "Valid";
    return true;
  }
}
function validConfirmPassword() {
  var password__input = document.querySelector(".password input#password");
  var cpassword__box = document.querySelector(".cpassword");
  var cpassword__input = document.querySelector(".cpassword input#cpassword");
  var parent = document.querySelector(".cpassword").parentElement;
  var error = parent.querySelector(".error");
  if (cpassword__input.value.trim().length==0) {
    cpassword__box.classList.add("i_error");
    error.classList.remove("green");
    error.classList.add("red");
    error.innerHTML = "Confirm Password is required";
    return false;
  } else if (cpassword__input.value.trim()!==password__input.value.trim()){
    cpassword__box.classList.add("i_error");
    error.classList.remove("green");
    error.classList.add("red");
    error.innerHTML = "Password did not match";
    return false
  }
  else{
    cpassword__box.classList.remove("i_error");
    error.classList.remove("red");
    error.classList.add("green");
    error.innerHTML = "Password matched";
    return true;
  }
}
//hide and show for password
var p_eye_close=document.querySelector("div.password i.eye-close");
var p_eye_open=document.querySelector("div.password i.eye-open");

p_eye_close.addEventListener("click",()=>{
p_eye_close.style.display="none";
p_eye_open.style.display="block";
var input=p_eye_close.parentElement.querySelector("input");
input.type="text"
})

p_eye_open.addEventListener("click",()=>{
p_eye_open.style.display="none";
p_eye_close.style.display="block";
var input=p_eye_open.parentElement.querySelector("input");
input.type="password"
})
//hide and show for Confirm password
var cp_eye_close=document.querySelector("div.cpassword i.eye-close");
var cp_eye_open=document.querySelector("div.cpassword i.eye-open");

cp_eye_close.addEventListener("click",()=>{
cp_eye_close.style.display="none";
cp_eye_open.style.display="block";
var input=cp_eye_close.parentElement.querySelector("input");
input.type="text"
})

cp_eye_open.addEventListener("click",()=>{
cp_eye_open.style.display="none";
cp_eye_close.style.display="block";
var input=cp_eye_open.parentElement.querySelector("input");
input.type="password"
})
//preventing forms default behaviour until every input is valid
var submit_error=document.getElementById("submit_error")
function validateForm(){
    if(!validName()||!validEmail()||!validPassword()||!validConfirmPassword()){
       submit_error.innerHTML="*Please fix the error to submit";
       submit_error.classList.add("red");
       setTimeout(function(){
          submit_error.innerHTML="";
          submit_error.classList.remove("red");
       },2000);//ms
       return false;
    }
    else{
        alert("Form is submitted successfully")
        return true;
    }
}