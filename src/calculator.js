const computeSingleOperation = (n1, n2, operand) => {
	if (operand === '/' && n2 === 0) return undefined;

	switch (operand) {
		case '+':
			return n1 + n2;
		case '-':
			return n1 - n2;
		case '*':
			return n1 * n2;
		case '/':
			return n1 / n2;
		default:
			return undefined;
	}
};

const computePostfix = (postfixArray) => {
	let first;
	let second;
	let third;
	let result;
	let i = 0;

	while (postfixArray.length > 1) {
		while (i < postfixArray.length - 2) {
			first = postfixArray[i];
			second = postfixArray[i + 1];
			third = postfixArray[i + 2];
			if (
				!Number.isNaN(first) &&
				!Number.isNaN(second) &&
				Number.isNaN(third)
			) {
				result = computeSingleOperation(first, second, third);
				if (!result) return result;
				postfixArray.splice(i, 3, result);
				break;
			}
			i += 1;
		}
		i = 0;
	}
	return postfixArray[0];
};

module.exports = {
	computePostfix,
};
