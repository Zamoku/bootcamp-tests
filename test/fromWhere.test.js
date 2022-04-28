describe('this is a fromWhere function' , function(){
    it('should return Bellville as the town if the registration number ends with CY' , function(){
        assert.equal('Bellville', fromWhere('CY'));

    });
    it('should return Paarl as the town if the registration number ends with CJ', function(){
        assert.equal('Paarl', fromWhere('CJ'));
    })

    it('should return Cape Town as the town if the registration number ends with CA', function(){
        assert.equal('Cape Town', fromWhere('CA'));
    })

    it("should return 'Some other place!' if car is not from Bellville, Paarl or Cape Town", function(){
        assert.equal('Some other place!',fromWhere('CC'));
    })
});