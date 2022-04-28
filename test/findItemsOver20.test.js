describe("this is a findItemsOver20 function",function(){
    it('should returns the list with items that have a quantity over 20' , function(){
        assert.deepEqual([
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
        ],findItemsOver20([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ]));
    });

    it('should return an empty array if there are no items that have quantity that is over 20' , function(){
        assert.deepEqual([],findItemsOver20([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 17},
            {name : 'bananas', qty : 7},
            {name : 'apples', qty : 3},
        ]));
    });

    it('should returns the list of items even if there is a duplicate item name' , function(){
        assert.deepEqual([
            {name : 'apples', qty : 40},
            {name : 'bananas', qty : 23},
            {name : 'apples', qty : 37}
        ],findItemsOver20([
            {name : 'apples', qty : 40},
            {name : 'pears', qty : 20},
            {name : 'bananas', qty : 23},
            {name : 'apples', qty : 37}
        ]));
    });

    
})