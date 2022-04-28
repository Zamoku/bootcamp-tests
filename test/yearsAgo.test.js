describe('this is a yearsAgo function' , function(){
    it('should return the difference between 1945 and the current year' , function(){
        assert.equal(77, yearsAgo(1945));
    });

    it('should return the difference between 2001 and the current year' , function(){
        assert.equal(21, yearsAgo(2001));
    });
    
    it('should return the difference between 1983 and the current year' , function(){
        assert.equal(39, yearsAgo(1983));
    });


});