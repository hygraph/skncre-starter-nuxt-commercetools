import { H3Event } from 'h3';

const API_URL = 'https://api.europe-west1.gcp.commercetools.com/hygraph-test-project'
const TOKEN = 'rAcSRzM0ryJI_j2iQsHACXjprwG5hKkJ'

async function getCart(cartId: string) {
  const result = await $fetch(`${API_URL}/carts/${cartId}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  }).catch((err) => console.log(err.data));

  return result
}

export default eventHandler(async (event: H3Event) => {
  const { cart_id } = getQuery(event);
  return await getCart(cart_id as string)
})