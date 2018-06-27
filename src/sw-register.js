/* eslint-disable */

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').then((reg) => {
    reg.onupdatefound = function () {
      var installingWorker = reg.installing;
      installingWorker.onstatechange = function () {
        switch (installingWorker.state) {
          case 'installed':
            if (navigator.serviceWorker.controller) {
              // location='/'
            }
            break;
        }
      };
    };
  }).catch(function (e) {
    console.error('Error during service worker registration:', e);
  });
}
