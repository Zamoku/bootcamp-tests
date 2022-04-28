describe('this is a regCheck function' , function(){
    it('should return true if the string ends with second parameter given(registration plate)' , function(){
        assert.equal(true, regCheck("DV 23 NB GP", "GP"));
    });

    it('should return false if the string does not end with the second parameter given(registration plate)' , function(){
        assert.equal(false, regCheck("CY 189-012", "ND"));
    });

    it('should return false if the string ends with a different registration plate as the second parameter given' , function(){
        assert.equal(false, regCheck("CY 189-012 GP", "ND"));
    });

});