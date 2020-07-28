var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
	var data = {
		name: 'Nafiz Fuad Siam',
		id: '17-33438-1'
	};
	res.render('home', data);
});

router.post('/', (req, res) => {

	res.render('posted');
});


module.exports = router;

