describe('this is a transportFee function' , function(){
    it('should return the price according to shift worked' , function(){
        assert.equal('R20', transportFee('morning'));
        assert.equal('R10', transportFee('afternoon'));
        assert.equal('free', transportFee('night'));

    });
    
});