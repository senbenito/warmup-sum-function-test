const sum = require('../sum.js');
const {expect,assert} = require('chai');

// Reference http://chaijs.com/ for questions

describe ('Sum', function() {

    it ('Should be a function', function() {
      // expect(sum).to.be.a('function','sum is not a function');
      assert.isFunction(sum, 'sum is not a function');
    });

    it ('Should return 0 if no arguments are passed in', function() {
      expect(sum()).to.equal(0);
      assert.equal(sum(),0);
    });

    it ('Should return "NaN" if the arguments are not numbers', () => {
      expect(sum('string', 'number')).to.equal(NaN, 'sum does not filter out NaN');
      expect(sum([1,2], {key: 1})).to.equal(NaN, 'sum does not filter out NaN');
    });

    it ('Should add numbers correctly', () => {
      expect(sum(1,2)).to.equal(3, 'sum does not add correctly');
      expect(sum(-1,2)).to.equal(1, 'sum does not add correctly');
      expect(sum(1,-2)).to.equal(-1, 'sum does not add correctly');
      expect(sum(1.11,2.22)).to.equal(3.33, 'sum does not add correctly');
    });
});
