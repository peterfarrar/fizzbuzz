import { expect } from 'chai'
import fizzBuzz from '../src/fizzbuzz'

describe('fizzBuzz', () => {
  const checkFizzBuzz = (testvalue: number, expectedResult: string): void => {
    var result = fizzBuzz(testvalue)
    expect(result).to.equal(expectedResult)
  }

  it('returns 1 with a 1 passed in', () => {
    checkFizzBuzz(1,'1')
  })
  
  it('returns 2 with a 2 passed in', () => {
    checkFizzBuzz(2,'2')
  })
  
  it('returns "Fizz: when a 3 is passed in', () => {
    checkFizzBuzz(3, 'Fizz')
  }) 
  
  it('returns "Buzz: when a 5 is passed in', () => {
    checkFizzBuzz(5, 'Buzz')
  }) 
  
  it('returns "FizzBuzz: when a 15 is passed in', () => {
    checkFizzBuzz(15, 'FizzBuzz')
  }) 
})
