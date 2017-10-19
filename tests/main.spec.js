/* global define, it, describe */

import { expect } from 'chai';
import { sum, sub, div, mult } from './../src/main';


describe('Calc', () => {

  describe('Smoke tests', () => {
    it('should exist the method `sum`', () => {
      expect(sum).to.exist;
      expect(sum).to.be.an('function');
    });
    it('should exist the method `sub`', () => {
      expect(sub).to.exist;
      expect(sub).to.be.an('function');
    });
    it('should exist the method `mult`', () => {
      expect(mult).to.exist;
      expect(mult).to.be.an('function');
    });
    it('should exist the method `div`', () => {
      expect(div).to.exist;
      expect(div).to.be.an('function');
    });
  });

  describe('Sum', () => {
    it('should return 4 when sum `2+2`', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });

  describe('sub', () => {

    it('should return 0 when sub `2-2`', () => {
      expect(sub(2, 2)).to.be.equal(0);
    });

    it('should return -6 when sub `0-6`', () => {
      expect(sub(0, 6)).to.be.equal(-6);
    });
  });

  describe('div', () => {

    it('should return 1 when div `2/2`', () => {
      expect(div(2, 2)).to.be.equal(1);
    });

    it('should return "Não é possível divisão por zero" when divide by zero', () => {
      expect(div(4, 0)).to.be.equal('Não é possível divisão por zero');
    });
  });

  describe('mult', () => {
    it('should return 4 when mult `2*2`', () => {
      expect(mult(2, 2)).to.be.equal(4);
    });
  });
});
