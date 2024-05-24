const name_box = document.getElementById('name');
const email_box = document.getElementById('email');
const password_box = document.getElementById('password');
const confirm_password_box = document.getElementById('confirm_password');
const submit_button = document.getElementById('submit');
const output = document.querySelector('.output');
const message = document.querySelector('.message');

// const form = document.querySelector('form');

submit_button.addEventListener("click", validateForm)


function validateForm(eventDeatils){
    // console.log("Form Submitted")
    eventDeatils.preventDefault();
    let name = name_box.value;
    let email = email_box.value;
    let password = password_box.value;
    let confirm_password = confirm_password_box.value;

    if(name=="" || email=="" || password=="" || confirm_password==""){
        //  alert("Please fill all the fields")
        message.innerHTML = "Please fill all the fields"
        message.className = "error"
        // message.style.color = "red"
        // message.style.fontSize = "1.5rem"
        // message.style.fontWeight = "bold"
        // message.style.textAlign = "center"
        // message.style.margin = "10px 0"
        // message.style.padding = "10px"
        // message.style.border = "1px solid red"
        // message.style.borderRadius = "5px"
        // message.style.backgroundColor = "rgba(255, 0, 0, 0.1)"
         return
    }
    if(password != confirm_password){
        message.innerHTML = "Password and Confirm Password should be same"
        message.className = "error"
        // message.style.color = "red"
        // message.style.fontSize = "1.5rem"
        // message.style.fontWeight = "bold"
        // message.style.textAlign = "center"
        // message.style.margin = "10px 0"
        // message.style.padding = "10px"
        // message.style.border = "1px solid red"
        // message.style.borderRadius = "5px"
        // message.style.backgroundColor = "rgba(255, 0, 0, 0.1)"
        return
    }
    // email and password stength
    message.innerHTML = "Form Submitted Successfully"
    message.className = "success"
   
    // message.style.color = "green"
    // message.style.fontSize = "1.5rem"
    // message.style.fontWeight = "bold"
    // message.style.textAlign = "center"
    // message.style.margin = "10px 0"
    // message.style.padding = "10px"
    // message.style.border = "1px solid red"
    // message.style.borderRadius = "5px"
    // message.style.backgroundColor = "rgba(255, 0, 0, 0.1)"
    
    output.innerHTML = `
    <h2>Registration Details</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Password: ${password}</p>
    `
}