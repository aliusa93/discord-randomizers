


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



module.exports.randomNum = function (num) {
    if(!num) throw new Error('You must specify a  number.')

    if(typeof num !== 'number') throw new Error('Data type must be a number')

    return Math.floor(Math.random() * num)
}



