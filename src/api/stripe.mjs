import { loadStripe } from "@stripe/stripe-js";

async function checkout(lineItems) {
    try {
      const stripe = await loadStripe(
        "pk_test_51LZHdxDmNZgLC2UAJNMlxqj13FmaIAQ7z1BgFGUbK3lLvJWucHmzJpHhfYoVKgHf6tdki5c2YX4z1GZ5rRiUDlmr00kHu59c0G"
      );
      let checkoutResponse = await fetch("stripe/checkout", {
        method: "POST",
        referrerPolicy: "origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lineItems),
      });

      const session = await checkoutResponse.json();
      return stripe.redirectToCheckout({ sessionId: session.id });
    } catch (err) {
      console.log("error caught in checkout function: ", err);
    }
  }

  export {checkout}