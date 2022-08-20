require('dotenv').config();
//connect this script to the database
require('./config/database')

const CaseModel = require('./models/CaseModel.js');

async function populate() {
  await CaseModel.deleteMany()
  await CaseModel.create({
    phoneManufacturer:'Apple',
    phoneModel: 'iPhone X',
    type: 'Slim',
    basePrice: 19.99
  })
  await CaseModel.create({
    phoneManufacturer:'Apple',
    phoneModel: 'iPhone X',
    type: 'Rugged',
    basePrice: 24.99
  })
  await CaseModel.create({    
    phoneManufacturer:'Apple',
    phoneModel: 'iPhone XR',
    type: 'Slim',
    basePrice: 19.99
  })
  await CaseModel.create({    
    phoneManufacturer:'Apple',
    phoneModel: 'iPhone XR',
    type: 'Rugged',
    basePrice: 24.99
  })
  await CaseModel.create({
    phoneManufacturer:'Google',
    phoneModel: 'Pixel',
    type: 'Slim',
    basePrice: 19.99
  })
  await CaseModel.create({
    phoneManufacturer:'Google',
    phoneModel: 'Pixel',
    type: 'Rugged',
    basePrice: 24.99
  })
  await CaseModel.create({    
    phoneManufacturer:'Google',
    phoneModel: 'Pixel XL',
    type: 'Slim',
    basePrice: 19.99
  })
  await CaseModel.create({    
    phoneManufacturer:'Google',
    phoneModel: 'Pixel XL',
    type: 'Rugged',
    basePrice: 24.99
  })
  await CaseModel.create({    
    phoneManufacturer:'Samsung',
    phoneModel: 'Galaxy Note 5',
    type: 'Slim',
    basePrice: 19.99
  })
  await CaseModel.create({    
    phoneManufacturer:'Samsung',
    phoneModel: 'Galaxy Note 5',
    type: 'Rugged',
    basePrice: 24.99
  }) 
}
populate()