# multi-env
Merges and loads environment variables from multiple `.env` files for nodejs projects.

## Installation

```bash
npm install --save-dev multi-env
```

## Configuration

Add configuration to your `package.json`:

```json
{
  "name": "my-package",
  "version": "0.1.0",
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

`files` should be an array of relative paths to your `.env` files.

When the same variable is assigned in multiple files, the earliest file in the array will take precedence.

## Usage

In `package.json` scripts:

```json
{
  "name": "my-package",
  "version": "0.1.0",
  "config": {
    "multi-env": {
      "files": [
        "local.env",
        "shared.env"
      ]
    }
  },
  "scripts": {
    "start": "multi-env && node ./src"
  }
}
```

In node scripts:

```javascript
require('multi-env')();

console.info(process.env.MY_VARIABLE);
```