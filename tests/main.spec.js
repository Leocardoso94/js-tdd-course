/* global define, it, describe */

const { expect } = require('chai');
const calc = require('./../src/main');

describe('Calc', () => {

  describe('Smoke tests', () => {
    it('should exist the calc lib', () => {
      expect(calc).to.exist;
    });

    it('should exist the method `sum`', () => {
      expect(calc.sum).to.exist;
      expect(calc.sum).to.be.an('function');
    });
    it('should exist the method `sub`', () => {
      expect(calc.sub).to.exist;
      expect(calc.sub).to.be.an('function');
    });
    it('should exist the method `mult`', () => {
      expect(calc.mult).to.exist;
      expect(calc.mult).to.be.an('function');
    });
    it('should exist the method `div`', () => {
      expect(calc.div).to.exist;
      expect(calc.div).to.be.an('function');
    });
  });

  describe('Sum', () => {
    const { sum } = calc;
    it('should return 4 when sum `2+2`', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });

  describe('sub', () => {
    const { sub } = calc;

    it('should return 0 when sub `2-2`', () => {
      expect(sub(2, 2)).to.be.equal(0);
    });

    it('should return -6 when sub `0-6`', () => {
      expect(sub(0, 6)).to.be.equal(-6);
    });
  });

  describe('div', () => {
    const { div } = calc;

    it('should return 1 when div `2/2`', () => {
      expect(div(2, 2)).to.be.equal(1);
    });

    it('should return "Não é possível divisão por zero" when divide by zero', () => {
      expect(div(4, 0)).to.be.equal('Não é possível divisão por zero');
    });
  });

  describe('mult', () => {
    const { mult } = calc;
    it('should return 4 when mult `2*2`', () => {
      expect(mult(2, 2)).to.be.equal(4);
    });
  });
});
