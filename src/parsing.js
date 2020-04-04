const stripSpaces = (string) => {
	return string.replace(/ /g, '').replace(/\n/g, '').replace(/\r/g, '');
};

const parseInput = (input) => {
	const strippedInput = stripSpaces(input);
	const operands = ['+', '-', '*', '/'];
	const parentheses = ['(', ')'];
	const characterCount = { '(': 0, ')': 0 };
	let currentChar;

	for (let i = 0; i < strippedInput.length; i += 1) {
		currentChar = strippedInput[i];
		if (
			Number.isNaN(currentChar) &&
			!operands.includes(currentChar) &&
			!parentheses.includes(currentChar)
		)
			return null;
		if (parentheses.includes(currentChar)) characterCount[currentChar] += 1;
	}
	if (characterCount['('] !== characterCount[')']) return null;

	return strippedInput;
};

module.exports = {
	parseInput,
};
