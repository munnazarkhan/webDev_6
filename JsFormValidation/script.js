function submit(){

const fn = document.getElementById("FullName").value;
const em = document.getElementById("Email").value;
const pn = document.getElementById("Phone").value;


    document.querySelectorAll(".error").forEach((element) => {
        element.innerText = " ";
    })



    if(!/^[A-Za-z\s]+$/.test(fn)){
        document.getElementById("nameError").innerText = "Invalid Full Name"
    }

    if(!/^[A-Za-z\.\_\d]+@gmail.com$/.test(em)){
        document.getElementById("EmailError").innerText = "Invalid Email"
    }

    if(!/^[6-9]\d{9}$/.test(pn)){
        document.getElementById("phoneError").innerText = "Invalid Phone"
    }

}