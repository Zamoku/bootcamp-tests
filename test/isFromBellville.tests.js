describe('this is a function that returns true if a vehicle is from Bellville' , function(){
    it('should return true if the registration number starts with CY to show that the vehicle reg is from bellville' , function(){
        assert.equal(true,isFromBellville("CY 123"));

    });
    it('should return false if the vehicle reg is not from bellville' , function(){
        assert.equal(false,isFromBellville("CJ 123"));

    });
    it("should return 'Invalid registration number' if the entered registration number is invalid" , function(){
        assert.equal("Invalid registration number",isFromBellville("123"));

    });

});