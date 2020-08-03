const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
const database = {
	users: [
		{
			id: '123',
			name: 'john',
			email: 'john@gmail.com',
			password: 'cookies',
			entries: 0,
			joined: new Date()
		},
				{
			id: '1234',
			name: 'sally',
			email: 'sally@gmail.com',
			password: 'banana',
			entries: 0,
			joined: new Date()
		}
	]
}

app.get('/', (req, res)=> {
	res.send('this is working');
})

app.post('/signin', (req, res) => {
	if(req.body.email === database.user[0].email &&
		req.body.password === database.user[0].password){
		res.joined('success');
	} else {
		res.status(400).json('error loggong in');
	}
})

app.listen(3000, ()=> {
	console.log('app is running on port 3000')
})


/*
/ --> res = this is working
/signin --> POST = success/fail
/register --> POST = user
/profile/:userid --> GET = user
/image --> PUT --> user

*/