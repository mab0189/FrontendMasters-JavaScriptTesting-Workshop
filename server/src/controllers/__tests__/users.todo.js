import {initDb} from 'til-server-test-utils'
import * as usersController from '../users'

test('getUsers returns all users in the database', async () =>{

		await initDb();

		const req = {};
		const res = {
			json: jest.fn(),
		}

		await usersController.getUsers(req, res);

		expect(res.json).toHaveBeenCalledTimes(1);
		console.log(res.json.mock.calls[0]);

})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=users%20test$20object%20factories&em=
*/

test('I submitted my elaboration and feedback', () => {
  const submitted = true // change this when you've submitted!
  expect(submitted).toBe(true)
})


