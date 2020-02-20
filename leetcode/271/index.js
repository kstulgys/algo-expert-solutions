function encode(array) {
  return array.reduce((acc, next) => {
    acc += `${next.length}/${next}`
    return acc
  }, '')
}

function decode(str) {
  return str.split('/').reduce((acc, el) => {
    let number = el[el.length - 1]
    if (!isNaN(number)) {
      let newEl = el.substring(0, el.length - 1)
      if (newEl) {
        acc.push(newEl)
        return acc
      }
    } else {
      acc.push(el)
      return acc
    }
    return acc
  }, [])
}

const test = ['karolis', 'is', 'great']
console.log(encode(test))

const test2 = '7/karolis2/is5/great'
console.log(decode(test2))
