require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2020-08-27",
  appInfo: {
    // For sample support and debugging, not required for production:
    name: "ga-case-count",
    version: "0.0.1",
    url: "https://github.com/stripe-samples/checkout-one-time-payments",
  },
});

async function populate() {
  await stripe.products.create({
    name: "Slim case for iPhone X",
    
    metadata: {
      phoneManufacturer: "Apple",
      phoneModel: "iPhone X",
      type: "Slim",
    },
  })
  await stripe.products.create({
    name: "Rugged case for iPhone X",
    
    metadata: {
      phoneManufacturer: "Apple",
      phoneModel: "iPhone X",
      type: "Rugged",
    },
  });
  await stripe.products.create({
    name: "Slim case for iPhone XR",
    
    metadata: {
      phoneManufacturer: "Apple",
      phoneModel: "iPhone XR",
      type: "Slim",
    },
  });
  await stripe.products.create({
    name: "Rugged case for iPhone XR",
    
    metadata: {
      phoneManufacturer: "Apple",
      phoneModel: "iPhone XR",
      type: "Rugged",
    },
  });
  await stripe.products.create({
    name: "Slim case for Pixel",
    
    metadata: {
      phoneManufacturer: "Google",
      phoneModel: "Pixel",
      type: "Slim",
    },
  });
  await stripe.products.create({
    name: "Rugged case for Pixel",
    
    metadata: {
      phoneManufacturer: "Google",
      phoneModel: "Pixel",
      type: "Rugged",
    }
  });
  await stripe.products.create({
    name: "Slim case for Pixel XL",
    
    metadata: {
      phoneManufacturer: "Google",
      phoneModel: "Pixel XL",
      type: "Slim",
    }
  });
  await stripe.products.create({
    name: "Rugged case for Pixel XL",
    
    metadata: {
      phoneManufacturer: "Google",
      phoneModel: "Pixel XL",
      type: "Rugged",
    }
  });
  await stripe.products.create({
    name: "Slim case for Galaxy Note 5",
    
    metadata: {
      phoneManufacturer: "Samsung",
      phoneModel: "Galaxy Note 5",
      type: "Slim",
    }
  });
  await stripe.products.create({
    name: "Rugged case for Galaxy Note 5",
    
    metadata: {
      phoneManufacturer: "Samsung",
      phoneModel: "Galaxy Note 5",
      type: "Rugged",
    }
  });
}

populate();
