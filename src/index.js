const { infixToPostfix } = require('./postfixConverter');
const { computePostfix } = require('./calculator');

const calculateInput = (input) => {
	const postfix = infixToPostfix(input.toString());
	if (postfix) {
		console.log('postfix =', postfix.join(' '));
		console.log('result =', computePostfix(postfix));
	}
};

(() => {
	console.log('Calculator3000 (All Rights Reserved)');
	console.log('Accepted operands are ( ) + - * /');
	console.log();
	console.log('Input a calculation:');
	process.stdin.on('data', (input) => {
		calculateInput(input);
		console.log();
	});
})();
