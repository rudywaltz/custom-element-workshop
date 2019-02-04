
const path = require('path');
const getConfig = () => {
  return {
    suites: ['./**/*.spec.html'],
    root: path.join(__dirname, '.'),
    plugins: {
      local: {
        browsers: ['chrome', 'firefox'],
        browserOptions: {
          chrome: [
            'headless'
          ],
          firefox: [
            '-headless'
          ]
        }
      }
    },
    clientOptions: {
      environmentScripts: [
        'stacky/browser.js',
        'async/lib/async.js',
        'lodash/lodash.js',
        'mocha/mocha.js',
        'chai/chai.js',
        '@polymer/sinonjs/sinon.js',
        'sinon-chai/lib/sinon-chai.js',
        'accessibility-developer-tools/dist/js/axs_testing.js'
      ]
    }
  };
};

module.exports = getConfig();
