describe('this is a countRegNumber function' , function(){
    it('should print out how many registration numbers are there in the string' , function(){
        assert.equal(3,countRegNumber("CA 182736,CY 523519,CJ 812328"));
    });

    it("should check if registration number starts with 'C' in the string" , function(){
        assert.equal(3,countRegNumber("CA 182736,CY 523519,CJ 812328"));
    });

     it("should check if there is data entered and print 'There are no registration numbers' if there are no registration numbers in the string" , function(){
        assert.equal("There are no registration numbers",countRegNumber(""));
    });

});