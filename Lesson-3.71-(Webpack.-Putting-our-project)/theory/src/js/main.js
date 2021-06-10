function myModule() {
	this.hello = function () {
		console.log('hi');
	};

	this.goodbye = function () {
		console.log('bye');
	};
}

module.exports = myModule;