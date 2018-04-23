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
	},
	update(req, res){
		return User
		.findById(req.params.id)
		.then(user => {
			if(!user){
				return res.status(404).send({
					message: "User not found to update."
				})
			}
			return user
			.update(req.body, {fields: Object.keys(req.body)})
			.then(() => res.status(200).send(user))
			.catch((error) => res.status(400).send(error))
		})
		.catch((error) => res.status(400).send(error))
	},
	destroy(req, res){
		return User
		.findById(req.params.id)
		.then(user => {
			if(!user){
				return res.status(400).send({
					message: "Grill could not be found to delete"
				})
			}
			return user
			.destroy()
			.then(() => res.status(204).send())
			.catch(error => res.status(400).send(error))
		})
		.catch(error => res.status(400).send(error))
	}
}

// first_name: req.body.first_name || user.first_name,
// last_name: req.body.last_name || user.last_name,
// email: req.body.email || user.email,
// dob: req.body.dob || user.dob,
// avatar_url: req.body.avatar_url || user.avatar_url,
// password: req.body.password || user.password,
// address1: req.body.address1 || user.address1,
// address2: req.body.address2 || user.address2,
// state: req.body.state || user.state,
// zipcode: req.body.zipcode || user.zipcode,
// cc_number: req.body.cc_number || user.cc_number,
// cc_exp_date: req.body.cc_exp_date || user.cc_exp_date,
// cc_name: req.body.cc_name || user.cc_name,
// phone_number: req.body.phone_number || user.phone_number