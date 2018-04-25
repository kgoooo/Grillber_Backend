const Accessory = require("../models").Accessory;

module.exports = {
	create(req, res) {
		return Accessory
		.create({
			name: req.body.name,
			purchase: req.body.purchase,
			price: req.body.price,
			renting: req.body.renting,
			condition: req.body.condition,
			image1: req.body.image1,
			image2: req.body.image2,
			description: req.body.description
		})
		.then(accessory => res.status(201).send(accessory))
		.catch(error => res.status(400).send(rcerror))
	},
	list(req,res){
		return Accessory
		.all()
		.then(accessories => res.status(200).send(accessories))
		.catch(error => res.status(400).send(error))
	},
	retrieve(req,res){
		return Accessory
		.findById(req.params.id)
		.then(accessory => {
			if(!accessory){
				return res.status(404).send({
					message: "Accessory could not be found."
				})
			}
			return res.status(200).send(accessory)
		})
		.catch(error => res.status(400).send(error))
	},
	update(req, res){
		return Accessory
		.findById(req.params.id)
		.then(accessory => {
			if(!accessory){
				return res.status(404).send({
					message: "Accessory could not be found to update"
				})
			}
			return accessory
			.update(req.body, {fields: Object.keys(req.body)})
			.then(() => res.status(200).send(accessory))
			.catch((error) => res.status(400).send(error))
		})
		.catch((error) => res.status(400).send(error))
	},
	destroy(req, res){
		return Accessory
		.findById(req.params.id)
		.then(accessory => {
			if(!accessory){
				return res.status(400).send({
					message: "Accessory could not be found to delete"
				})
			}
			return accessory
			.destroy()
			.then(() => res.status(204).send())
			.catch((error) => res.status(400).send(error))
		})
		.catch((error) => res.status(400).send(error))		
	}
}