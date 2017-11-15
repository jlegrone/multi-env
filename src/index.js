import { sync as pkgUp } from 'pkg-up';
import dotEnv from 'dotenv';
import path from 'path';

function multiEnv() {
  const pkgPath = pkgUp();
  const dir = path.dirname(pkgPath);
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const { config = {} } = require(pkgPath);
  const multiEnvConfig = config['multi-env'] || { files: [] };

  multiEnvConfig.files.forEach((file) => {
    dotEnv.config({ path: path.join(dir, file) });
  });
}

module.exports = multiEnv;
