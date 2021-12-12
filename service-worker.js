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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "ae4f71007f3d50568e9b25bf916946ea"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.8824f6df.css",
    "revision": "e94ec1a50dfb576425e2c8fd1670a243"
  },
  {
    "url": "assets/img/delete.13a925c2.png",
    "revision": "13a925c24f51798d6e5fa6f01cfefe06"
  },
  {
    "url": "assets/img/er-diagram.438c2b9a.png",
    "revision": "438c2b9a0165f31daa658f34ebd56202"
  },
  {
    "url": "assets/img/get.88c88ce4.png",
    "revision": "88c88ce49a390caffb3581e194bc0745"
  },
  {
    "url": "assets/img/post.b7a58ef3.png",
    "revision": "b7a58ef374e32b702aa4ab66c6230321"
  },
  {
    "url": "assets/img/put.a1ba754b.png",
    "revision": "a1ba754bb66f7da75393e9eaf4881e8a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2335d171.js",
    "revision": "fea7c8caf3c78ceee44a393912146324"
  },
  {
    "url": "assets/js/11.870e4f71.js",
    "revision": "e610cb338373135d8418417e62e8d0bd"
  },
  {
    "url": "assets/js/12.95061cd2.js",
    "revision": "f5303aac86a7f3b24ee097c3f9692a35"
  },
  {
    "url": "assets/js/13.a8c0a56d.js",
    "revision": "4babdbba7fcfe189d7967ed12737d763"
  },
  {
    "url": "assets/js/14.81195832.js",
    "revision": "dd28d3d2bacbda81197f8f66313fc11e"
  },
  {
    "url": "assets/js/15.41265232.js",
    "revision": "89c80589a5666de3243c233a528b899a"
  },
  {
    "url": "assets/js/16.c17b5b62.js",
    "revision": "52623446696be17286c7fc35dd6510c2"
  },
  {
    "url": "assets/js/17.8a2af423.js",
    "revision": "940da94ce39fc280882619daef528d72"
  },
  {
    "url": "assets/js/18.ac8962e1.js",
    "revision": "1fcdbc15c35def4bf1bbe57b6184765f"
  },
  {
    "url": "assets/js/19.2062e06c.js",
    "revision": "5e42a1a08e7ae8069a42d2e5edbaff7c"
  },
  {
    "url": "assets/js/2.343fa302.js",
    "revision": "cf8c90890081115d874527fe3f33e79b"
  },
  {
    "url": "assets/js/20.10317bf9.js",
    "revision": "aea1934148e5198e5d06c90f2f12d03f"
  },
  {
    "url": "assets/js/21.f0e27a81.js",
    "revision": "c5d2d30d14508c9dc3021ad6f66b7510"
  },
  {
    "url": "assets/js/22.2063ad01.js",
    "revision": "10ee901625cb621aaef4e44ec8a0a84c"
  },
  {
    "url": "assets/js/23.071459db.js",
    "revision": "202ac362645a200b6d592398c653994c"
  },
  {
    "url": "assets/js/24.a02c226c.js",
    "revision": "c451c409844b93e1adc8bfaaf6eea87d"
  },
  {
    "url": "assets/js/25.fbd678e4.js",
    "revision": "1203436d08d6b3ef2c6a6e7ebe8576d3"
  },
  {
    "url": "assets/js/27.4cd5641e.js",
    "revision": "c83f8f88bcaa0222f70d890052e7575d"
  },
  {
    "url": "assets/js/3.d870b14a.js",
    "revision": "287e8ea30d82f8d7d92d403b5da7f592"
  },
  {
    "url": "assets/js/4.c6e37657.js",
    "revision": "824d909017a07cd7e4a6b27b53337d7d"
  },
  {
    "url": "assets/js/5.c3cccdd9.js",
    "revision": "022e263341f68b83ad662989ddc5a2f0"
  },
  {
    "url": "assets/js/6.de0ada86.js",
    "revision": "2dca4846e16fbd348fede0300e436730"
  },
  {
    "url": "assets/js/7.a8c3402a.js",
    "revision": "7914f7027f9d1af3acb781e302d0dcbb"
  },
  {
    "url": "assets/js/8.72d65088.js",
    "revision": "d991687d51801fdc611d30c04a005dee"
  },
  {
    "url": "assets/js/9.ee56beef.js",
    "revision": "7b9d6e26bf8dac1907fd7415bd3cf833"
  },
  {
    "url": "assets/js/app.157319f8.js",
    "revision": "3889280d12b73a93518d0d8b389c81c7"
  },
  {
    "url": "conclusion/index.html",
    "revision": "7267a6076857864f880c2503e8fc371e"
  },
  {
    "url": "design/index.html",
    "revision": "77c81b0f471bea2bfb5a9411635bad84"
  },
  {
    "url": "index.html",
    "revision": "93de0952737fa40d6b575aaf99f0ed3b"
  },
  {
    "url": "intro/index.html",
    "revision": "124123192bac42f680935aa41f0fd64a"
  },
  {
    "url": "intro/test.html",
    "revision": "0c90c27839919b7898c41d518eff9f24"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "a568a701d8b917fda2a051525b9f1410"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "4af2cced68e2a18bfda1fead5f5df930"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "b258b0f57d7c104bd2b86a0bcb7bcc78"
  },
  {
    "url": "software/index.html",
    "revision": "2ecbd19f7d9c4fea3ebefe89d6856695"
  },
  {
    "url": "test/index.html",
    "revision": "e03396e3b05b23e0efb6983b11108252"
  },
  {
    "url": "use cases/index.html",
    "revision": "64a2ea278ffd626f9704bc573389d82e"
  }
].concat(self.__precacheManifest || []);
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
