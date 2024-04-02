import { H3Event } from 'h3';

const API_URL = 'https://api.europe-west1.gcp.commercetools.com/hygraph-test-project'
const TOKEN = 'rAcSRzM0ryJI_j2iQsHACXjprwG5hKkJ'

async function createCart() {
  const result = await $fetch(`${API_URL}/carts`, {
    method: 'POST',
    body: { currency: "EUR" },
    headers: { Authorization: `Bearer ${TOKEN}` }
  })

  return result
}

export default eventHandler(async (event: H3Event) => {
  const cart = await createCart()
  return cart
})