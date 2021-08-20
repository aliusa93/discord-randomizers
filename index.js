


module.exports.twoRandomStr = function (value1, value2) {

    if(!value1) throw new Error('You must specify value 1!')
    if(!value2) throw new Error('You must specify value 2!')

    if(typeof value1 !== 'string') {
        throw new Error('Data type must be a string.')
    }

    if(typeof value2 !== 'string') {
        throw new Error('Data type must be a string.')
    }

    
    let arrayOfStrings = [
        value1,
        value2
    ]

    let response = arrayOfStrings[Math.floor(Math.random() * arrayOfStrings.length)]
    return response;
}



module.exports.randomNum = function (limit) {
    if(!num) throw new Error('You must specify a number.')

    if(typeof num !== 'number') throw new Error('Data type must be a number')

    return Math.floor(Math.random() * limit)
}


module.exports.randomString = function (length) {
    const randomString = require('random-string')

    let x = randomString({ length: length || null})

    return x;


}



module.exports.threeLuckyNumbers = function (limit) {                       //Three lucky numbers.
    if(!limit) throw new Error('Please specify a limit!')
    if(typeof limit !== 'number') throw new Error('Limit must be a string')

    let num1 = Math.floor(Math.random() * limit)
    let num2 = Math.floor(Math.random() * limit)
    let num3 = Math.floor(Math.random() * limit)

    let arrayofNumbers = [num1, num2, num3]

    let result = arrayofNumbers.join(', ')

    return result;
}
