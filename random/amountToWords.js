function amountToWords(amount) {
  const hash = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelwe',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'fourty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
  }

  let answer = []
  let array = amount.split('')
  let preAnswer = []

  function getLength(_array) {
    return _array.length
  }
  // check thousands
  if (getLength(array) >= 4) {
    if (Number(array[1]) !== 0) {


    //   end
    //   array
      preAnswer.push(array.splice(0, 2).join(''), 'thausand')
    }
  }

  // check hundreds
  if (getLength(array) === 3) {
    if (Number(array[0]) !== 0) {
      preAnswer.push(...array.splice(0, 1))
    } else {
      array.splice(0, 1)
    }
  }

  //check tens
  if (getLength(array) === 2) {
    if (Number(array[0]) !== 0) {
      preAnswer.push(...array.splice(0, 1))
    } else {
      array.splice(0, 1)
    }
  }

  //check ones
  if (getLength(array) === 1) {
    if (Number(array[0]) !== 0) {
      preAnswer.push(...array.splice(0, 1))
    } else {
      array.splice(0, 1)
    }
  }

  //   return preAnswer.reduce((acc,next)=> {
  //       if(next)

  //   },'')
}

const test = '25001' // ['25','thousand',1']
console.log(amountToWords(test))
