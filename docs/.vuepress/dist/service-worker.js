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
    "url": "404.html",
    "revision": "768e4766fea715fc43e15f1edb4772e6"
  },
  {
    "url": "api/cli.html",
    "revision": "6a1ae9a1eaffc10eda06222edf5a94b3"
  },
  {
    "url": "api/node.html",
    "revision": "7ef6c7e09931d62d20e9529aeaf21135"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.9fe82091.css",
    "revision": "39b912a0bf494619e200e1b4dbfff2b2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.99c41dc8.js",
    "revision": "48055e184781c7e59486a297657fcb02"
  },
  {
    "url": "assets/js/100.b4e520e1.js",
    "revision": "175bc82be14e7e6f8eb694f95795a361"
  },
  {
    "url": "assets/js/101.6c32120b.js",
    "revision": "1d0166b87f12e007968f05e0b0129ff9"
  },
  {
    "url": "assets/js/102.b5a231bb.js",
    "revision": "495b18860af3d641262f0f262192ff0b"
  },
  {
    "url": "assets/js/11.291f9131.js",
    "revision": "30b3d14ed41569d9c9a5a8a2b603dbbf"
  },
  {
    "url": "assets/js/12.f8fc213a.js",
    "revision": "9ec4e1595e589163b86d31ed70ebb9c9"
  },
  {
    "url": "assets/js/13.c3963782.js",
    "revision": "749cff8e98746bfac33204f9408f0e1c"
  },
  {
    "url": "assets/js/14.ae9f21ef.js",
    "revision": "daef5a1fbf58d0975f17f88e8c99ef00"
  },
  {
    "url": "assets/js/15.88c939ec.js",
    "revision": "623c76826b088065adc4aa18ee745a10"
  },
  {
    "url": "assets/js/16.0da15920.js",
    "revision": "9079f100f47b275367e23db955435b58"
  },
  {
    "url": "assets/js/17.95b35ec4.js",
    "revision": "d713bd6f1d0d3d052f688cd64e29f2ec"
  },
  {
    "url": "assets/js/18.54196093.js",
    "revision": "2ab9fb1bbb4fac9718aa36c7d47a33b9"
  },
  {
    "url": "assets/js/19.b56bdbe9.js",
    "revision": "aec2e6519341541606e81da1dd687307"
  },
  {
    "url": "assets/js/20.c9f837ef.js",
    "revision": "c9dd9868c480f56c980c4dac02ae9b06"
  },
  {
    "url": "assets/js/21.6a595d41.js",
    "revision": "5c057fb2943fa35ac8381001898620f2"
  },
  {
    "url": "assets/js/22.374551d7.js",
    "revision": "a50b610fc49fbe21b29d560d9de0931d"
  },
  {
    "url": "assets/js/23.d996bdb1.js",
    "revision": "a84342c5d0d08d23d545af2f803b738a"
  },
  {
    "url": "assets/js/24.4b4a2ad3.js",
    "revision": "fb40a4a2869e339066e9826cc3526ea0"
  },
  {
    "url": "assets/js/25.84e284d9.js",
    "revision": "d3a1c6789c6047c48ead298a0ec0b491"
  },
  {
    "url": "assets/js/26.6d237cd5.js",
    "revision": "7f6b2b38d3c8c3598d3aaf2e73e242b2"
  },
  {
    "url": "assets/js/27.38e61737.js",
    "revision": "af1f1ce599acde567efec93b36e848af"
  },
  {
    "url": "assets/js/28.8da1b2b1.js",
    "revision": "51514f452cd32ab7184eb8599eca8eb6"
  },
  {
    "url": "assets/js/29.96e4540c.js",
    "revision": "436bacc4532b9926c69e329d3a8a07a8"
  },
  {
    "url": "assets/js/30.6d1c2591.js",
    "revision": "e9ba386b070515cf5a0a6636aeba1a79"
  },
  {
    "url": "assets/js/31.b2bda897.js",
    "revision": "1cb62a733a3e3c44ad1b9a236af0838b"
  },
  {
    "url": "assets/js/32.0a292edb.js",
    "revision": "9f21c64b20c0325e07f1fd53f2d99f2b"
  },
  {
    "url": "assets/js/33.4bfda821.js",
    "revision": "f96f494b673fe034cae5e6d2ed36d6aa"
  },
  {
    "url": "assets/js/34.5566be49.js",
    "revision": "96080509ba546bfc1ce0b00d99aba7e7"
  },
  {
    "url": "assets/js/35.81f0c00e.js",
    "revision": "5c54dc8aa85292af7a3d8c1062ad5c83"
  },
  {
    "url": "assets/js/36.8eb50e2f.js",
    "revision": "c089ddbc88bebbe1dc8914966db50eca"
  },
  {
    "url": "assets/js/37.2afb8052.js",
    "revision": "8c7e2202c56f3b784b4cb69e6ade93eb"
  },
  {
    "url": "assets/js/38.5559a549.js",
    "revision": "24a83996a3bc2410b12a3a46ba9e9434"
  },
  {
    "url": "assets/js/39.3ebb99f2.js",
    "revision": "108f1e6bd4401352e60a7054713c3a2b"
  },
  {
    "url": "assets/js/40.71559465.js",
    "revision": "7aa1f15a8be92ae56471f222f60b6e62"
  },
  {
    "url": "assets/js/41.0bdc54a5.js",
    "revision": "5b7e5789f3819e7098bcca8781b2a4f7"
  },
  {
    "url": "assets/js/42.38e44eb9.js",
    "revision": "a6fb7612eae8d7d704b4389e7d059ce1"
  },
  {
    "url": "assets/js/43.140bccc0.js",
    "revision": "f5f030b6f4fcf8ef3b5dcdb75449bc40"
  },
  {
    "url": "assets/js/44.730e3811.js",
    "revision": "a0803e4b0c056a6b4b72d135219bf1a2"
  },
  {
    "url": "assets/js/45.23d71be0.js",
    "revision": "4623d508e9869945b371af09cd8ba03e"
  },
  {
    "url": "assets/js/46.0f8d70d5.js",
    "revision": "1cc008e9b8f1fa186a78afca858ca871"
  },
  {
    "url": "assets/js/47.3d5f3dba.js",
    "revision": "4353b449e809375dffe5fe2301b67125"
  },
  {
    "url": "assets/js/48.ded8ad59.js",
    "revision": "d782a98c1beafca6877a22a21b1e072f"
  },
  {
    "url": "assets/js/49.6f0976a0.js",
    "revision": "2e39fe25228650cfce157ca7650615c8"
  },
  {
    "url": "assets/js/5.d9fe358c.js",
    "revision": "520e7fde921241ba062aab507e4b9fb4"
  },
  {
    "url": "assets/js/50.84da56ce.js",
    "revision": "35d60e766feb06e8aca44c58672f9caf"
  },
  {
    "url": "assets/js/51.82b20610.js",
    "revision": "37e5840e59dd0aae5b44ffe1fce756f2"
  },
  {
    "url": "assets/js/52.4a94d754.js",
    "revision": "5850459dd499921b5039a30eb8764042"
  },
  {
    "url": "assets/js/53.6734ef9b.js",
    "revision": "56bb2ac07c643e0b701977639b8ec2cb"
  },
  {
    "url": "assets/js/54.c5c8fcf9.js",
    "revision": "77621cb665d3c10706f79334155fda1a"
  },
  {
    "url": "assets/js/55.7fb2cc01.js",
    "revision": "917ccef77b33ac2b35e225f51eab30e8"
  },
  {
    "url": "assets/js/56.c779968e.js",
    "revision": "b257f1606fa9497fdb66a8af4e0fcd53"
  },
  {
    "url": "assets/js/57.bb1605a7.js",
    "revision": "ac14fe85bb8c6cefdef178aece291d96"
  },
  {
    "url": "assets/js/58.374a1f7a.js",
    "revision": "fa4b129179d2716e13841f383ea0f17f"
  },
  {
    "url": "assets/js/59.039ad1ef.js",
    "revision": "a6fa93d2e26d52a163d6f4b0f0812d8d"
  },
  {
    "url": "assets/js/6.c925bac8.js",
    "revision": "f93fb43c8acb9c988697564710a28a83"
  },
  {
    "url": "assets/js/60.49c49bd7.js",
    "revision": "852e157f2f95ba96411582e4c95c87fe"
  },
  {
    "url": "assets/js/61.d76a661a.js",
    "revision": "57c7aff315dfad85f5adf0392273c09e"
  },
  {
    "url": "assets/js/62.1ff7d3bb.js",
    "revision": "0af712f48758a825522d03d84a76ed84"
  },
  {
    "url": "assets/js/63.92a988c3.js",
    "revision": "72a5e7eb18f786912ca97b513c0b26a2"
  },
  {
    "url": "assets/js/64.71d73abe.js",
    "revision": "3bce35262669778b978d4c68bf823610"
  },
  {
    "url": "assets/js/65.b76fa2c6.js",
    "revision": "4ecf08bdd8bde196af2aac778a4ebbca"
  },
  {
    "url": "assets/js/66.1bc27aef.js",
    "revision": "20b81ef28e50926316bb2b2814d7c5c3"
  },
  {
    "url": "assets/js/67.0b3e9e5c.js",
    "revision": "3866304a53d1a6a5e1c78b3c1a6b8eb1"
  },
  {
    "url": "assets/js/68.3ab59591.js",
    "revision": "219cf43139e2583e538fd11e3d28e91f"
  },
  {
    "url": "assets/js/69.541f52ba.js",
    "revision": "e985c910ed9094205031c947916caca0"
  },
  {
    "url": "assets/js/7.922ff356.js",
    "revision": "77eea06dcd9c8588cb97a8f9d222e12b"
  },
  {
    "url": "assets/js/70.84da3add.js",
    "revision": "914ddefa459ab987f7aca1a38ed9552f"
  },
  {
    "url": "assets/js/71.bf03c7d6.js",
    "revision": "377c8501c5c8a97a01a938f2768c5ff6"
  },
  {
    "url": "assets/js/72.dfe11e8f.js",
    "revision": "8c499b6d380abc05a8b773beb5dc5bca"
  },
  {
    "url": "assets/js/73.c0508f27.js",
    "revision": "e4097383743b9482f8dcf94b0888bc14"
  },
  {
    "url": "assets/js/74.56e5bfd9.js",
    "revision": "b9bf6b164b44e3c71f95ad2cab1893c2"
  },
  {
    "url": "assets/js/75.be73c819.js",
    "revision": "ffc3b21704d33776fe3ca58034ce9ba5"
  },
  {
    "url": "assets/js/76.3ea42085.js",
    "revision": "8d913a3efe0c6a7270514501ebb44a4f"
  },
  {
    "url": "assets/js/77.5c2cacf5.js",
    "revision": "f41adbb0f5252a9ff855c7154db24c2e"
  },
  {
    "url": "assets/js/78.b75e0514.js",
    "revision": "1fdc321ce7c0456b4692cd6f6cc80a4c"
  },
  {
    "url": "assets/js/79.1baf4095.js",
    "revision": "d84316fe584a0b305eaf467dd779d8e6"
  },
  {
    "url": "assets/js/8.d52bba0a.js",
    "revision": "55f4f6cd6765575c521482a928375efb"
  },
  {
    "url": "assets/js/80.714a4cb3.js",
    "revision": "f573e730785baca89289e220f44502c2"
  },
  {
    "url": "assets/js/81.daa905d7.js",
    "revision": "a065b89a28250fa71f6ce0a258dd3261"
  },
  {
    "url": "assets/js/82.d6b60f48.js",
    "revision": "8e87b65469a459c765e8e6409275c91a"
  },
  {
    "url": "assets/js/83.673270f1.js",
    "revision": "4a7255bb06ecac6cb502614fb13412fb"
  },
  {
    "url": "assets/js/84.b5f86e12.js",
    "revision": "d1f45dae79099caca98d0252bc59368a"
  },
  {
    "url": "assets/js/85.69b2a62e.js",
    "revision": "0f2fc90e0684f77b388fe3a314d0ea7e"
  },
  {
    "url": "assets/js/86.8dd7075b.js",
    "revision": "4fc4e445c7afb49b8bc67e439bfc6fc4"
  },
  {
    "url": "assets/js/87.98865838.js",
    "revision": "9f0b70b0697980d88b0bd3c8c2a92a2d"
  },
  {
    "url": "assets/js/88.83264c2a.js",
    "revision": "5be3714e4d7f52f090a8ee146219e4be"
  },
  {
    "url": "assets/js/89.d4a4bc0c.js",
    "revision": "79cc974ddc3c1b9159202df1ef472e0f"
  },
  {
    "url": "assets/js/9.999afb76.js",
    "revision": "d87ca420874a089e8595abd923135461"
  },
  {
    "url": "assets/js/90.b13204f5.js",
    "revision": "8cbc65680460b9da03ac015e4074d3b7"
  },
  {
    "url": "assets/js/91.b85768b6.js",
    "revision": "aeaa8e8332e0e16fd5d04fca92a83396"
  },
  {
    "url": "assets/js/92.3d509da3.js",
    "revision": "8303108b576dad4f321d530a4613903d"
  },
  {
    "url": "assets/js/93.f45b6dd5.js",
    "revision": "9d0d6b38bf51db6b8d862985ea58b370"
  },
  {
    "url": "assets/js/94.55f57a20.js",
    "revision": "53217a6d309bc63ad27a723e5f3a1965"
  },
  {
    "url": "assets/js/95.bea0bd9f.js",
    "revision": "5a591e33418edc3e101ffce3685fd18f"
  },
  {
    "url": "assets/js/96.ea1728bc.js",
    "revision": "697d9219ab86633a3c80c25b779ecb4d"
  },
  {
    "url": "assets/js/97.5bc35d44.js",
    "revision": "d6605b87a0099523f8069699f372998a"
  },
  {
    "url": "assets/js/98.247a34c9.js",
    "revision": "b8f45167cbb2aaaea3339e1e3eb903ed"
  },
  {
    "url": "assets/js/99.a9d64836.js",
    "revision": "5c120717a774f1407cb361babcc12a5d"
  },
  {
    "url": "assets/js/app.dd039b7c.js",
    "revision": "0e2031e15e9bb288ebe0ac7386d689a1"
  },
  {
    "url": "assets/js/vendors~docsearch.f38ce270.js",
    "revision": "41b305a3a5d1da3280d769ff724484fe"
  },
  {
    "url": "assets/js/vendors~flowchart.5f3dc1c3.js",
    "revision": "0a63f50a5966ad2448aa09a549abdf62"
  },
  {
    "url": "assets/js/vendors~notification.2908d4ea.js",
    "revision": "e626eafe82af0123b7c0a26da14ccebf"
  },
  {
    "url": "config/index.html",
    "revision": "6d49253b945b303275a78025f4f0b6e8"
  },
  {
    "url": "faq/index.html",
    "revision": "ce15ddaca865ff7df23617692fb69151"
  },
  {
    "url": "guide/assets.html",
    "revision": "09dcd7b0af99709d8d591282be7a8aeb"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "e3c384efd7b28ccce380d40160f7a898"
  },
  {
    "url": "guide/deploy.html",
    "revision": "99d4d56080e43c857e2bb444e1ebd3f3"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "4585fe10e6b5be5578ec91c2b4f3b75d"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "addcc788ae12f553292041d11a7e5825"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "f3350c0728febc9faa95f53ec125fceb"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "e1bb0d112be283d366b6eace5c161605"
  },
  {
    "url": "guide/i18n.html",
    "revision": "aea552471f44e64704f40989c90d0af3"
  },
  {
    "url": "guide/index.html",
    "revision": "9efe836adc3ecdca69a5ee2012f6e543"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "4c7d9f1958d179e0e0b50b32f7878261"
  },
  {
    "url": "guide/markdown.html",
    "revision": "cd22e78765249c68cac8654aae48d207"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "05ad47e4870799f12b03842662e9319b"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "db7b04e2304b4318b7579ad8be14fec5"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "231be79455480f3ee8870e27e55cacf6"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "miscellaneous/design-concepts.html",
    "revision": "80cf33a9e19ea8c33566d1fa17e2041c"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "70087349f02343d55efb8d889df68396"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "f974d3360bfef4eb46a3d364e9c9429c"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "43b7063ba12a49c1d460aefa168aa573"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "1a068effad8a0f54e09c7ffd8c274176"
  },
  {
    "url": "plugin/index.html",
    "revision": "24bfc39e64638f3f967f082fe7ed9846"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "3e2636827b3e76375be56b92e37e8c66"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "f8f9b4bb159432d3f97d6276f8626a07"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "17a254adf88b61b051f71069522e1aaa"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "b20a9f42dac64d01c498907eac24e790"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "4dba719db8e11af9711a24707524d7ed"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "37fb4a1a5909cfaecd87eb4e7ab8e360"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "6acf3aaa2d3128d95f8afc57b9191e81"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "4cc58d95e87e1f76e074bfb39eb203ae"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "103638c342cf57cf3b8c9fad96b3fb1d"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "3d9810f6f739fab5fa20505785839ef8"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "058f73fc0e7ad41b98f4fe7c9be82c2b"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "d6323e8f4aded76d95ccc140a59bbd93"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "7bd652421dbdb839c9ac8e49ae1a0fcd"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "2078d7c799afd7428480f004eb3cf95f"
  },
  {
    "url": "theme/index.html",
    "revision": "d7bb56d2bc8ff25258e6a00b516ac648"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "8a800cfe27fa7b4ac641c5a139108a93"
  },
  {
    "url": "theme/option-api.html",
    "revision": "f8bdb91e1538a0b3871a02b1b86ccc10"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "5e96dc6a86a04b9ddc0b764ff6821b8c"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "d0388c66a693f86553825b752dad8158"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "88ebfd778f6724acd38f044ea6dfb890"
  },
  {
    "url": "zh/api/node.html",
    "revision": "7bf1172fd7a386c0f554ba9ca878f86d"
  },
  {
    "url": "zh/config/index.html",
    "revision": "ea0387f2b947169df6a694a1bfe2f55a"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "12406044c9802d72cecace5d143fdb13"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "a6bcedf86d7b9af70d77d71418942b12"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "a0708ccefd127c28a0d3fc06b23e68f8"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "e840dd979010556553af1c0d11cc224d"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "e63f6175400c13ae8a1b7feb9bd8d294"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "64711102d622e9a5bf1f354ce9738ea2"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "70db6cce020d791674dfbb6be25fb24c"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "1a3c01cdd6a43155cde6bdc3a46e9cdf"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "cc2ec5e9dc18de99d4a5889283cc5a2b"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "b6d5d4804a82c824bd3cb659a8523390"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "d5d27d803cace63d0079bbc2bf7003f0"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "bafa49af96b6ff3570189ff895e52c01"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "c717384466d827d2c1f2ac82974bd668"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "598848e3aae99e67895e4cf890e45077"
  },
  {
    "url": "zh/index.html",
    "revision": "c2c32fdc5917849d55eed6401df64eb1"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "defa05427d24e41029fd7888419736ef"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "ccfb8d2ae676a8281875bd1b425d0f65"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "215b9bdcaa3429810b49d983e46845bc"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "ca664d23a891b9a5506648ee3fd68395"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "18e756f96c4ef41a3a93f4b04804b08a"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "eeeb7f1e70e8819bf4532a9fe060df8f"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "cc824c003cf47af8253c69f7a5c5badc"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "7851d5ae5c2ba9121d5c603cd6f29ad9"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "e6a0f0dc296b508f7849d3c41c0b1ac9"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "0f1a2ba4e7cd22ba4c4f1d16f5f86364"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "d7248259c6910956c48800f787bb46ed"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "3b6d7179b8e1c5c55f060791e1161e44"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "1756f90b298962035208f9d828848dd4"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "691a46110991e2a0c0220e87d48c32fe"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "98bf5c24392d4c3ddb14e1723d32f7c1"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "8771d72f0a7f3d6ac88d507c489c472d"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "2774f10918142cc76b3224fe0558b481"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "eafc773144e2c6a1bc86be1e0f08dcce"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "1e7550f3afa054499c287f1164dcd561"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "93b228d4a448d9038b8c50ada2166490"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "f86eda234e0fe7709a0ba6ab0bd47cc1"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "888293d3324bd57a4035e12fae7115ad"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "1175f9b468c00aff0eec69ce78b03488"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "a652b4cbf3f3714993ba334884ac3626"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "be237e2908962b09be840386663fec54"
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
