describe('this is a transportFee function' , function(){
    it('should return R20 as the price if shift worked is morning' , function(){
        assert.equal('R20', transportFee('morning'));
       
    });
    it('should return R10 as the price if shift worked is afternoon' , function(){
        assert.equal('R10', transportFee('afternoon'));
       

    });
    it('should return free if shift worked is night' , function(){
        assert.equal('free', transportFee('night'));

    });

    
});