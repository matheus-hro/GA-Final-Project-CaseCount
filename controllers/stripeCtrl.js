require("dotenv").config();
const domainURL = process.env.DOMAIN;

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2020-08-27",
  appInfo: {
    name: "ga-case-count",
    version: "0.0.1",
  },
});

async function retrieveProduct(prodId) {
  try {
    const product = await stripe.products.retrieve(prodId);
    return product;
  } catch (err) {
    console.log("error in retrieve product function: ", err);
    return false;
  }
}

async function index(req, res) {
  try {
    const products = await stripe.products.list({ active: true });
    const prices = await stripe.prices.list({ active: true });
    let simplifiedProducts = products.data.map((e) => ({
      productId: e.id,
      name: e.name,
      imgUrl: e.images[0],
      price: prices.data.find((p) => p.product === e.id).id,
      displayPrice:
        prices.data.find((p) => p.product === e.id).unit_amount / 100,
    }));
    res.status(200).json(simplifiedProducts);
  } catch (err) {
    console.log("err caught in stripe index: ", err);
    res.status(400).json([]);
  }
}

async function initiateCheckout(req, res) {
  try {
    const stripeLineItems = req.body.map((e) => {
      const { price, quantity } = e;
      return { price, quantity };
    });
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: stripeLineItems,
      success_url: `${domainURL}/success.html/{CHECKOUT_SESSION_ID}`,
      cancel_url: `${domainURL}/`,
      automatic_tax: { enabled: true },
    });
    return res.status(200).json(session);
  } catch (err) {
    console.log("err in checkout: ", err)
    return res.status(400).json("Sorry, try again!");
  }
}

module.exports = {
  index,
  retrieveProduct,
  initiateCheckout,
};
