const math = {
    sum: (a, b) => new Promise( (resolve, reject) => resolve(a + b)),
    substract: (a, b) => new Promise( (resolve, reject) => resolve(a - b)),
    log: (v) => console.log(v)
}

module.exports = math;