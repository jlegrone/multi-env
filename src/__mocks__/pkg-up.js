const path = require('path');

function pkgUp() {
  return path.join(process.cwd(), 'src/__mocks__/package.json');
}

module.exports = {
  sync: pkgUp,
};
