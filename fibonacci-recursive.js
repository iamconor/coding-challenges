let a = 1
let b = 1
let c = 0
let amount = 2

let next = function() {
  amount ++
  c = a + b
  a = b
  b = c
  if(amount == 1000) {
    console.log(c)
    return
  }
  next()
}

next()