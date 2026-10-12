# Sphinx Frontend

The web frontend for [Sphinx](https://github.com/SphinxDB), a team project exploring a proof-of-query database: database queries run off chain and their proofs are verified on Starknet. This repo holds only the React UI, where a user connects a Starknet wallet, sends database operations and asks for a query to be proved.

> **Status:** archived. Built in 2023 with a team at StarkNet Istanbul HackerHouse. Kept for reference, not maintained.

## What it does

- Connects a Starknet wallet (Argent or Braavos) through starknet-react, shows the shortened address in the header, and disconnects on click.
- Sends Insert, Update and Delete requests (`POST /insert`, `PUT /update`, `DELETE /delete`) to the Sphinx API and prints the JSON response.
- Sends a free-form query to `GET /query?query=...` with the "Prove Query" button and shows the result.
- Shows an example record shape (current state, query, after state) for the database model.

The API base URL in `src/App.js` is a placeholder (`https://api.example.com`), so the buttons need it pointed at a running Sphinx backend. The wallet setup in `src/provider.js` targets Starknet Goerli, a testnet that has since been retired, so the chain config needs updating before a wallet can connect today.

## Tech stack

- React 18 (Create React App)
- Tailwind CSS
- starknet-react v2 (`@starknet-react/core`, `@starknet-react/chains`) with starknet.js
- framer-motion

## Running it locally

```bash
npm install
npm start
```

Then open http://localhost:3000.

## License

MIT, see [LICENSE](LICENSE).
