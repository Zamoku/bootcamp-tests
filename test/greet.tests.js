// console.log(greet("Nomzamo"));
describe('this is a greet function' , function(){
    it('should print out the string name that is given' , function(){
        assert.equal("Hello, Nomzamo",greet("Nomzamo"));
    });
    it('should print out an error message if the first letter is not a Capital letter' , function(){
        assert.equal("Please make sure your name starts with Capital letter",greet("nomzamo"));
    });

    it('should print out an error message if the name has more than 10 characters' , function(){
        assert.equal("Your name shouldn't be longer than 10 characters",greet("NomzamoMuleka"));
    });
    
});