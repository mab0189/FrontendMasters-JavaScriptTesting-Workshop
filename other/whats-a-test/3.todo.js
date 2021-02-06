// Writing a testing framework

/*
Let's improve our error messages a bit, create a function called `test` which 
can be given a title and a callback. Then add a try/catch so you can log the 
title with a note of success or error.

Then wrap each of your tests in a `test` function.

This also means that we can run all the tests even if one of them fails!

Example of test function:

test(title, () => {
  // arrange
  // act
  // assert
}

Then run this code with `node 3.todo`
> Make sure you're in the right directory!
 */

const {sum, subtract} = require('./math')

function expect(actual){

	return {
		toBe(expected){
			if (actual !== expected) {
				throw new Error(`${actual} is not equal to ${expected}`)
			}
		},
	}

}

function test(titel, callback){

	console.log(`Test: ${ titel }`);

	try {
		callback();
	} catch (error) {
		console.log('Failed!');
		console.log(error);
		return;
	}

	console.log('Passed!');

}

test('If the sum of 3 + 7 is 10', () => {

	// arrange
	// act
	// assert

	const result = sum(3, 7);
	const expected = 10;
	expect(result).toBe(expected);

});


test('If the subtraction of 1 - 1 is 0', () => {

	const result = subtract(1, 1);
	const expected = 0;
	expect(result).toBe(expected);

});


