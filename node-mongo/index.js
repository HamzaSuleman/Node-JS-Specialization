const { MongoClient, ServerApiVersion } = require('mongodb');
const assert = require('assert');

const password = 'Hamza03151160732'
const uri = `mongodb+srv://HamzaSuleman:`+password+`@restuarant.od4dbzw.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const dbname = 'Restuarant';


async function getDishes(){
        let connection = await client.connect();
        let db = connection.db(dbname);
        let collection = db.collection("dishes");
        let dishes = await collection.find({}).toArray();
        console.log(dishes);
}

const operation = async () => {
    let connection = await client.connect();
    let db = connection.db(dbname);
    let collection = db.collection("dishes");
    collection.insertOne({"name": "Pizza", "description": "Yummy dish"}).then(value => {
         console.log(value);
     }); 
    collection.find({}).toArray().then(value => {
        console.log(value);
    });
    db.dropCollection("dishes", (err, result) => {
        assert.equal(err,null);
        client.close();
    });

}

async function main(){

    try {
       operation();
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();
 
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

