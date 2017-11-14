const path = require('path');

function pkgDir() {
  return Promise.resolve(path.join(process.cwd(), 'src/__mocks__'));
}

module.exports = pkgDir;
