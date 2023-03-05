const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

const password = 'Hamza03151160732'
const url = `mongodb+srv://HamzaSuleman:`+password+`@restuarant.od4dbzw.mongodb.net/?retryWrites=true&w=majority`;

const connect = mongoose.connect(url);

connect.then((db) => {

    console.log('Connected correctly to server');

    var newDish = Dishes({
        name: 'Uthappizza',
        description: 'test'
    });

    newDish.save()
        .then((dish) => {
            console.log(dish);

            return Dishes.find({});
        })
        .then((dishes) => {
            console.log(dishes);

            return Dishes.findOneAndRemove({});
        })
        .then(() => {
            return mongoose.connection.close();
        })
        .catch((err) => {
            console.log(err);
        });

});