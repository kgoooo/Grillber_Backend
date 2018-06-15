const grillsController = require('../controllers').grills;
const usersController = require('../controllers').users;
const accessoriesController = require('../controllers').accessories;

module.exports = (app) => {
	app.get('/api', (req, res) => res.status(200).send({
		message: "Welcome to the Grillber API!"
	}));

	app.post('/api/grills', grillsController.create);
	app.get('/api/grills', grillsController.list);
	app.get('/api/grills/:id', grillsController.retrieve);
	app.put('/api/grills/:id', grillsController.update);
	app.delete('/api/grills/:id', grillsController.destroy);

	app.post('/api/users', usersController.create);
	app.get('/api/users', usersController.list);
	app.get('/api/users/:id', usersController.retrieve);
	app.put('/api/users/:id', usersController.update);
	app.delete('/api/users/:id', usersController.destroy);

	app.post("/api/accessories", accessoriesController.create);
	app.get("/api/accessories", accessoriesController.list);
	app.get("/api/accessories/:id", accessoriesController.retrieve);
	app.put("/api/accessories/:id", accessoriesController.update);
	app.delete("/api/accessories/:id", accessoriesController.destroy);
};