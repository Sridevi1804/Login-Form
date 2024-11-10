
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const cpassword=document.getElementById('cpassword');
const form=document.getElementById('form');

const name_error=document.getElementById('name_error');
const email_error=document.getElementById('email_error');
const password_error=document.getElementById('password_error');



form.addEventListener('submit',(e)=>
{
    if(username.value===''){
        e.preventDefault();
        name_error.innerHTML="username is required";
    }
    else{
        name_error.innerHTML="";
    }

    var email_check= /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    
    if(email.value===''){
        e.preventDefault();
        email_error.innerHTML="email is required";
    }

    else if(!email.value.match(email_check)){
        e.preventDefault();
        email_error.innerHTML="enter valid email";
    }
    else{
        email_error.innerHTML="";
    }

    if(password.value===''){
        e.preventDefault();
        password_error.innerHTML="password is required";
    }
    else if(password.value.length<8){
        e.preventDefault();
        password_error.innerHTML="Password must be 8 characters long";
    }
    else{
        password_error.innerHTML="";
    }
})


