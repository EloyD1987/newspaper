window.onload = function(){

//Input Full Name    
var vName = document.getElementById("name");
//Blur event = show error
vName.addEventListener("blur", fName);
//Focus Event = hidden error
vName.addEventListener("focus", hidden);
//Function validation of the value  
function fName(){
    var nInput = vName.value;
    var condition = (nInput.indexOf(" ") == -1) || (nInput.length < 7);
    if (condition) { 
       var errormessage = document.getElementById("name").nextElementSibling;
       errormessage.style.visibility =  "visible" ;
    }
    console.log("Full Name: " + nInput);
    return ["Full Name: ",nInput,condition];

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
    var condition = (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(eInput));
    if (condition){
       var errormessage = document.getElementById("email").nextElementSibling;
       errormessage.style.visibility =  "visible" ;
    }
    console.log("Email: " + eInput);
    return ["Email: ",eInput,condition];
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
    var condition =  ( pInput.length<8 || /[^A-Za-z0-9]/.test(pInput) )
    if ( condition) { 
       var errormessage = document.getElementById("pass").nextElementSibling;
       errormessage.style.visibility =  "visible" ;
    }
    console.log("Password: " + pInput);
    return ["Password: ",pInput,condition];
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
    var condition = (cpInput.length<8 || /[^A-Za-z0-9]/.test(cpInput))
    if ( condition ) { 
       var errormessage = document.getElementById("cpass").nextElementSibling;
       errormessage.style.visibility =  "visible" ;
    }
    console.log("Confirm Password: " + cpInput);
    return ["Repeat Password: ",cpInput,condition]
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
    var condition = (!(aInput>=18) || !(aInput%1==0));
    if (condition)  { 
       var errormessage = document.getElementById("age").nextElementSibling;
       errormessage.style.visibility =  "visible" ;
    }
    console.log("Age: " + aInput);
    return ["Age: ",aInput,condition];
}
function hiddenAge(){
    var errormessage = document.getElementById("age").nextElementSibling;
    errormessage.style.visibility =  "hidden" ;
}
//Phone  
var vPhone = document.getElementById("phone");
//Blur event = show error
vPhone.addEventListener("blur",fPhone);
//Focus Event = hidden error
vPhone.addEventListener("focus", hiddenPhone);
//Function validation of the value  
function fPhone(){
    var phInput = vPhone.value;
    var condition = (!/^[0-9]{7,}$/.test(phInput))
    if (condition) { 
       var errormessage = document.getElementById("phone").nextElementSibling;
       errormessage.style.visibility =  "visible" ;
    }
    console.log("Phone: " + phInput);
    return ["Phone: ",phInput,condition];
}
function hiddenPhone(){
    var errormessage = document.getElementById("phone").nextElementSibling;
    errormessage.style.visibility =  "hidden" ;
}
//Address  
var vAddress = document.getElementById("address");
//Blur event = show error
vAddress.addEventListener("blur",fAddress);
//Focus Event = hidden error
vAddress.addEventListener("focus", hiddenAddress);
//Function validation of the value  
function fAddress(){
    var aInput = vAddress.value;
    var condition = (!/^([a-z0-9]{4,}[\s]+)+([0-9]+)$/.test(aInput));
    if (condition) { 
       var errormessage = document.getElementById("address").nextElementSibling;
       errormessage.style.visibility =  "visible" ;
    }
    console.log("Address: " + aInput);
    return ["Address: ",aInput,condition];
}
function hiddenAddress(){
    var errormessage = document.getElementById("address").nextElementSibling;
    errormessage.style.visibility =  "hidden" ;
}

//City 
var vCity = document.getElementById("city");
//Blur event = show error
vCity.addEventListener("blur",fCity);
//Focus Event = hidden error
vCity.addEventListener("focus", hiddenCity);
//Function validation of the value  
function fCity(){
    var cInput = vCity.value;
    var condition = (!/^[a-z]{3,}$/i.test(cInput))
    if (condition) { 
       var errormessage = document.getElementById("city").nextElementSibling;
       errormessage.style.visibility =  "visible" ;
    }
    console.log("City: " + cInput);
    return ["City: ",cInput,condition];
}
function hiddenCity(){
    var errormessage = document.getElementById("city").nextElementSibling;
    errormessage.style.visibility =  "hidden" ;
}
//Zip Code 
var vZip = document.getElementById("zipcode");
//Blur event = show error
vZip.addEventListener("blur",fZip);
//Focus Event = hidden error
vZip.addEventListener("focus", hiddenZip);
//Function validation of the value  
function fZip(){
    var zInput = vZip.value;
    var condition = (!/^[0-9]{3,}$/.test(zInput));
    if (condition) { 
       var errormessage = document.getElementById("zipcode").nextElementSibling;
       errormessage.style.visibility =  "visible" ;
    }
    console.log("Zip code: " + zInput);
    return ["Zip code: ",zInput,condition];
}
function hiddenZip(){
    var errormessage = document.getElementById("zipcode").nextElementSibling;
    errormessage.style.visibility =  "hidden" ;
}
//I.D.N
var vId = document.getElementById("idn");
//Blur event = show error
vId.addEventListener("blur",fId);
//Focus Event = hidden error
vId.addEventListener("focus", hiddenId);
//Function validation of the value  
function fId(){
    var iInput = vId.value;
    var condition = (!/^[0-9]{7,8}?$/.test(iInput));
    if (condition) { 
       var errormessage = document.getElementById("idn").nextElementSibling;
       errormessage.style.visibility =  "visible" ;
    }
    console.log("I.D. number: " + iInput);
    return ["I.D.number: ",iInput,condition];
}
function hiddenId(){
    var errormessage = document.getElementById("idn").nextElementSibling;
    errormessage.style.visibility =  "hidden" ;
}
//Send button
var sendButton =  document.querySelector('input[type="submit"]');
sendButton.addEventListener('click',send);
function send() {
    event.preventDefault();
    var validationFunctions = [fName,fEmail,fPassword,fcPassword,fAge,fPhone, fAddress, fCity, fZip, fId];
    var list = "";
    var listError= "";
    for (var i=0 ; i< validationFunctions.length; i++)
    { var arrayReturn = validationFunctions[i]();
      if ( arrayReturn[2]=== true){
          listError += arrayReturn[0] + " invalid \n";
      }else { 
          list += arrayReturn[0] + arrayReturn[1] +"\n"; 
        } 
    }
    if (listError===""){
        alert(list);
    }else { 
        alert(listError);
    }
}
//Name in the title
var nameInput =  document.getElementById('name');
nameInput.addEventListener('keyup',titleName);

function titleName(){
    document.getElementById('hi').innerText = 'Hi... ' +  event.target.value;
}
}
