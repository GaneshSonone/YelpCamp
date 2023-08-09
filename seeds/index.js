
// author: '5f5c330c2cd79d538f2c66d9',

const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

// mongoose.connect('mongodb://localhost:27017/yelp-camp', {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// });

// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", () => {
//     console.log("Database connected");
// });

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')
    .then( () => {
        console.log("Mongo Connection open !!!")
    })
    .catch( err  => {
        console.log("Mongo Connection ERROR !!!");
        console.log(err)
    })

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    // for (let i = 0; i < 50; i++) {
    //     const random1000 = Math.floor(Math.random() * 1000);
    //     const price = Math.floor(Math.random() * 20) + 10;
    //     const camp = new Campground({
    //         author: '5f5c330c2cd79d538f2c66d9',
    //         location: `${cities[random1000].city}, ${cities[random1000].state}`,
    //         title: `${sample(descriptors)} ${sample(places)}`,
    //         // image: 'https://source.unsplash.com/collection/483251',
    //         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!',
    //         price,
    //         images: [
    //             {
                  
    //               url: 'https://res.cloudinary.com/dmvq16fke/image/upload/v1691497433/YelpCamp/vtyeky4vg0bxkdrvipbu.webp'
    //             },
    //             {
                  
    //               url: 'https://res.cloudinary.com/dmvq16fke/image/upload/v1691497433/YelpCamp/osai50zzfcyt69kzirrr.webp'
    //             },
    //             {
                
    //               url: 'https://res.cloudinary.com/dmvq16fke/image/upload/v1691497433/YelpCamp/ocoenu67qzcfrqv78reg.jpg'
    //             }
    //           ]
    //     })
    //     await camp.save();
    // }
}

seedDB().then(() => {
    mongoose.connection.close();
})