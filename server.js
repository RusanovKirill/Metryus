const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

var fs = require('fs');

app.use(cors());
app.get('/', (request, response) => {
    // response.send('Hello from Express!')
});

app.get('/transactions_card', function (req, res) {
    fs.readFile('transactions_card.json', (err, data) => {
		let parsData = JSON.parse(data);
        if (err) throw err;
        res.json(parsData);
    });
});

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }
    console.log(`server is listening on ${port}`);
});