const createCounter= (n) => {
    let c = 0
    let num = n
    return function () {
        if (c === 0) {
            c = 1

            return n
        }
        else {
            num = num + 1
            return num
        }
    }
}

const counter = createCounter(-2)
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())