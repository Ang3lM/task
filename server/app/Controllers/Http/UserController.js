'use strict'

const User = use('App/Models/User');

class UserController {

	async login({request, auth}){
		const {email, password} = request.all();
		const token = await auth.attempt(email,password);
		return token;

	}

	async register({request}){
		const {username, email, password} = request.all();

		await User.create({
			username,
			email,
			password,
		});
		return this.login(...arguments);
	}
}

module.exports = UserController
