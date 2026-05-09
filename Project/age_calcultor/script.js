document.querySelector("form").addEventListener("submit",(even)=>{
    event.preventDefault();

    const dob = document.getElementById("DOB").value;
    const CurtDate = document.getElementById("CurrentDate").value;

    // let curYear2 = CurtDate.split("-")[0];
    // console.log(curYear);
    // console.log(Number(curYear2));

    const Age = Number(CurtDate.split("-")[0]) - Number(dob.split("-")[0]);

    console.log(Age);
    
  document.getElementById("DOB").value = "";
  document.getElementById("CurrentDate").value ="";

 document.getElementById("MYAge").innerText ="";


})