/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "01-hello-vue.js/index.html",
    "revision": "c401a6f594923fb48622c2d4394edbbb"
  },
  {
    "url": "02-step-by-step/index.html",
    "revision": "5a489ea0bdcf5e415217fd1c7fbe88a4"
  },
  {
    "url": "03-state-management/index.html",
    "revision": "a6fde55e25d33640662bc18b4080554e"
  },
  {
    "url": "04-future-of-vue.js/index.html",
    "revision": "9730726c4e6d6ae7852bc1a2c06fd018"
  },
  {
    "url": "05-whats-up-ssr/index.html",
    "revision": "c143832e3431db7eaf3566561cbb50ca"
  },
  {
    "url": "06-begin-again/index.html",
    "revision": "d4ec905089eb802030d066770e554dbe"
  },
  {
    "url": "07-building-mobile-apps/index.html",
    "revision": "18c337798c1f10842cdd84fa6454a0f0"
  },
  {
    "url": "08-state-of-the-vuenion/index.html",
    "revision": "1d1b903dcd1f132aa47c8bcbd5b7aeb6"
  },
  {
    "url": "09-in-production/index.html",
    "revision": "693a2b47542b5252e03e1889202c3eba"
  },
  {
    "url": "404.html",
    "revision": "5bba1a15469ca7cc399ce0202206d55d"
  },
  {
    "url": "assets/css/0.styles.717bb003.css",
    "revision": "ffb938279565cbc7212f970b607d6b5c"
  },
  {
    "url": "assets/img/logo.533fcdd7.png",
    "revision": "533fcdd78f51a6a4f380a5974c23d26a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a2f2cd67.js",
    "revision": "349eb920391e710c36d18129941f3842"
  },
  {
    "url": "assets/js/11.5bdef2c4.js",
    "revision": "854410767eca8af2129be374abfcbe5e"
  },
  {
    "url": "assets/js/12.aaba3f9b.js",
    "revision": "b7182578dfa2eb4ea962f769f79c1192"
  },
  {
    "url": "assets/js/13.d6b2f883.js",
    "revision": "4fa2584d54f3899e2e9013ce6aa5a1e3"
  },
  {
    "url": "assets/js/2.7e217c57.js",
    "revision": "e8b6aaea649f7cac4b1b8177b0906cd0"
  },
  {
    "url": "assets/js/3.50f85efd.js",
    "revision": "17a174c83724b92eeeb2f59e5538073b"
  },
  {
    "url": "assets/js/4.1b9e39bd.js",
    "revision": "ff039cf768e9e5734c7794419b4b1497"
  },
  {
    "url": "assets/js/5.5a6d0fc2.js",
    "revision": "b910a8aa6bbc1cc188a3808c5546f7e9"
  },
  {
    "url": "assets/js/6.0b83c19b.js",
    "revision": "70ad773e041527a5f8f185f0f17cf2ac"
  },
  {
    "url": "assets/js/7.a2610984.js",
    "revision": "88f761ac8db850bd63a3c3f0dd8e8ce4"
  },
  {
    "url": "assets/js/8.272dfee8.js",
    "revision": "8f6a512f9512a08ddc761a79f1d6a39e"
  },
  {
    "url": "assets/js/9.e6ec3477.js",
    "revision": "7652dd95b9a64c36fc722f76b9c68250"
  },
  {
    "url": "assets/js/app.2b086f95.js",
    "revision": "c4762b6b538c5dd2fe0e427ec822d9db"
  },
  {
    "url": "index.html",
    "revision": "73286cff15d41ca784b2ba2d9f54e5d4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
