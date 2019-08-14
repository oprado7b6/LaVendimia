const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

class Connection {
	static connectToMongo() {
		if ( this.db ) return Promise.resolve(this.db)
		return MongoClient.connect(this.url, this.options).then(db => this.db = db)
	}
}

Connection.db = null;
// Connection URL
Connection.url = process.env.DBURL;

Connection.options = {
	bufferMaxEntries: 0,
	reconnectTries: 5000,
	useNewUrlParser: true
}

module.exports = { Connection }