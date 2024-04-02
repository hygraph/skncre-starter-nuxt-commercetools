# SKNCRE a Hygraph cosmetics brand demo

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

## Add GraphQL and Hygraph connections

In `.env` add and make sure to add content viewing permissions in Hygraph API settings

```
GQL_HOST=https://<HYGRAPH_CDN_LOCATION>.cdn.hygraph.com/content/<ID>/master
```

See `.env.example` for the setup requirements.

Add `.gql` query files in the `./queries` folder and use them like this:

```js
const { data } = await useAsyncGql("<QUERY_NAME>", { foo: "bar" });
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more
