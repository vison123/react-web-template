/* eslint-disable */
// Let's have it locally. Run "workbox copyLibraries dist"
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js')
// workbox.setConfig({modulePathPrefix: "static/js/workbox"});
if (workbox) {
  console.log(`Yay! workbox is loaded `);
} else {
  console.log(`Boo! workbox didn't load `);
}

// Verbose logging even for the production
workbox.setConfig({ debug: true })
workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug)

// Modify SW update cycle
workbox.skipWaiting()
workbox.clientsClaim()

// PRECACHING

// We inject manifest here using "workbox-build" in workbox-build-inject.js
workbox.precaching.precacheAndRoute([])
