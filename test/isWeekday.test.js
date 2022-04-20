describe('this is a isWeekday function' , function(){
    it('should return true if the day is a day of the week' , function(){
        assert.equal(true, isWeekday("Monday"));
    });

    it('should return false if the day is not a day of the week' , function(){
        assert.equal(false, isWeekday("Sunday"));
    });

});