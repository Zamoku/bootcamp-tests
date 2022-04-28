function greet(name){
  if(name.charAt(0) !== name.charAt(0).toUpperCase()){
    return "Please make sure your name starts with Capital letter"
}
if(name.length > 10){
  return "Your name shouldn't be longer than 10 characters"
}
   return "Hello, " + name;
 }
 
