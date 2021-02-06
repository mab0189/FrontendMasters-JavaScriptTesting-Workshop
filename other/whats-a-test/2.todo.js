// Writing an assertion library

/*
Now let's implement our own assertion library. Create a function called `expect` that accepts an "actual"
and returns an object of assertions.

Tip: I want to be able to use it like so:
> expect(actual).toBe(expected)

Then run this code with `node 2.todo`
> Make sure you're in the right directory!
 */

const {sum, subtract} = require('./math')

// My asseration framework
class expect{

	constructor(actual){
		this.actual = actual;
	}

	/**
	* This is a simple function to test if the expected output is given by a function.
	*
	* @param {*} expected - The expected output of the function
	*/
	toBe(expected){
		if(this.actual === expected){
			console.log(`Pass`);
			console.log(`Actual   : ${ this.actual }`);
			console.log(`Expected : ${ expected    }`);
		}else{
			console.log(`Fail`);
			console.log(`Actual   : ${ this.actual }`);
			console.log(`Expected : ${ expected    }`);
		}
	}

};




let result, expected

result = sum(3, 7)

const test1 = new expect(result).toBe(10);

result = subtract(1,1);
const test2 = new expect(result).toBe(0);


