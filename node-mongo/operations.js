
exports.insertDocument = async (db, document, collection, callback) => {
    const coll = db.collection(collection);
    await coll.insertOne(document).then(result => callback(result));
};

exports.findDocuments = (db, collection, callback) => {
    const coll = db.collection(collection);
    coll.find({}).toArray().then(result => callback(result));
};

exports.removeDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
    coll.deleteOne(document).then(result => callback(result));
};

exports.updateDocument = (db, document, update, collection, callback) => {
    const coll = db.collection(collection);
    coll.updateOne(document, { $set: update }).then(result => callback(result));
};


exports.dropCollection = (db, collection, callback) => {
    db.dropCollection(collection, (result) => callback(result));
}
