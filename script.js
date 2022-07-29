const GOOGLE_PLAY_STORE_LINK = "https://play.google.com/store/apps/details?id=com.techglance.easypdf";
const IOS_APP_STORE_LINK = "https://apps.apple.com/us/app/foodpanda-food-delivery/id758103884";

window.onload = (function handleUserRedirection (window={}, document={}) {
  let ua = detect.parse(navigator.userAgent);
  
  document.write(ua.os.family);
  

})(window, document);
