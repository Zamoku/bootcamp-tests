describe("this is a countAllFromTown function", function(){
    it("should return the number of registration that is from Stellies - CL", function(){
        assert.equal(4,countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341, CL 145','CL'))
    })
    it("should return the number of registration that is from Paarl - CJ", function(){
        assert.equal(1,countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CJ'))
    })

    it("should return the number of registration that is from Kuilsriver - CF", function(){
        assert.equal(0,countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CF'))
    })
})