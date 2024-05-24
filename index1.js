const name_box = document.getElementById('name');
const email_box = document.getElementById('email');
const password_box = document.getElementById('password');
const confirm_password_box = document.getElementById('confirm_password');
const submit_button = document.getElementById('submit');
const output = document.querySelector('.output');
const message = document.querySelector('.message');

const form = document.querySelector('form');

// submit_button.addEventListener("click", validateForm)

form.addEventListener("submit", validateForm )


function validateForm(eventDeatils){
    // console.log("Form Submitted")
    eventDeatils.preventDefault();
    let name = name_box.value;
    let email = email_box.value;
    let password = password_box.value;
    let confirm_password = confirm_password_box.value;


    if(name.length <5){
        message.innerHTML = "Name should be atleast 5 characters"
        message.className = "error"
        // name_box.style.border = "2px solid red"
        // name_box.style.outline = "none"
        return
    }

    if(name=="" || email=="" || password=="" || confirm_password==""){
        //  alert("Please fill all the fields")
        message.innerHTML = "Please fill all the fields"
        message.className = "error"
     
         return
    }
    
    if(password != confirm_password){
        message.innerHTML = "Password and Confirm Password should be same"
        message.className = "error"
        
        return
    }
    // email and password stength
    message.innerHTML = "Form Submitted Successfully"
    message.className = "success"
   
    
    
    output.innerHTML = `
    <h2>Registration Details</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Password: ${password}</p>
    `
}


// name_box.addEventListener("change", detectError)

name_box.addEventListener("input", detectError)

function detectError(){
    let value = name_box.value;
    console.log(value)
    if(value.length < 5){
        name_box.style.border = "2px solid red"
        name_box.style.outline = "none"
    }
    else{
        name_box.style.border = "2px solid green"
        name_box.style.outline = "none"
    }
}