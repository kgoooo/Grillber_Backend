const User = require('../models').User;

module.exports = {
	create(req, res){
		return User
		.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      dob: req.body.dob,
      avatar_url: req.body.avatar_url,
      password: req.body.password,
      address1: req.body.address1,
      address2: req.body.address2,
      state: req.body.state,
			zipcode: req.body.zipcode,
			cc_number: req.body.cc_number,
			cc_exp_date: req.body.cc_exp_date,
			cc_name: req.body.cc_name,
			phone_number: req.body.phone_number
		})
		.then(user => res.status(201).send(user))
		.catch(error => res.status(400).send(error))
	},
	//fetch all users in DB
	list(req, res){
		return User
		.all()
		.then(users => res.status(200).send(users))
		.catch(error => res.status(400).send(error))
	},
	retrieve(req, res) {
		return User
		.findById(req.params.id)
		.then(user => {
			if(!user) {
				return res.status(404).send({
					message: "User could not be found"
				})
			}
			return res.status(200).send(user)
		})
		.catch(error => res.status(400).send(error))
	}
}