window.onload = function(){}

//Input Full Name    
var vName = document.getElementById("name");
//Blur event
vName.addEventListener("blur", fName);
//Focus Event
vName.addEventListener("focus", hidden);
//Function validation of the value  
function fName(e){
    e.preventDefault();
    var nInput = vName.value;
    if ((nInput.indexOf(" ") == -1) || (nInput.length < 7)) { 
       var errormessage = document.getElementById("name").nextElementSibling;
       errormessage.style.visibility =  "visible" ;
    }
    console.log("Full Name: " + nInput);
    return nInput;
}
function hidden(){
    var errormessage = document.getElementById("name").nextElementSibling;
    errormessage.style.visibility =  "hidden" ;
}

//Input Email    
var vEmail = document.getElementById("email");
vEmail.addEventListener("blur", fEmail);
vEmail.addEventListener("focus", hiddenEmail);
//Function validation of the value  
function fEmail(e){
    e.preventDefault();
    var eInput = vEmail.value;
    var val =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!val.test(eInput)){
       var errormessage = document.getElementById("email").nextElementSibling;
       errormessage.style.visibility =  "visible" ;
    }
    console.log("Email: " + eInput);
    return eInput;
}

function hiddenEmail(){
    var errormessage = document.getElementById("email").nextElementSibling;
    errormessage.style.visibility =  "hidden" ;
}

