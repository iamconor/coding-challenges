for(let a = 1; a <= 100; a++) {
  
  let isMultipleOf3 = a % 3 === 0 ? 'T' : 'F'
  let isMultipleOf5 = a % 5 === 0 ? 'T' : 'F'
  
  let codedString = isMultipleOf3 + isMultipleOf5
  
  switch(codedString) {
    case 'TF':
      console.log('Fizz')
      break;
    case 'FT':
      console.log('Buzz')
      break;
    case 'TT':
      console.log('FizzBuzz')
      break;
    default:
      console.log(a)
  }
  
}
