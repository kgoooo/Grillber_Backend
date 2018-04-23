const grillsController = require('../controllers').grills;
const usersController = require('../controllers').users;

module.exports = (app) => {
	app.get('/api', (req, res) => res.status(200).send({
		message: "Welcome to the Grillber API!"
	}));

	app.post('/api/grills', grillsController.create)
	app.get('/api/grills', grillsController.list)
	app.get('/api/grills/:id', grillsController.retrieve)
	app.put('/api/grills/:id', grillsController.update)
	app.delete('/api/grills/:id', grillsController.destroy)

	app.post('/api/users', usersController.create)
	app.get('/api/users', usersController.list)
	app.get('/api/users/:id', usersController.retrieve)
	app.put('/api/users/:id', usersController.update)
	app.delete('/api/users/:id', usersController.destroy)
}