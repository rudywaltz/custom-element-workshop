require('dotenv').config();
const tty = require('tty');
const BrowserStackTunnel = require('browserstacktunnel-wrapper');
const wct = require('web-component-tester');
const stdout = new tty.WriteStream(0);

const tunnel = new BrowserStackTunnel({
  key: process.env.BROWSERSTACK_KEY,
  hosts: [{
    name: 'localhost',
    port: 8081,
    sslFlag: 0
  }],
  v: true,
  force: true,
  forcelocal: false,
  onlyAutomate: false
});

const stopTunnel = () => new Promise((resolve, reject) => {
  tunnel.stop(error => {
    if (error) {
      reject(error);
    } else {
      resolve();
    }
  });
});

const startTunnel = () => new Promise((resolve, reject) => {
  tunnel.start(error => {
    if (error) {
      reject(error);
    } else {
      resolve();
    }
  });
});

const runTests = () => new Promise((resolve, reject) => {
  wct.cli.run(process.env, ['--npm'], stdout).then(resolve, reject);
});

const onError = error => {
  if (error) {
    console.log(error);
    process.exit(1);
  } else {
    process.exit(0);
  }
};

startTunnel()
  .then(runTests)
  .then(stopTunnel)
  .catch(onError);
