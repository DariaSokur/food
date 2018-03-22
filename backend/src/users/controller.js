class UsersController {
	list(req, res) {
		console.log('got request for users');
		res.json([]);
	};
	get(req, res) {
		const id = Number(req.params.id);
		console.log('got request for one users with id ' + id);
		res.json({
			id
		});
	};
	add(req, res) {
		const data = req.body;
		data.id = Date.now();
		console.log('got request for adding new user', data);
		res.json(data);
	};
	update(req, res) {
		const data = req.body;
		console.log('got request for updating', data);
		res.json(data);
	};
	delete(req, res) {
		const id = Number(req.params.id);
		res.json({id});
		console.log('got request for deletion user with id ' + id);
	}
}
module.exports = new UsersController;
