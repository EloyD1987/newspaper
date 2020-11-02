window.onload = function(){}

//Input Full Name    
var vName = document.getElementById("name");
//Blur event = show error
vName.addEventListener("blur", fName);
//Focus Event = hidden error
vName.addEventListener("focus", hidden);
//Function validation of the value  
function fName(){
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
//Blur event = show error
vEmail.addEventListener("blur", fEmail);
//Focus Event = hidden error
vEmail.addEventListener("focus", hiddenEmail);
//Function validation of the value  
function fEmail(){
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
//Input Password    
var vPassword = document.getElementById("pass");
//Blur event = show error
vPassword.addEventListener("blur",fPassword);
//Focus Event = hidden error
vPassword.addEventListener("focus", hiddenPassword);
//Function validation of the value  

function fPassword(){
    var pInput = vPassword.value;
    var val = /[^A-Za-z0-9]/;
    if ( pInput.length<8 || val.test(pInput) ) { 
       var errormessage = document.getElementById("pass").nextElementSibling;
       errormessage.style.visibility =  "visible" ;
    }
    console.log("Password: " + pInput);
    return pInput;
}
function hiddenPassword(){
    var errormessage = document.getElementById("pass").nextElementSibling;
    errormessage.style.visibility =  "hidden" ;
}


//Repeat Password    
var vcPassword = document.getElementById("cpass");
//Blur event = show error
vcPassword.addEventListener("blur",fcPassword);
//Focus Event = hidden error
vcPassword.addEventListener("focus", hiddencPassword);
//Function validation of the value  

function fcPassword(){
    var cpInput = vcPassword.value;
    var val = /[^A-Za-z0-9]/;
    if ( cpInput.length<8 || val.test(cpInput) ) { 
       var errormessage = document.getElementById("cpass").nextElementSibling;
       errormessage.style.visibility =  "visible" ;
    }
    console.log("Confirm Password: " + cpInput);
    return cpInput;
}
function hiddencPassword(){
    var errormessage = document.getElementById("cpass").nextElementSibling;
    errormessage.style.visibility =  "hidden" ;
}
//Age    
var vAge = document.getElementById("age");
//Blur event = show error
vAge.addEventListener("blur",fAge);
//Focus Event = hidden error
vAge.addEventListener("focus", hiddenAge);
//Function validation of the value  

function fAge(){
    var aInput = vAge.value;
    if (!(aInput>=18) || !(aInput%1==0))  { 
       var errormessage = document.getElementById("age").nextElementSibling;
       errormessage.style.visibility =  "visible" ;
    }
    console.log("Age: " + aInput);
    return aInput;
}
function hiddenAge(){
    var errormessage = document.getElementById("age").nextElementSibling;
    errormessage.style.visibility =  "hidden" ;
}