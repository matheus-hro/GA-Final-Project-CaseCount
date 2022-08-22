require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2020-08-27",
  appInfo: {
    // For sample support and debugging, not required for production:
    name: "ga-case-count",
    version: "0.0.1",
  },
});

async function index(req, res) {
  try {
    const products = await stripe.products.list({ active: true });
    const prices = await stripe.prices.list({ active: true });
    let simplifiedProducts = products.data.map((e) => ({
      id: e.id,
      name: e.name,
      phoneManufacturer: e.metadata.phoneManufacturer,
      phoneModel: e.metadata.phoneModel,
      type: e.metadata.type,
      imrUrl: e.images[0],
      priceId: prices.data.find((p) => p.product === e.id).id,
      basePrice: prices.data.find((p) => p.product === e.id).unit_amount / 100,
    }));
    res.status(200).json(simplifiedProducts);
  } catch (err) {
    console.log("err caught in stripe index: ", err);
    res.status(400).json([]);
  }
}

async function initiateCheckout(req, res) {
  const domainURL = process.env.DOMAIN;
  console.log(req.query)
  const { price, quantity } = req.query;
  console.log(price, quantity)

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price: "price_".concat(price),
        quantity: quantity,
      },
    ],
    // ?session_id={CHECKOUT_SESSION_ID} means the redirect will have the session ID set as a query param
    success_url: `${domainURL}/success.html/{CHECKOUT_SESSION_ID}`,
    cancel_url: `${domainURL}/canceled.html`,
    automatic_tax: {enabled: true},
  });

  return res.redirect(303, session.url);
}

async function checkoutStatus(req, res) {}

module.exports = {
  index,
  checkoutStatus,
  initiateCheckout,
};
