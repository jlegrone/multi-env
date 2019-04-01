import { sync as pkgUp } from 'pkg-up';
import dotEnv from 'dotenv';
import dotEnvExpand from 'dotenv-expand';
import path from 'path';

function multiEnv(files = []) {
  const pkgPath = pkgUp();
  const dir = path.dirname(pkgPath);
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const { config = {} } = require(pkgPath);
  const multiEnvConfig = config['multi-env'] || { files: [] };

  const fileArray = files.concat(multiEnvConfig.files);

  fileArray.forEach((file) => {
    dotEnvExpand(dotEnv.config({ path: path.join(dir, file) }));
  });
}

module.exports = multiEnv;
