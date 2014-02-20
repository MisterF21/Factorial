describe('factorial', function() {

  it('should multiply itself by every integer less than itself consecutively', function() {
    factorial(7).should.equal(5040)
  });

  it('should return one if zero is entered as a number', function() {
    factorial(0).should.equal(1)
  });

  it('should return one if one is entered as a number', function() {
    factorial(1).should.equal(1)
  });  

});
