const assert = require('assert');
const { getOperandPrecedence } = require('../src/postfixConverter');

describe('postfixConverter', function () {
	describe('getOperandPrecedence()', function () {
		it('should return 0 when passed `(`', function () {
			assert.equal(getOperandPrecedence('('), 0);
		});
		it('should return 1 when passed `+`', function () {
			assert.equal(getOperandPrecedence('+'), 1);
		});
		it('should return 1 when passed `-`', function () {
			assert.equal(getOperandPrecedence('-'), 1);
		});
		it('should return 2 when passed `*`', function () {
			assert.equal(getOperandPrecedence('*'), 2);
		});
		it('should return 2 when passed `/`', function () {
			assert.equal(getOperandPrecedence('/'), 2);
		});
		it('should return undefined when passed a wrong argument', function () {
			assert.equal(getOperandPrecedence('x'), undefined);
		});
	});
});
