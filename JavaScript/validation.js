function validateForm() {
    if  (document.getElementById("Name").value==""){
     alert("Please enter your Name");
     return false;
    }
    if(document.getElementById("Password").value==""){
     alert("Please enter your password");
    }
 }