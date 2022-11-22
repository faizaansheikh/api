const {MongoClient} = require('mongodb')
const url = "mongodb://localhost:27017";
const dataBaseName = 'Users_app';
const client = new MongoClient(url);
const dbConnection = async()=>{
    let result = await client.connect();
    db = result.db(dataBaseName);
    return db.collection('employees')
}
module.exports = dbConnection;