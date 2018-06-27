const {injectManifest} = require('workbox-build')

// We reuse the configuration from Workbox CLI
var workboxConfig = require('./workbox-config.js')

injectManifest(workboxConfig)
  .then(({count, size}) => {
    console.log(`Generated ${workboxConfig.swDest}, which will precache ${count} files, totaling ${size} bytes.`)
  })
  .catch(err => {
    console.error(`Unable to inject the precache manifest into sw.js`);
    throw err;
  });
