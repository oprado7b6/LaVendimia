var MongoClient = require('mongodb').MongoClient;
const DATABASE_NAME = "LaVendimia";
const URL = "mongodb://localhost:27017/${DATABASE_NAME}";

module.exports = async function() {
	const client = new MongoClient.connect(URL, { useNewUrlParser: true });
	var db = null;
	try {
		// Note this breaks.
		// await client.connect({useNewUrlParser: true})
		await client.connect();
		db = client.db(DATABASE_NAME);
	} catch (err) {
		console.log(err.stack);
	}
    return db;
};