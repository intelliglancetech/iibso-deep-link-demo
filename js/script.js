const GOOGLE_PLAY_STORE_LINK =
  "https://play.google.com/store/apps/details?id=com.techglance.easypdf";
const IOS_APP_STORE_LINK =
  "https://apps.apple.com/us/app/foodpanda-food-delivery/id758103884";

window.onload = (function handleUserRedirection(window = {}, document = {}) {
  let ua = detect.parse(navigator.userAgent);

  if (ua.os.family == "Android" || ua.os.family == "IOS") {
    document.addEventListener("DOMContentLoaded", function (event) {
      var links = document.querySelectorAll("a");
      var baseUri = "exp://wg-qka.notbrent.app.exp.direct";

      // Take the uri from the params
      var qs = decodeURIComponent(document.location.search);
      if (qs) {
        baseUri = qs.split("?linkingUri=")[1];
      }

      // Update the link urls
      // for (var i = 0; i < links.length; ++i) {
      //   links[i].href = links[i].href.replace('exp://REPLACE_ME/', baseUri);
      //   links[i].textContent = links[i].href
      // }

      var redirectInterval = setInterval(function () {
        var countdown = document.querySelector(".countdown");
        var t = parseInt(countdown.innerText, 10);
        t -= 1;

        countdown.innerText = t;

        if (t === 0) {
          clearInterval(redirectInterval);
          window.location.href =
            baseUri +
            "message=" +
            encodeURIComponent("Redirected automatically by timer");
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