import { H3Event } from 'h3';

const API_URL = 'https://api.europe-west1.gcp.commercetools.com/hygraph-test-project'
const TOKEN = 'rAcSRzM0ryJI_j2iQsHACXjprwG5hKkJ'

async function addLineItem(cartId: string, productId: string, cartVersion: number) {
  const result = await $fetch(`${API_URL}/carts/${cartId}`, {
    method: 'POST',
    body: {
      "version": cartVersion,
      "actions": [{
        "action": "addLineItem",
        "productId": productId,
        "variantId": 1,
        "quantity": 1,
      }]
    },
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  }).catch((err) => console.log(err.data));

  return result
}

async function getCart(cartId: string) {
  const result = await $fetch(`${API_URL}/carts/${cartId}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  }).catch((err) => console.log(err.data));

  return result
}

export default eventHandler(async (event: H3Event) => {
  const { product_id, cart_id } = getQuery(event);
  const currentCart = await getCart(cart_id as string)
  return await addLineItem(cart_id as string, product_id as string, currentCart.version)
})