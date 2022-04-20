describe('this is a regCheck function' , function(){
    it('should true if string ends with number plate' , function(){
        assert.equal(true, regCheck("DV 23 NB GP", "GP"));
    });

    it('should return false string does not end with number plate' , function(){
        assert.equal(false, regCheck("CY 189-012", "ND"));
    });

});