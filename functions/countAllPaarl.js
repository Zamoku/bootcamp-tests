function countAllPaarl(countPaarl){
  
    var array = countPaarl.split(',');
    var counter = 0;
    
    for(var i = 0; i < array.length; i++){
      //console.log (array.length)
      var newArray = array[i].trim();
      
    if(newArray.startsWith('CJ')){
       counter++;
       }
    }
    return counter;
  }