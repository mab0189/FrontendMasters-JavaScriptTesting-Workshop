// Avoid monkey-patching with jest.mock
import thumbWar from '../thumb-war'
import * as utils from '../utils'

// Add an inline mock with the jest.mock API
//
// jest.mock(
//   relativePathToModuleToMock,
//   functionThatReturnsMockObject
// )
//
// (Hint #1)

// Achtung: jest.mock muss außerhabl des test definiert werden!
// Der Mock ist nur fuer diese Datei gültig!
jest.mock('../utils', () => {
	return {
		getWinner: jest.fn((p1, p2) => p2),
	}
})


test('returns winner', () => {

	// Excercise 1:
	// Remove the next two lines
	// jest.spyOn(utils, 'getWinner')
	// utils.getWinner.mockImplementation((p1, p2) => p2)

	const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds')
	expect(winner).toBe('Kent C. Dodds')


	expect(utils.getWinner).toHaveBeenCalledTimes(2)

	utils.getWinner.mock.calls.forEach(args => {
		expect(args).toEqual(['Ken Wheeler', 'Kent C. Dodds'])
	})

	// Excercise 2:
	// Remove the next line
	// utils.getWinner.mockRestore()

})

/*
Hint below:





jest.mock('../utils', () => {
  return {
    // ...
    // see answer in the solution file
  }
})

 */
