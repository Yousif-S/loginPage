function login_valid()
{
  var User = document.login.Username.value;  
  var Pass = document.login.Password.value; 
  var valid = true; 
  
  if(User === "")
  {
      valid=false;
      euser.style.visibility = "visible"; 
  }
  else
  {
     euser.style.visibility = "hidden"; 
  }
  
    if(Pass === "")
  {
      valid=false;
      epass.style.visibility = "visible"; 
  }
  else
  {
     epass.style.visibility = "hidden"; 
  }
  
  if(valid)
  {
      return true;
  }
  else
  {
      return false;
  }
}
