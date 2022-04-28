function countAllFromTown(regNumber,code){
    
    var array = regNumber.split(',');
    var counter = 0;
    
    for(var i = 0;i < array.length;i++){
      var newArray = array[i].trim();
      
      
      if(newArray.startsWith(code)){
      counter++;
      }
      
    }
    return counter;
  }