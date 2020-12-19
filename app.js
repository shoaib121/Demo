var express = require('express');

var app = express();

app.get('/', (req, res) => {
	res.send('<div style=\'text-align: center\'><p>Hello Noman</p></div>');
});

app.get('/product', (req, res) => {
	var body = '<div><ul>';
	for(var i = 0; i<100; i++) {
		body += `<li>Item # ${i}`;
	}
	body += '</ul></div>';
	res.send(body);
});

app.listen(8080, () => {
	console.log('App is live....');
});