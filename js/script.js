const GOOGLE_PLAY_STORE_LINK =
  "https://play.google.com/store/apps/details?id=com.techglance.easypdf";
const IOS_APP_STORE_LINK =
  "https://apps.apple.com/us/app/foodpanda-food-delivery/id758103884";

window.onload = ((window = {}, document = {}) => {
  let ua = detect.parse(navigator.userAgent);

        // let btnAction = document.createElement("button");
        // btnAction.textContent = "Proceed to the product";
        // btnAction.style.backgroundColor="#3B619E";
        // btnAction.style.color="#ffffff";
        // btnAction.style.padding="6px";
        // btnAction.style.borderRadius="6px";
        // btnAction.style.display="none";
        // btnAction.setAttribute("id")="link";
        // document.querySelector("p").appendChild(btnAction);
        
        let btnAction = document.getElementById("link");
        btnAction.style.display= "none";
        btnAction.onclick=()=>{
          window.location.href = `${baseUri}`;
          window.close('','_parent','');
        }

  if (ua.os.family == "Android" || ua.os.family == "IOS") {
    document.addEventListener("DOMContentLoaded", function (event) {
      let links = document.querySelectorAll("a");
      // let baseUri = "exp://wg-qka.notbrent.app.exp.direct";
      let baseUri;
      
      // Take the uri from the params
      let qs = decodeURIComponent(document.location.search);
      if (qs) {
        baseUri = qs.split("?linkingUri=")[1];
      }

      // Update the link urls
      // for (let i = 0; i < links.length; ++i) {
        //   links[i].href = links[i].href.replace('exp://REPLACE_ME/', baseUri);
        //   links[i].textContent = links[i].href
        // }
        document.getElementById('link').click();

      let redirectInterval = setInterval(() => {
        let countdown = document.querySelector(".countdown");
        let t = parseInt(countdown.innerText, 10);
        t -= 1;

        countdown.innerText = t;

        if (t === 0) {
          clearInterval(redirectInterval);
          // ?message=${encodeURIComponent("Redirected automatically by timer")}
          if(ua.os.family == "Android") {
            window.location.href = GOOGLE_PLAY_STORE_LINK;
          }
          if(ua.os.family == "IOS") {
            window.location.href = IOS_APP_STORE_LINK;
          } 
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
