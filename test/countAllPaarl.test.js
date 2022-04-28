describe('this is a countAllPaarl function' , function(){
    it('should return the number of registration numbers in the string for Paarl' , function(){
        assert.equal(3,countAllPaarl("CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123"));
    });

    it("should return 'There are no registration numbers for Paarl' in the string for Paarl if no registration numbers for Paarl are found" , function(){
        assert.equal("There are no registration numbers for Paarl",countAllPaarl("CL 345 123, CK 2345, CL 123-546, CK 345, CF 123"));
    });

    it("should return 'registration numbers are more than 5 in the string' if the are more than 5 registration numbers for Paarl are found" , function(){
        assert.equal("registration numbers are more than 5 in the string",countAllPaarl("CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123, CJ 123, CJ 345 123, CJ 345 123"));
    });


});