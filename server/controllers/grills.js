const Grill = require('../models').Grill;

module.exports = {
	create(req, res) {
		return Grill
			.create({
				name: req.body.name,
				brand: req.body.brand,
				serial_number: req.body.serial_number,
				fuel_id: req.body.fuel_id,
				rate_daily: req.body.rate_daily,
				rate_hourly: req.body.rate_hourly,
				condition: req.body.condition,
				renting: req.body.renting,
				purchase_date: req.body.purchase_date,
				serves: req.body.serves,
				image1: req.body.image1,
				image2: req.body.image2,
			})
			
			.then(grill => res.status(201).send(grill))
			.catch(error => res.status(400).send(error))
	},
	//fetch all grills in DB
	list(req, res){
		return Grill
		.all()
		.then(grills => res.status(200).send(grills))
		.catch(error => res.status(400).send(error))
	},
	retrieve(req, res){
		return Grill
		.findById(req.params.id)
		.then(grill => {
			if(!grill){
				return res.status(404).send({
					message: "Grill not found."
				})
			}
			return res.status(200).send(grill)
		})
		.catch(error => res.status(400).send(error))
	}
}