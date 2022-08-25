require("dotenv").config();
//connect this script to the database
require("./config/database");

const CaseModel = require("./models/CaseModel.js");
const UserDesign = require("./models/UserDesign.js");

async function populateCase() {
  await CaseModel.deleteMany();
  await CaseModel.create({
    phoneManufacturer: "Apple",
    phoneModel: "iPhone X",
    type: "Slim",
    displayPrice: 19.99,
  });
  await CaseModel.create({
    phoneManufacturer: "Apple",
    phoneModel: "iPhone X",
    type: "Rugged",
    displayPrice: 24.99,
  });
  await CaseModel.create({
    phoneManufacturer: "Apple",
    phoneModel: "iPhone XR",
    type: "Slim",
    displayPrice: 19.99,
  });
  await CaseModel.create({
    phoneManufacturer: "Apple",
    phoneModel: "iPhone XR",
    type: "Rugged",
    displayPrice: 24.99,
  });
  await CaseModel.create({
    phoneManufacturer: "Google",
    phoneModel: "Pixel",
    type: "Slim",
    displayPrice: 19.99,
  });
  await CaseModel.create({
    phoneManufacturer: "Google",
    phoneModel: "Pixel",
    type: "Rugged",
    displayPrice: 24.99,
  });
  await CaseModel.create({
    phoneManufacturer: "Google",
    phoneModel: "Pixel XL",
    type: "Slim",
    displayPrice: 19.99,
  });
  await CaseModel.create({
    phoneManufacturer: "Google",
    phoneModel: "Pixel XL",
    type: "Rugged",
    displayPrice: 24.99,
  });
  await CaseModel.create({
    phoneManufacturer: "Samsung",
    phoneModel: "Galaxy Note 5",
    type: "Slim",
    displayPrice: 19.99,
  });
  await CaseModel.create({
    phoneManufacturer: "Samsung",
    phoneModel: "Galaxy Note 5",
    type: "Rugged",
    displayPrice: 24.99,
  });
}

async function createUserDesign() {
  await UserDesign.deleteMany();
  let correctProduct = await UserDesign.create({
    user: "62fc53aa9b3c618a69084f80",
    color: "62fd7c3edcb43f5ac4264f1c",
    caseModel: "prod_MHzcwH8NZP2AAP",
  });
  console.log(correctProduct);
  await UserDesign.create({
    user: "62fc53aa9b3c618a69084f80",
    color: "62fd7c9edcb43f5ac4264f1d",
    caseModel: "prod_MHzcwfhfhfgh",
  });
}

//populateCase()
createUserDesign();
