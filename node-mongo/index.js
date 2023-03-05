const { MongoClient, ServerApiVersion } = require('mongodb');
const dboper = require('./operations');

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
    dboper.insertDocument(db, { name: "Vadonut", description: "Test"},
    "dishes", (result) => {
        console.log("Insert Document:\n", result.insertedId);

        dboper.findDocuments(db, "dishes", (docs) => {
            console.log("Found Documents:\n", docs);

            dboper.updateDocument(db, { name: "Vadonut" },
                { description: "Updated Test" }, "dishes",
                (result) => {
                    console.log("Updated Document:\n", result);

                    dboper.findDocuments(db, "dishes", (docs) => {
                        console.log("Found Updated Documents:\n", docs);
                        
                        dboper.dropCollection(db, 'dishes', (result) => {
                            console.log("Dropped Collection: ", result);
                            client.close();
                        });
                       
                    });
                });
        });
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

