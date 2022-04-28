function isFromBellville (regNumber){
  if(regNumber.startsWith('CY')){
    return true
  }else if(regNumber.startsWith('CJ')){
    return false
  }else{
    return "Invalid registration number"
  }
    
  }