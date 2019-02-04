require('dotenv').config();
const browsers = [
  {
    'browser': 'Chrome',
    'browserName': 'Chrome, OS X Sierra, latest',
    'os': 'OS X',
    'os_version': 'Sierra'
  },
  {
    'browser': 'Safari',
    'browserName': 'Safari, OS X Sierra, latest',
    'os': 'OS X',
    'os_version': 'Sierra'
  },
  {
    'browser': 'Edge',
    'browserName': 'Edge, Windows 10, latest',
    'os': 'Windows',
    'os_version': '10'
  },
  {
    'browser': 'Firefox',
    'browserName': 'Firefox, Windows 10, latest',
    'os': 'Windows',
    'os_version': '10'
  }
];

const path = require('path');
const getConfig = () => {
  const user = process.env.BROWSERSTACK_USER;
  const key = process.env.BROWSERSTACK_KEY;

  if (!user || !key) {
    throw new Error('Did you forget to set BROWSERSTACK_USER and/or BROWSERSTACK_KEY?');
  }

  const url = 'http://' + user + ':' + key + '@hub.browserstack.com/wd/hub';

  return {
    suites: ['./**/*.spec.html'],
    root: path.join(__dirname, '.'),
    simpleOutput: false,
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
    },
    activeBrowsers: browsers.map(browser => {
      browser.project = 'WC workshop';
      browser.timezone = 'Europe/Budapest';
      browser['browserstack.local'] = 'true';
      browser['browserstack.video'] = 'false';
      browser.url = url;
      return browser;
    })
  };
};

module.exports = getConfig();
