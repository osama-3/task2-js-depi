function convertValue() {
 var dollar = document.getElementById("dollar").value;
 var result = document.getElementById("result") ;
  
 if (dollar=="") {
    result.innerHTML = "Enter Data" ;
  }else if (isNaN(dollar)){
    result.innerHTML = "Enter Number Not Text";
  }else if (dollar<0) {
    result.innerHTML = "Enter Postive Number"
    
  } else if (dollar==0) {
    result.innerHTML="Enter Rather than Zero"
  }else{
    result.innerHTML= dollar*60
  }
  return false;
  
} 

