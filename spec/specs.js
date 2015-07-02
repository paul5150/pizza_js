describe("Pizza", function(){

  describe("cost", function(){
    it("will return a base price of $10 for a cheese pizza", function(){
      var testPizza = new Pizza()
      expect(testPizza.cost).to.equal(10)
    });
  });


});
