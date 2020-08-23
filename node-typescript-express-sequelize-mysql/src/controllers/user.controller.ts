import { UserService } from '../services/user.service';

export class UserController {
	constructor(private readonly userService: UserService) {
	}

	async findMany(req, res) {
		const { body, query } = req;


		const result = this.userService.findMany(body, query);


		res.send(result);
	}
}