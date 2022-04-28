describe('this is a mostProfitableDepartment function' , function(){
    it("should return 'outdoor' the most profitable department" , function(){
        assert.equal('outdoor', mostProfitableDepartment([
            {department : 'hardware', sales : 4500, day : 'Monday'},
            {department : 'outdoor', sales : 1500, day : 'Monday'},
            {department : 'carpentry', sales : 5500, day : 'Monday'},
            {department : 'hardware', sales : 7500, day : 'Tuesday'},
            {department : 'outdoor', sales : 2505, day : 'Tuesday'},
            {department : 'carpentry', sales : 1540, day : 'Tuesday'},
            {department : 'hardware', sales : 1500, day : 'Wednesday'},
            {department : 'outdoor', sales : 8507, day : 'Wednesday'},
            {department : 'carpentry', sales : 8009, day : 'Wednesday'},
            {department : 'hardware', sales : 12000, day : 'Thursday'},
            {department : 'outdoor', sales : 18007, day : 'Thursday'},
            {department : 'carpentry', sales : 6109, day : 'Thursday'},
            {department : 'hardware', sales : 7005, day : 'Friday'},
            {department : 'outdoor', sales : 12006, day : 'Friday'},
            {department : 'carpentry', sales : 16109, day : 'Friday'},
        ]));
        
    });

    it("should return 'electronics' as the most profitable department" , function(){
        assert.equal('electronics', mostProfitableDepartment([
            {department : 'electronics', sales : 4500, day : 'Monday'},
            {department : 'outdoor', sales : 1500, day : 'Monday'},
            {department : 'carpentry', sales : 5500, day : 'Monday'},
            {department : 'steelwork', sales : 7500, day : 'Tuesday'},
            {department : 'outdoor', sales : 2505, day : 'Tuesday'},
            {department : 'carpentry', sales : 1540, day : 'Tuesday'},
            {department : 'hardware', sales : 1500, day : 'Wednesday'},
            {department : 'outdoor', sales : 8507, day : 'Wednesday'},
            {department : 'carpentry', sales : 8009, day : 'Wednesday'},
            {department : 'hardware', sales : 12000, day : 'Thursday'},
            {department : 'carpentry', sales : 6109, day : 'Thursday'},
            {department : 'hardware', sales : 7005, day : 'Friday'},
            {department : 'electronics', sales : 12006, day : 'Friday'},
            {department : 'electronics', sales : 16109, day : 'Saturday'},
            {department : 'steelwork', sales : 7500, day : 'Tuesday'},
            {department : 'outdoor', sales : 2505, day : 'Tuesday'},
            {department : 'carpentry', sales : 1540, day : 'Tuesday'},
            {department : 'steelwork', sales : 1500, day : 'Wednesday'},
            {department : 'carpentry', sales : 8009, day : 'Wednesday'},
        ]));
        
    });
    
    it("should return 'carpentry' as the most profitable department" , function(){
        assert.equal('carpentry', mostProfitableDepartment([
            {department : 'hardware', sales : 4500, day : 'Monday'},
            {department : 'outdoor', sales : 1500, day : 'Monday'},
            {department : 'carpentry', sales : 6500, day : 'Monday'},
            {department : 'hardware', sales : 7500, day : 'Tuesday'},
            {department : 'outdoor', sales : 2505, day : 'Tuesday'},
            {department : 'carpentry', sales : 2540, day : 'Tuesday'},
            {department : 'hardware', sales : 1500, day : 'Wednesday'},
            {department : 'outdoor', sales : 8507, day : 'Wednesday'},
            {department : 'carpentry', sales : 9009, day : 'Wednesday'},
            {department : 'hardware', sales : 12000, day : 'Thursday'},
            {department : 'outdoor', sales : 18007, day : 'Thursday'},
            {department : 'carpentry', sales : 7109, day : 'Thursday'},
            {department : 'hardware', sales : 7005, day : 'Friday'},
            {department : 'outdoor', sales : 12006, day : 'Friday'},
            {department : 'carpentry', sales : 26109, day : 'Friday'},
        ]));
        
    });
    
    
});