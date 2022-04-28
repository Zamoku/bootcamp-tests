describe('this is a isWeekday function' , function(){
    it('should return true if the day is a day of the week' , function(){
        assert.equal(true, isWeekday("Monday"));
    });

    it('should return false if the day is not a day of the week' , function(){
        assert.equal(false, isWeekday("Sunday"));
    });

    it('should return an error message if the day is not any day of the week' , function(){
        assert.equal("Please double check and make sure you enter the correct day of the week", isWeekday("Today"));
    });
    
});