var Product = require('../models/product');
var mongoose = require('mongoose');

var dbString = '';
mongoose.connect(dbString);

var imagePath = "";

var products = [
    new Product({
        imagePath: imagePath,
        title: 'Arsenal 16/17 Home Kit',
        description: 'With renowned red body and white sleeves, this seasons kit remembers the transformational years of Arsenal Football Club, inspired by players and managers and moments from the 90s',
        price: 55.99
    }),
    new Product({
        imagePath: imagePath,
        title: 'Man Utd 16/17 Home Kit',
        description: 'Inspired by the green and yellow shirts worn by its predecessor club Newton Heath, the Manchester United 2016-17 home jersey sports a half-and-half design in two shades of red.',
        price: 59.99
    }),
    new Product({
        title: 'Chelsea 16/17 Home Kit',
        description: 'Based on the same template as the new Russia and Spain Euro 2016 home kits, the Chelsea 2016-2017 shirt comes in the clubs traditional blue color. It has the same badge as always etc. etc.',
        price: 50.99
    }),
    new Product({
        imagePath: imagePath,
        title: 'Liverpool 16/17 Home Kit',
        description: 'The 16/17 Liverpool FC New Balance Men’s Short Sleeve Home Shirt is a 100% authentic replica shirt, and this design will be worn by the players throughout the 2016/17 season.',
        price: 49.99
    }),
    new Product({
        imagePath: imagePath,
        title: 'Stoke 16/17 Home Kit',
        description: 'The Stoke home kit shows the classic red and white stripes worn in the late 1970s and early 80s and which figured in the promotion winning season of 1978/79.',
        price: 42.99
    }),
    new Product({
        imagePath: imagePath,
        title: 'West Ham Home Kit',
        description: 'The new West Ham kit features the new club crest for the very first time. Below it is written "Queen Elizabeth Olympic Park 2016-2017", for West Hams historic move their new stadium.',
        price: 54.99
    })

];

var done = 0;

for(var i = 0; i < products.length; i++){
    products[i].save(function(){
        done++;
        if(done === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}

