import { UserService } from '../../src/services/user.service';


describe('user ', function() {

	const userService = new UserService();

	it('find many', async function() {
		const body = {};
		const query = {};


		const result = await userService.findMany(body, query);


		expect(result).toEqual(['shit', 'shit']);


	});
});