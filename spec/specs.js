describe('factorial', function() {
  it('should multiply itself by every integer less than itself consecutively', function() {
    factorial(1).should.equal(1)
    factorial(7).should.equal(5040)
    factorial(0).should.equal(1)
  });
});
