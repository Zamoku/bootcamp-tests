describe('this is a findItemsOver function' , function(){
    it('should returns the list items with threshold of 20' , function(){
        assert.deepEqual([
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
        ],findItemsOver([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ],20));
    });

    it('should return an empty string if there are no items with the threshold of 20' , function(){
        assert.deepEqual([],findItemsOver([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 17},
            {name : 'bananas', qty : 7},
            {name : 'apples', qty : 3},
        ],20));
    });

    it('should returns the list of items with the threshold of 20 even if there are duplicate item names' , function(){
        assert.deepEqual([
            {name : 'apples', qty : 21},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 33},
        ],findItemsOver([
            {name : 'apples', qty : 21},
            {name : 'pears', qty : 17},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 33},
        ],20));
    });

});