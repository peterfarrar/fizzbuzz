// export default function fizzBuzz(value: number): string {
//   const result: string = (value%3 ? '' : 'Fizz') + (value%5 ? '' : 'Buzz')
//   return (result ? result : null) ?? value.toString()
// }
export default function fizzBuzz(value: number): string {
  const result: string = (value%3 ? '' : 'Fizz') + (value%5 ? '' : 'Buzz')
  return result || value.toString()
}
