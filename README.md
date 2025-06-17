# Sim IDX Sample Project

**Sim IDX** is a framework that helps you build and deploy applications that index blockchain data in minutes. Define
listeners that react to specific onchain events, extract relevant data, and automatically make this data queryable via
an API.

This sample project indexes **Uniswap V3 Factory pool creation events** and serves as your starting point for building
with Sim IDX.

## What You'll Edit

The main files you'll work with are:

- **`abis/`** - Add JSON ABI files for contracts you want to index
- **`listeners/src/Listener.sol`** - Define your indexing logic, triggers, events, and handlers
- **`apis/src/index.ts`** - Define APIs for your indexed data

## CLI Commands

For a complete list of available CLI commands and options, run:

```bash
sim help
```

adsf

## App Structure

```
.
├── sim.toml                     # App configuration
├── apis/                        # Your custom API code
├── abis/                        # Contract ABI files (JSON)
│   └── UniswapV3Factory.json    # Example: Uniswap V3 Factory ABI
├── listeners/                   # Foundry project for listener contracts
│   ├── src/
│   │   └── Listener.sol         # Main listener contract (Edit this)
│   └── test/
│       └── Listener.t.sol       # Unit tests for your listener
```

## Deployment

Before deploying your app, you need to authenticate with the Sim IDX platform:

1. **Authenticate**: Run `sim authenticate` and provide your API key. You can get your API key from the
   [Sim dashboard](https://sim.dune.com/).

2. **Deploy**: Once authenticated, deploy your app with `sim deploy`. This will deploy your listener, database, and API
   with a single command.

After successful deployment, you'll receive your API URL and database connection string.

## Next Steps

Ready to start building? Check out the comprehensive guides:

- **[CLI Reference](https://sim-dune-docs-idx.mintlify.app/idx/cli)** - All available commands
- **[Adding ABIs](https://sim-dune-docs-idx.mintlify.app/idx/idx/cli#sim-abi-add-<file-path>)** - How to add contract
  ABIs
- **[Writing Listeners](https://sim-dune-docs-idx.mintlify.app/idx/listener)** - Define your indexing logic
- **[Building APIs](https://sim-dune-docs-idx.mintlify.app/idx/apis)** - Serve your indexed data
- **[Database Inspection](https://sim-dune-docs-idx.mintlify.app/idx/db)** - Query your data directly

asdlfaj

asdfasd asdfa
