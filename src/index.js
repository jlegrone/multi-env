import pkgDir from 'pkg-dir';
import dotEnv from 'dotenv';

function multiEnv() {
  return pkgDir().then((dir) => {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const { config = {} } = require(`${dir}/package.json`);
    const multiEnvConfig = config['multi-env'] || { files: [] };

    multiEnvConfig.files.forEach((file) => {
      dotEnv.config({ path: `${dir}/${file}` });
    });
  });
}

module.exports = multiEnv;
