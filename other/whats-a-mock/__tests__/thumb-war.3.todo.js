// Using jest utilities
import thumbWar from '../thumb-war'
import * as utils from '../utils'

test('returns winner', () => {

	// Excercise 1:
	// Replace these lines with a call to jest.spyOn and call to mockImplementation on the mocked function (See hint #1)
	// const spy = jest.spyOn(utils, 'getWinner').mockImplementation((p1, p2) => p2);

	// "Muster" Lösung:
	jest.spyOn(utils, 'getWinner');
	utils.getWinner.mockImplementation((p1, p2) => p2)


	const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds');
	expect(winner).toBe('Kent C. Dodds');

	// Excercise 2:
	// Replace the next two lines with a restoration of the original function (See hint #2)
	// spy.mockRestore();

	// "Muster" Lösung:
	utils.getWinner.mockRestore();

})

/*
Hints below
See the solution file for the solution


Hint #1:
Here's an example of those APIs:

const myObject = {foo: () => 'bar'}
jest.spyOn(myObject, 'foo')
myObject.foo.mockImplementation(() => 'not-bar')
myObject.foo() === 'not-bar' // true


Hint #2:

If we wanted to restore the mocked `myObject.foo` functionto its original implementation, we could do:
myObject.foo.mockRestore()

And then the original implementation will be called. myObject.foo() === 'bar' // true
 */
