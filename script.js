 window.onload = () => {
      var ua = detect.parse(navigator.userAgent);
      document.write(ua.os.family);
      
      if(ua.os.family == "Android"||ua.os.family == "IOS"){
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
      }
      else{
        window.location.href = "https://play.google.com/store/apps/details?id=com.techglance.easypdf";
      }
    };
