var navMenuDiv = document.getElementById("nav-content");
var navMenu = document.getElementById("nav-toggle");

document.onclick = check;
function check(e) {
  var target = (e && e.target) || (event && event.srcElement);

  //Nav Menu
  if (!checkParent(target, navMenuDiv)) {
    // click NOT on the menu
    if (checkParent(target, navMenu)) {
      // click on the link
      if (navMenuDiv.classList.contains("hidden")) {
        navMenuDiv.classList.remove("hidden");
      } else {
        navMenuDiv.classList.add("hidden");
      }
    } else {
      // click both outside link and outside menu, hide menu
      navMenuDiv.classList.add("hidden");
    }
  }
}
function checkParent(t, elm) {
  while (t.parentNode) {
    if (t == elm) {
      return true;
    }
    t = t.parentNode;
  }
  return false;
}

let config = {
    "policies": [
      {
        "id": "essential",
        "label": "Essential Cookies",
        "description": "We need to save some technical cookies, for the website to function properly.",
        "category": "essential",
      },
      {
        "id": "analytics",
        "label": "Analytics",
        "category": "analytics",
        "description": "We need to save some cookies relating to gathering statistics about traffic coming to the website.",
      }
    ],
    "essentialLabel": "Always on",
    "permissionLabels": {
      "accept": "Accept",
      "acceptAll": "Accept all",
      "decline": "Decline"
    },
    "cookiePreferenceKey": "cookie-preferences",
    "header": {
      "title": "Cookies",
      "subTitle": "Sorry to trouble you...",
      "description": "This website uses cookies to personalize content, features, and to analyze traffic. Some third parties we work with may also set cookies on our website."
    },
    "cookiePolicy": {
      "url": "https://coluthia.com/privacy.html",
      "label": "Learn more by reading our policy",
    },
    "customizeLabel": "Customize"
  };
  CookieThough.init(config);
  CookieThough.onPreferencesChanged(() => dataLayer.push({'event': 'preferences_changed'}));