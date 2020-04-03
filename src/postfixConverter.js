const { parseInput } = require('./parsing')

const getOperandPrecedence = (operand) => {
    const operands = {
        '(': 0,
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
    }

    return operands[operand]
}

const handleClosingParenthesis = (operations, postfix) => {
    let currentOperand = operations.pop()

    while (currentOperand !== '(') {
        postfix.push(currentOperand)
        currentOperand = operations.pop()
    }
}

const handleOperand = (infix, operations, postfix) => {
    const operand = infix[0]
    const currentPrecedence = getOperandPrecedence(operand)
    const lastPrecedence = getOperandPrecedence(
        operations[operations.length - 1]
    )

    if (operand === '(') {
        operations.push(operand)
    } else if (operand === ')') {
        handleClosingParenthesis(operations, postfix)
    } else if (currentPrecedence <= lastPrecedence) {
        postfix.push(operations.pop())
        operations.push(operand)
    } else {
        operations.push(operand)
    }
}

const handleNumber = (infix, postfix) => {
    const number = parseInt(infix)
    postfix.push(number)
    return number.toString().length
}

const infixToPostfix = (input) => {
    const operations = ['(']
    const postfix = []
    let curNumberLength = 0
    let infix = parseInput(input)

    if (infix === null) {
        console.error('Incorrect Syntax')
        return null
    }

    infix += ')'

    while (infix.length) {
        if (isNaN(infix[0])) {
            handleOperand(infix, operations, postfix)
            infix = infix.substring(1)
        } else {
            curNumberLength = handleNumber(infix, operations, postfix)
            infix = infix.substring(curNumberLength)
        }
    }
    return postfix
}

module.exports = {
    infixToPostfix
}