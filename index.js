function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  let name  = ""
  function formValue(name) {
    let email = document.getElementById("nameValue").value;
    let pass = document.getElementById("pasValue").value
    // console.log(email,pass);
    console.log(email,pass);
    if( (email == "sakshi10393@gmail.com") && (pass == "Sakshi@123") ) {
        alert("Thank you for signing in");
        name += "Sakshi"
        console.log(name);
    } else {
        alert("Please Enter Valid Credentials")
    }
   
  }
console.log(name);