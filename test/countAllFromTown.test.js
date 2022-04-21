describe("this is a countAllFromTown function", function(){
    it("should return the number of registration that is from that town", function(){
        assert.equal(3,countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'))
    })
})