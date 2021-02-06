// The most fundamental test

/*
Write a test that reveals the bug. Write code that throws an error with a
helpful message about the bug,but only if there's a bug. So if calling sum
with some numbers doesn't return the right thing then throw an error with a
helpful message


Then run this code with `node 1.todo`
> Make sure you're in the right directory!

Bonus, write another test that would throw an error if the subtract function 
were to have a bug
*/

// sum is intentionally broken so you can see errors in the tests
const sum = (a, b) => a - b
const subtract = (a, b) => a - b

/**
* This is a simple function to test if the expected output is given by a function. 
*
* @param {function} func   - The function to test
* @param {*}        input1 - The first input for the function
* @param {*}        input2 - The second input for the function
* @param {*}        output - The expected output of the function
*/
function testFunctionOutput(func, input1, input2, output){

	const result = func(input1, input2);

	if(result === output){
		console.log(`${func.name  }: Pass`);
		console.log(`Input 1 : ${ input1}`);
		console.log(`Input 2 : ${ input2}`);
		console.log(`Expected: ${ output}`);
		console.log(`Result  : ${ result}`);
	}else{
		console.log(`${func.name  }: Fail`);
		console.log(`Input 1 : ${ input1}`);
		console.log(`Input 2 : ${ input2}`);
		console.log(`Expected: ${ output}`);
		console.log(`Result  : ${ result}`);
	}

}

testFunctionOutput(sum, 1, 2, 3);
testFunctionOutput(subtract, 2, 1, 1);