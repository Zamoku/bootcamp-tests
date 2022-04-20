// console.log(greet("Nomzamo"));
describe('this is a greet function' , function(){
    it('should print out the name' , function(){
        assert.equal("Hello, Nomzamo",greet("Nomzamo"));
    });

});