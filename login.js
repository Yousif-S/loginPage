function login_valid()
{
  var User = document.login.Username.value;  
  var Pass = document.login.Password.value; 
  var valid = true; 
  
  if(User === "")
  {
      valid=false;
      euser.style.visibility = "visible";
     inputPassword2.style.border ="1px solid red";
  }
  else
  {
     euser.style.visibility = "hidden";
     Username.style.border ="1px solid green";
  }
  
  
    if(Pass === "")
  {
      valid=false;
      epass.style.visibility = "visible";
      Username.style.border ="1px solid red";
  }
  else
  {
     epass.style.visibility = "hidden";
  
  }
  
  if(valid)
  {
      Username.style.border ="1px solid green";
      inputPassword2.style.border ="1px solid green";
      return true;
  }
  else
  {
      return false;
  }
}
