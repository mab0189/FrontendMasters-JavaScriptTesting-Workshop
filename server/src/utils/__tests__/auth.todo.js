import {isPasswordAllowed, userToJSON} from '../auth'

describe('isPasswordAllowed', () =>{

	const allowedPasswords = [
		'GoodPassword1337!',
		'AnotherGoodPassword1!',
		'iLikeJest12'
	];

	const disallowedPasswords = [
		'',
		'ffffffff',
		'88888888'
	];

	allowedPasswords.forEach(pwd => {
		it(`"${pwd}" should be allowed as a password`, () => {
			expect(isPasswordAllowed(pwd)).toBe(true);
		})
	})

	disallowedPasswords.forEach(pwd => {
		it(`"${pwd}" should not be allowed as a password`, () => {
			expect(isPasswordAllowed(pwd)).toBe(false);
		})
	})

})

test('isPasswordAllowed only allows some passwords', () => {
	// Here's where I'll demo things for you :)

	expect(isPasswordAllowed('')).toBe(false);
	expect(isPasswordAllowed('ffffffff')).toBe(false);
	expect(isPasswordAllowed('88888888')).toBe(false);
	expect(isPasswordAllowed('GoodPassword1337!')).toBe(true);

})

test('userToJSON excludes secure properties', () => {
	// Here you'll need to create a test user object
	// pass that to the userToJSON function
	// and then assert that the test user object
	// doesn't have any of the properties it's not
	// supposed to.
	// Here's an example of a user object:
	// const user = {
	//   id: 'some-id',
	//   username: 'sarah',
	//   // ↑ above are properties which should
	//   // be present in the returned object
	//
	//   // ↓ below are properties which shouldn't
	//   // be present in the returned object
	//   exp: new Date(),
	//   iat: new Date(),
	//   hash: 'some really long string',
	//   salt: 'some shorter string',
	// }

	const user = {
		id: '1337',
		username: 'Matthias',
		exp: new Date(),
		iat: new Date(),
		hash: 'some really long string',
		salt: 'some shorter string',
	}

	const userSafe = {
		id: '1337',
		username: 'Matthias',
	}

	expect(userToJSON(user)).toMatchObject(userSafe);


})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=auth%20util&em=
*/
test('I submitted my elaboration and feedback', () => {
  const submitted = true // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
