// Monkey-patching
import thumbWar from '../thumb-war'

// Excercise 1:
// Import the utils module (see hint #1 at the bottom of the file)
import * as utils from '../utils'

test('returns winner', () => {

	// Excercise 2:
	// Keep track of the original `getWinner` utility function (see hint #2)
	const getWinnerOriginal = utils.getWinner();

	// Excercise 3:
	// Overwrite the utils.getWinner function with our own that always returns the second player (see hint #3)
	function mockgetWinner(player1, player2){
		return player2 
	}

	utils.getWinner = mockgetWinner;


	const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds')

	// Excercise 4:
	// Change this assertion to be more for a specific player (like 'Kent C. Dodds', see hint #4):
	expect(winner).toEqual('Kent C. Dodds');

	// Excercise 5:
	// Restore the originalGetWinner function so other tests don't break (see hint #5)
	utils.getWinner = getWinnerOriginal;

})



/* Hints below:
See answers in the solution file


Hint #1:
import * as utils from '../utils'


Hint #2:
const originalGetWinner = utils.getWinner

Hint #3:
utils.getWinner = functionThatAlwaysReturnsPlayer2

Hint #4:
expect(winner).toBe('Kent C. Dodds')

Hint #5:
utils.getWinner = originalGetWinner

 */
