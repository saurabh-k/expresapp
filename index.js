const app = require('express')();

app.get('/', (req,res) => {
	res.send('Hi from docker test');
});

app.listen(3000, ()=> console.log('sever running on port 3000'));