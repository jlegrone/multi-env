# multi-env

[![npm version](https://badge.fury.io/js/multi-env.svg)](https://badge.fury.io/js/multi-env)
[![Build Status](https://travis-ci.org/jlegrone/multi-env.svg?branch=master)](https://travis-ci.org/jlegrone/multi-env)
[![codecov](https://codecov.io/gh/jlegrone/multi-env/branch/master/graph/badge.svg)](https://codecov.io/gh/jlegrone/multi-env) [![Greenkeeper badge](https://badges.greenkeeper.io/jlegrone/multi-env.svg)](https://greenkeeper.io/)

Multi-env merges and loads environment variables from multiple `.env` files for nodejs projects.

Multi-env is built on [dotenv](https://github.com/motdotla/dotenv) and follows the same [rules](https://github.com/motdotla/dotenv#rules).

## Installation

```bash
npm install --save multi-env
```

## Configuration

Add configuration for multi-env to your `package.json`:

```json
{
  "name": "my-package",
  "version": "0.1.0",
  "scripts": {
    "start": "node ./src/index.js"
  },
  "config": {
    "multi-env": {
      "files": [
        "local.env",
        "shared.env"
      ]
    }
  }
}
```

`files` should be an array of `.env` file paths (relative to `package.json`).

When the same variable is assigned in multiple files, the earliest file listed in your configuration will take precedence. Environment variables that have already been set will never be modified.

## Usage

### In Application Code

```javascript
// src/index.js
require('multi-env')();

console.info(process.env.MY_VARIABLE_FROM_DOTENV);

...
```

### Preload

You can use the node --require (-r) [command line option](https://nodejs.org/api/cli.html#cli_r_require_module) to preload multi-env. By doing this, you do not need to require and execute multi-env in your application code.

```json
{
  "name": "my-package",
  "version": "0.1.0",
  "scripts": {
    "start": "node -r multi-env/config ./src/index.js"
  },
  "config": {
    "multi-env": {
      "files": [
        "local.env",
        "shared.env"
      ]
    }
  }
}
```

```javascript
// src/index.js
console.info(process.env.MY_VARIABLE_FROM_DOTENV);

...
```
