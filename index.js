const express = require('express');
const app = express();
const port = 9999;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('./public'));
app.use(express.static('./model'));

// request handlers

app.get('/', (req, res)=>{
	res.send('henlo2');
});

const {Thang} = require('./model/Thang.js');
app.get('/thang', (req, res)=>{
	let obj = new Thang();
	res.json({result: JSON.stringify(obj)});
});

//// todoapp
let todoAppData = '{"todoList":[{"id":0,"name":"jdjdnd","isDone":false},{"id":1,"name":"ttsh","isDone":false},{"id":2,"name":"2","isDone":false},{"id":3,"name":"thang","isDone":true}],"keySearch":""}';
let todoAppAccessToken = '12345678';
let todoAppUserProfile = {
	id: 2134,
	name: 'thang bui quang'
};

// query data
app.get('/todoapp', async (req, res) => {
	console.log('get todoapp/');
	let accessToken = req.get('accessToken');
	if (accessToken == todoAppAccessToken) {
		res.json({ data: todoAppData });
	} else {
		res.status(400).json({error: 'invalid accessToken'});
	}
});

// store data
app.post('/todoapp', async (req, res) => {
	console.log('post todoapp/');
	console.log(req.body);
	let accessToken = req.get('accessToken');
	if (accessToken == todoAppAccessToken) {
		todoAppData = req.body.data;
		res.json({ result: 'ok' });
	} else {
		res.status(400).json({ error: 'invalid accessToken' });
	}

});

// login
app.post('/todoapp/login', async (req, res) => {
	console.log('post /todoapp/login');
	res.json({ accessToken: todoAppAccessToken });
});

// user profile
app.get('/todoapp/user', async (req, res) => {
	console.log('get /todoapp/user');
	let accessToken = req.get('accessToken');
	console.log(req.get('accessToken'));

	if (accessToken == todoAppAccessToken) {
		res.json({ profile: todoAppUserProfile });
	} else {
		res.status(400).json({ error: 'invalid accessToken' });
	}
});


// listen
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
});

// update sth234
