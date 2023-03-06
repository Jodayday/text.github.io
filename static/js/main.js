//**  클릭시 포커스*/
function navChack() {
  const fixedNav = document.getElementById("nav");
  fixedNav.focus();
}

const nav = document
  .getElementById("nav")
  .addEventListener("click", navChack());
console.log(nav);

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

function aTagCall(id) {
  if (isMobile()) {
    location.href = "/main.html"; //모바일 페이지
  } else {
    location.href = "/main.html"; //PC용 페이지
  }
}

// Check if the device is mobile or desktop
if (isMobile()) {
  var callLink = document.getElementsByClassName(".call");
  // If mobile device, set href to tel: link
  callLink.href = "tel:010-3912-1825";
  console.log(callLink);
  // Remove data-bs-toggle and data-bs-target attributes
  callLink.removeAttribute("data-bs-toggle");
  callLink.removeAttribute("data-bs-target");
}
