


function webcheck() {
  window.location.href = "http://support.dmeng.net/upgrade-your-browser.html?referrer=" + encodeURIComponent(window.location.href);
}
var ua = navigator.userAgent.toLocaleLowerCase();
var browserType = null;
if (ua.match(/msie/) != null || ua.match(/trident/) != null) {
  browserType = "IE";
  browserVersion = ua.match(/msie ([\d.]+)/) != null ? ua.match(/msie ([\d.]+)/)[1] : ua.match(/rv:([\d.]+)/)[1];

} else if (ua.match(/firefox/) != null) {
  browserType = "火狐";

} else if (ua.match(/ubrowser/) != null) {
  browserType = "UC";
  webcheck()
} else if (ua.match(/opera/) != null) {
  browserType = "欧朋";
  webcheck()
} else if (ua.match(/bidubrowser/) != null) {
  browserType = "百度";
  webcheck()
} else if (ua.match(/metasr/) != null) {
  browserType = "搜狗";
} else if (ua.match(/tencenttraveler/) != null || ua.match(/qqbrowse/) != null) {
  browserType = "QQ";
} else if (ua.match(/maxthon/) != null) {
  browserType = "遨游";
} else if (ua.match(/chrome/) != null) {
  var is360 = _mime("type", "application/vnd.chromium.remoting-viewer");
  function _mime(option, value) {
    var mimeTypes = navigator.mimeTypes;
    for (var mt in mimeTypes) {
      if (mimeTypes[mt][option] == value) {
        return true;
      }
    }
    return false;
  }
  // if (is360) {
  //   browserType = '360';
  // } else {
  //   $('html').css("zoom", ".80");
  // }
} else if (ua.match(/safari/) != null) {
  browserType = "Safari";
}
// console.log(browserType)


