function addToCart(cart, lineItem) {
    function isItemInCart(e) {
      if (
        e.productId === this.productId &&
        e.color._id === this.color._id &&
        e.patternName === this.patternName
      ) {
        return true;
      }
      return false;
    }

    let { lineItems, subtotal } = { ...cart };
    const itemIndex = cart.lineItems.findIndex(isItemInCart, lineItem);
    if (itemIndex === -1) {
      lineItem = { ...lineItem, quantity: 1 };
      lineItems.push(lineItem);
      subtotal += lineItem.displayPrice;
    } else {
      lineItems[itemIndex].quantity++;
      subtotal += lineItem.displayPrice;
    }
    return {
      lineItems: lineItems,
      subtotal: Math.round((subtotal + Number.EPSILON) * 100) / 100,
    };
  }

  function removeFromCart(cart, itemIndex) {
    let { lineItems, subtotal } = { ...cart };
    if (lineItems[itemIndex].quantity <= 1) {
      subtotal -= lineItems[itemIndex].displayPrice;
      lineItems.splice(itemIndex, 1);
    } else {
      subtotal -= lineItems[itemIndex].displayPrice;
      lineItems[itemIndex].quantity--;
    }
    return {
      lineItems: lineItems,
      subtotal: Math.round((subtotal + Number.EPSILON) * 100) / 100,
    };
  }

export {addToCart, removeFromCart}