module.exports.login = function(req, res) {
	res.status(200).json({
		login: {
			"email": "zhurik@ukr.net",
			"password": "12345"
		}
	})
}

module.exports.register = function(req, res) {
	res.status(200).json({
		register: 'from controller'
	})
}