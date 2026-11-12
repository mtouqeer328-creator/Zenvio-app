ZENVIO PWA upgrade files

Upload these files to the SAME root folder as index.html in your GitHub repository:
- manifest.json
- service-worker.js
- zenvio-icon.png

Then make TWO small additions to your existing index.html (do not replace the whole file):

1) Inside <head>, immediately before </head>, add:
<link rel="manifest" href="./manifest.json">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="ZENVIO">
<link rel="apple-touch-icon" href="./zenvio-icon.png">

2) Immediately before </body>, add:
<script>
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .catch(error => console.error('ZENVIO offline setup failed:', error));
  });
}
</script>

Commit all changes. Wait 2-5 minutes, open the GitHub Pages site, refresh once while online, then test by turning on airplane mode and reopening the site.

Important:
- Keep the existing index.html and its calculators intact.
- The service worker caches the app shell for offline reopening. First visit must be online.
- Real Google AdMob ads do not run just by adding HTML. AdMob requires an Android app build and the official Google Mobile Ads SDK, plus an approved AdMob account/ad unit. Do not click your own ads.
