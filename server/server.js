const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

let grills = [];
let accessories = [];
let users = [];
let orders = [];

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

// Get ALL grills
app.get('/grills', (req, res) => {
	res.send(grills)
})
// NEW GRILL
app.post('/grills', (req, res) => {
	grills.push(req.body);
	console.log(grills);
})
//////////////////////////////
app.get('/accessories', (req, res) => {
	res.send(accessories)
})
app.post('/accessories', (req, res) => {
	accessories.push(req.body)
	console.log(accessories);
})

//////////////////////////////
//Get ALL users
app.get('/users', (req, res) => {
	res.send(users)
})
//NEW USER
app.post('/users', (req, res) => {
	users.push(req.body)
	console.log(users);
})

//////////////////////////////
//Get ALL orders
app.get('/orders', (req, res) => {
	res.send(orders)
})
app.post('/orders', (req, res) => {
	orders.push(req.body)
	console.log(orders);
})





app.listen(3000, () => console.log('Backend up on 3000'));