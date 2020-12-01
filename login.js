
              
               function login_valid()
            {
                   var name = document.login.Username.value;
                    var pass = document.login.Password.value; 
                    
                   var valid=true;
              
              if(name === "")
              {
                  
              valid=false; 
                Uname.style.visibility = "visible"; 
                
            }
               else{
                   
               Uname.style.visibility = "hidden"; 
               
                    } 

              if(pass === "")
              {
                  
              valid=false; 
                Epass.style.visibility = "visible"; 
                
            }
               else{
                   
               Epass.style.visibility = "hidden"; 
               
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
      
