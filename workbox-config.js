module.exports = {
  globDirectory: 'build/',
  globPatterns: [
    '**/*.{html,png,ico,js,css,eot,svg,ttf,woff}'
  ],
  globIgnores: [
    'sw-register.js',
    '**/*.map'
  ],
  swDest: 'build/service-worker.js',
  swSrc: 'src/sw.js',
  // dontCacheBustUrlsMatching: /\.\w{20}\./
}
