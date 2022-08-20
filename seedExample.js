require('dotenv').config();
//connect this script to the database
require('./config/database')

const CaseModel = require('./models/CaseModel.js');

async function populate() {
  await CaseModel.deleteMany()
  await CaseModel.create({
    manufacturer:'Apple',
    model: 'iPhone X',
    type: 'Slim',
    basePrice: 19.99
  })
  await CaseModel.create({
    manufacturer:'Apple',
    model: 'iPhone X',
    type: 'Rugged',
    basePrice: 24.99
  })
  await CaseModel.create({    
    manufacturer:'Apple',
    model: 'iPhone XR',
    type: 'Slim',
    basePrice: 19.99
  })
  await CaseModel.create({    
    manufacturer:'Apple',
    model: 'iPhone XR',
    type: 'Rugged',
    basePrice: 24.99
  })
  await CaseModel.create({
    manufacturer:'Google',
    model: 'Pixel',
    type: 'Slim',
    basePrice: 19.99
  })
  await CaseModel.create({
    manufacturer:'Google',
    model: 'Pixel',
    type: 'Rugged',
    basePrice: 24.99
  })
  await CaseModel.create({    
    manufacturer:'Google',
    model: 'Pixel XL',
    type: 'Slim',
    basePrice: 19.99
  })
  await CaseModel.create({    
    manufacturer:'Google',
    model: 'Pixel XL',
    type: 'Rugged',
    basePrice: 24.99
  })
  await CaseModel.create({    
    manufacturer:'Samsung',
    model: 'Galaxy Note 5',
    type: 'Slim',
    basePrice: 19.99
  })
  await CaseModel.create({    
    manufacturer:'Samsung',
    model: 'Galaxy Note 5',
    type: 'Rugged',
    basePrice: 24.99
  }) 
}
populate()