// 모바일기기 체크

function isMobile() {
  var UserAgent = navigator.userAgent;

  if (
    UserAgent.match(
      /iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i
    ) != null ||
    UserAgent.match(/LG|SAMSUNG|Samsung/) != null
  ) {
    console.log("yes~");
    return true;
  } else {
    console.log("no!");
    return false;
  }
}

var callLink = document.getElementById("call");
// Check if the device is mobile or desktop
if (isMobile()) {
  // If mobile device, set href to tel: link
  console.log("start!?");
  console.log(callLink);
  callLink.href = "tel:010-3912-1825";
  console.log(callLink);
  // Remove data-bs-toggle and data-bs-target attributes
  callLink.removeAttribute("data-bs-toggle");
  callLink.removeAttribute("data-bs-target");
}
