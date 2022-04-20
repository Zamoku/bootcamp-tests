describe('this is a fromWhere function' , function(){
    it('should return the town the car is from' , function(){
        assert.equal('Bellville', fromWhere('CY'));
        assert.equal('Paarl', fromWhere('CJ'));
        assert.equal('Cape Town', fromWhere('CA'));
       

    });
    it('should return some places if car is not from Bellville, Paarl or Cape Town', function(){
        assert.equal('Some other place!',fromWhere('CC'));
    })
});