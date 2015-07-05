// Карта
function initialize() {
        
var latlng = new google.maps.LatLng(59.93912, 30.3201);
var settings = {
    zoom: 17,
    center: latlng,
    panControl: false,
    zoomControl: false,
    scaleControl: false,
    rotateControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    overviewMapControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    };
      
var map = new google.maps.Map(document.getElementById("map-canvas"), settings);
        
var companyLogo = new google.maps.MarkerImage("img/map-marker.png",
                                              new google.maps.Size(231,190),
                                              new google.maps.Point(0,0),
                                              new google.maps.Point(49,190)
                                             );

var companyPos = new google.maps.LatLng(59.93861, 30.32305);
var companyMarker = new google.maps.Marker({
        position: companyPos,
        map: map,
        icon: companyLogo,
        title:"Nerds",
      });
      }

document.addEventListener("load", initialize());


// Форма обратной связи
var link = document.querySelector(".contacts-btn");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var cancel = popup.querySelector(".btn-cancel");
var form = popup.querySelector("form");
var userName = popup.querySelector("[name='name-field']");
var userMail = popup.querySelector("[name='mail-field']");
var message = popup.querySelector("[name='message-field']");
var storageName = localStorage.getItem("userName");
var storageMail = localStorage.getItem("userMail");

link.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  if (storageName) {
    userName.value = storageName;
    userMail.value = storageMail;
    message.focus();
  } else {
    userName.focus();
  }
});

close.addEventListener("click", function (event) {
  event.preventDefault();
  if (popup.classList.contains("modal-content-show")) {
    popup.classList.remove("modal-content-show");
  }
});

cancel.addEventListener("click", function (event) {
  if (popup.classList.contains("modal-content-show")) {
    popup.classList.remove("modal-content-show");
  }
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
    }
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!(userName.value)) {
    userName.classList.add("modal-error-s");
    alert("Укажите ваше имя, пожалуйста");
    userName.classList.remove("modal-error-s");
    userName.focus();
  } else if (!(userMail.value)) {
    userMail.classList.add("modal-error-s");
    alert("Укажите адрес вашей электронной почты");
    userMail.classList.remove("modal-error-s");
    userMail.focus();
  } else if (!(message.value)) {
    message.classList.add("modal-error-b");
    alert("Не забудьте написать нам сообщение");
    message.classList.remove("modal-error-b");
    message.focus();
  } else {
    localStorage.setItem("userName", userName.value);
    localStorage.setItem("userMail", userMail.value);
    
    
    popup.classList.add("modal-content-hide");
    setTimeout(function() {
      if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      }
      if (popup.classList.contains("modal-content-hide")) {
      popup.classList.remove("modal-content-hide");
      }
      message.value = "";
    }, 900);
  }
});

