const stripSpaces = (string) => {
    return string.replace(/ /g, '').replace(/\n/g, '').replace(/\r/g, '')
}

const parseInput = (input) => {
    const strippedInput = stripSpaces(input)
    const operands = ['+', '-', '*', '/']
    const parenthesises = ['(', ')']
    const characterCount = { '(': 0, ')': 0 }
    let currentChar

    for (let i = 0; i < strippedInput.length; i++) {
        currentChar = strippedInput[i]
        if (
            isNaN(currentChar) &&
            !operands.includes(currentChar) &&
            !parenthesises.includes(currentChar)
        )
            return null
        if (parenthesises.includes(currentChar))
            characterCount[currentChar] += 1
    }
    if (characterCount['('] !== characterCount[')']) return null

    return strippedInput
}

module.exports = {
    parseInput
}