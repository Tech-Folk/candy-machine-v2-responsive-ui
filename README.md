```
git clone 
```

#### 2. Define your environment variables (.env file)

Rename the `.env.example` file at the root directory to `.env` and update the following variables in the `.env` file:

```
REACT_APP_CANDY_MACHINE_ID=__PLACEHOLDER__
```
set __PLACEHOLDER__ with the candy machine pubkey you get once you upload & create your candy machine in Metaplex project. You can find back the value from the `.cache/temp.json` file of your Metaplex project. This file is created when you run the `ts-node candy-machine-v2-cli.ts upload ...` command.

```
REACT_APP_SOLANA_NETWORK=devnet
```

This identifies the Solana network you want to connect to. Options are `devnet`, `testnet`, and `mainnet`.

```
REACT_APP_SOLANA_RPC_HOST=https://api.devnet.solana.com
```

This identifies the RPC server your web app will access the Solana network through.

#### 3. Build the project and test. Go to the root project directory and type the commands :

To install dependencies :

```
yarn install
```

To test the app locally in the development mode (localhost:3000) :

```
yarn start
```

To build the production package (generated in build folder of the project) :

```
yarn build
```

