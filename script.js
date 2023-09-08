function validation(){
    
    let user = document.getElementById('userName').value;
    let email = document.getElementById('email').value;
    let Gender = document.getElementById('Gender').value;
    let mobile = document.getElementById('mobile').value;
    let password = document.getElementById('password').value;
    let cpassword = document.getElementById('cpassword').value;

//  USER  FIELD 
    if(user == ""){
        document.getElementById('usererror').innerHTML ="** Please fill User Name.";
        return false;
    }
    

// USER NAME LENGTH  CHECK 
    if((user.length <= 2) || (user.lenght <= 20)){
        document.getElementById('usererror').innerHTML="*Please enter a valid username";
        return false;
    }

// USER NAME NOT ALLOW NUMBERS 
    if(!isNaN(user)){
        document.getElementById('usererror').innerHTML="*Username allow only characters";
    }

//=============================================================================================================

//  EMAIL FIELD
    if(email == ""){
        document.getElementById('emailerror').innerHTML ="** Please fill Email id.";
        return false;
    }

//   EMAIL @ POSITION CHECK   
    if(email.indexOf('@') <= 0){
        document.getElementById('emailerror').innerHTML ="* '@' invalid position";
        return false;
    }

//   EMAIL . POSITION CHECK   
    if((email.charAt(email.length-4)!='.') &&(email.charAt(email.length-3)!='.')){ 
        document.getElementById('emailerror').innerHTML ="* '.' invalid position";
        return false;
    }


//==============================================================================================================

//    GENDER FIELD
    if(Gender == ""){
        document.getElementById('cgender').innerHTML ="** Please choose your Gender.";
        return false;
    }
    if((Gender!=="Male") && (Gender!=="Female") && (Gender!=="Other") && (Gender!=="male") && (Gender!=="female") && (Gender!=="other")){
        document.getElementById('cgender').innerHTML="*  choose right Gender like Male,Female and Other";
        return false;
    }

//===============================================================================================================

//  MOBILE NO VALIDATION
    if(mobile == ""){
        document.getElementById('mobileno').innerHTML ="** Please enter mobile number.";
        return false;
    }
//   CHECK MOBILE NO CHARACTER ERROR    
    if(isNaN(mobile)){
        document.getElementById('mobileno').innerHTML ="*Mobile no should be numeric value ";
        return false;
    }
//  CHECK MOBILE NO. LENGTH    
    if(mobile.length!=10){
        document.getElementById('mobileno').innerHTML ="*Mobile No length must be 10 digit" ;
        return false;
    }

//==================================================================================================================

 // PASSWORD FIELD   
    if(password == ""){
        document.getElementById('pass').innerHTML ="** Please enter password.";
        return false;
    }
 // PASSWORD LENGTH VALIDATION   
    if((password.length <= 6) || (password.lenght <= 20)){
        document.getElementById('pass').innerHTML="*Password must be bitween 6 and 20";
        return false;
    }
//  PASSWORD CONFORMATION CHECK
    if(password != cpassword){
        document.getElementById('conformpass').innerHTML="*Confirm Password not match with the given password" ;
        return false;
    }
    
//======================================================================================================================
    if(cpassword == ""){
        document.getElementById('conformpass').innerHTML ="** Please conform the password.";
        return false;
    } 
//  PASSWORD CONFORMATION CHECK
    if(password != cpassword){
        document.getElementById('conformpass').innerHTML="*Confirm Password not match with the given password" ;
        return false;
    }
}