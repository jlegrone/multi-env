import { sync as pkgUp } from 'pkg-up';
import dotEnv from 'dotenv';
import path from 'path';

function getConfig(pkgPath) {
  if (typeof pkgPath === 'string') {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const { config = {} } = require(pkgPath);
    return config['multi-env'];
  }
  return undefined;
}

function multiEnv() {
  let pkgPath = pkgUp();
  let config = getConfig(pkgPath);

  if (!config) {
    pkgPath = pkgUp(path.join(pkgPath, '../..'));
    config = getConfig(pkgPath) || { files: [] };
  }

  config.files.forEach((file) => {
    dotEnv.config({ path: path.join(path.dirname(pkgPath), file) });
  });
}

module.exports = multiEnv;
