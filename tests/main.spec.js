/* global define, it, describe */

import { expect } from 'chai';
import FizzBuzz from './../src/main';


describe('Main', () => {
  it('should return Fizz if the number is multiple of 3', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz');
    expect(FizzBuzz(6)).to.be.equal('Fizz');
  });
  it('should return Buzz if the number is multiple of 5', () => {
    expect(FizzBuzz(5)).to.be.equal('Buzz');
  });
  it('should return FizzBuzz if the number is multiple of 5 and 3', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
  });
  it('should return the number if the number is not multiple of 3 and 5', () => {
    expect(FizzBuzz(14)).to.be.equal(14);
    expect(FizzBuzz(16)).to.be.equal(16);
  });
});
