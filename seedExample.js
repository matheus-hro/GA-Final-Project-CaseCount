require('dotenv').config();
//connect this script to the database
require('./config/database')

const Product = require('./models/product');

async function populate() {
  // await Product.deleteAll()
  await Product.deleteMany()
  await Product.create({
    
    name: "Zynga",
    brand: "Nike",
    desc: "Chic, colourful and comfortable. This season's must have active piece great for a stroll in the city",
    category: "Sneakers",
    size: [35, 36, 37, 38, 39, 40, 42],
    imgURL: "https://live.staticflickr.com/65535/52071517548_083ff04415_b.jpg",
    price: 120
  })
  await Product.create({
    
    name: "Boom",
    brand: "New Balance",
    desc: "If you are going for a run or fancy brunch, this will be your goto piece in your wardrobe. Versatile and comfortable with great heel support",
    category: "Sneakers",
    size: [35, 36, 37, 38, 39, 40, 42],
    imgURL: "https://live.staticflickr.com/65535/52071517593_ccc7970ef6_b.jpg",
    price: 66
  })
  await Product.create({
    
    name: "Air Jordan",
    brand: "Nike",
    desc: "All time classic & great collectible comes back with all recyclable material this time.",
    category: "Sneakers",
    size: [35, 36, 37, 38, 39, 40, 42],
    imgURL: "https://live.staticflickr.com/65535/52070464592_563a601598_b.jpg",
    price: 230
  })
  await Product.create({
    
    name: "Basics",
    brand: "Nike",
    desc: "Vibrant and classic. Blends minimal chic with optimal comfort. It's an everyday must. Made with recyclable plastic and reclaimed cotton",
    category: "Sneakers",
    size: [35, 36, 37, 38, 39, 40, 42],
    imgURL: "https://live.staticflickr.com/65535/52070464572_45772c9877_b.jpg",
    price: 80
  })
  await Product.create({
    
    name: "Hoops",
    brand: "Nike",
    desc: "Vibrant and classic. Blends minimal chic with optimal comfort. It's an everyday must. Made with recyclable plastic and reclaimed cotton",
    category: "Sneakers",
    size: [35, 36, 37, 38, 39, 40, 42],
    imgURL: "https://live.staticflickr.com/65535/52071739374_4ac21d65d9_b.jpg",
    price: 80
  })
  await Product.create({
    
    name: "Air Light",
    brand: "Nike",
    desc: "Hip and comfortable. Water resistant and breathable. Air with a new twist of ecochic made with reclaimed Air Jordans",
    category: "Sneakers",
    size: [35, 36, 37, 38, 39, 40, 42],
    imgURL: "https://live.staticflickr.com/65535/52071517583_4b3267e31d_b.jpg",
    price: 100
  })
  await Product.create({
    
    name: "Beat",
    brand: "Nike",
    desc: "Bringing basketball agility to stroll comfort. 100% water, sweat resistant, elastic material. An all time classic with maximum ergonomics.",
    category: "Sneakers",
    size: [35, 36, 37, 38, 39, 40, 42],
    imgURL: "https://live.staticflickr.com/65535/52071739344_7082ef6c6a_b.jpg",
    price: 100
  })
 
  await Product.create({
    
    name: "Samba",
    brand: "Adidas",
    desc: "Vintage remade with the latest technology. This is a collectible and eco-friendly piece made with reclaimed leather. Soles are made from organic material.",
    category: "Sneakers",
    size: [35, 36, 37, 38, 39, 40, 42],
    imgURL: "https://live.staticflickr.com/65535/52071739329_47468b5623_b.jpg",
    price: 90
  })
}
populate()