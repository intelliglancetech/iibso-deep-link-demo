const GOOGLE_PLAY_STORE_LINK =
  "https://play.google.com/store/apps/details?id=com.techglance.easypdf";
const IOS_APP_STORE_LINK =
  "https://apps.apple.com/us/app/foodpanda-food-delivery/id758103884";

window.onload = (function handleUserRedirection(window = {}, document = {}) {
  let ua = detect.parse(navigator.userAgent);

  if (ua.os.family == "Android" || ua.os.family == "IOS") {
    document.addEventListener("DOMContentLoaded", function (event) {
      let links = document.querySelectorAll("a");
      let baseUri = "exp://wg-qka.notbrent.app.exp.direct/productDetail";
      
      // Take the uri from the params
      let qs = decodeURIComponent(document.location.search);
      let purpose = qs.split("?purpose")[1];
      let productId = qs.split("?purpose")[2];

      // Update the link urls
      // for (let i = 0; i < links.length; ++i) {
      //   links[i].href = links[i].href.replace('exp://REPLACE_ME/', baseUri);
      //   links[i].textContent = links[i].href
      // }

      let redirectInterval = setInterval(function () {
        let countdown = document.querySelector(".countdown");
        let t = parseInt(countdown.innerText, 10);
        t -= 1;

        countdown.innerText = t;

        if (t === 0) {
          clearInterval(redirectInterval);
          window.location.href =
            baseUri +
            "purpose" +
            encodeURIComponent(purpose);
            "productId" +
            encodeURIComponent(productId);
        }
      }, 1000);
    });
  } else {
    window.location.href = ua.os.family.includes("Windows")
      ? GOOGLE_PLAY_STORE_LINK
      : ua.os.family.includes("Mac")
      ? IOS_APP_STORE_LINK
      : GOOGLE_PLAY_STORE_LINK;
  }
})(window, document);
