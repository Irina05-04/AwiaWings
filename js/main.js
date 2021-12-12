$(document).ready(function () {
  $("#app").vide({
    mp4: "video/Airport.mp4",
    webm: "video/Airport.webm",
    ogv: "video/Airport.ogv",
    poster: "img/changeVideo.jpg",
  });
});
$(document).ready(function () {
  $(".header_burger").click(function (event) {
    $(".header_burger, .header_menu").toggleClass("active-burger");
    $('body').toggleClass('lock');
  });
});

let swap = document.querySelector(".swap");
/*
swap.addEventListener("click", function () {
  var tmp = document.querySelector(".departureInput").value;
  document.querySelector(".departureInput").value = document.querySelector(".arrivalInput").value;
  document.querySelector(".arrivalInput").value = tmp;
});
*/
$(document).ready(function () {
  $(".country").slice(0, 9).show();
  $("#loadMore").on("click", function (e) {
    e.preventDefault();
    $(".country:hidden").slice(0, 9).slideDown();
    if ($(".country:hidden").length == 0) {
      $("#loadMore").text("No Content").addClass("noContent");
    }
  });
});

/*$(document).ready(function(){
  $(".screen_2Index").animated("zoomInUp");
})*/

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".scrollup").fadeIn();
    } else {
      $(".scrollup").fadeOut();
    }
  });

  $(".scrollup").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});

let btns = document.querySelectorAll(".btn");
for (btn of btns) {
  btn.addEventListener("click", function () {
    let item = this.closest(".image-slider__slide1");
    console.log(item);
    let card = item.querySelector(".image-slider__image1");
    console.log(card);
    let dots = card.querySelector(".more-dots");
    console.log(dots);
    let more = card.querySelector(".more");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      more.style.display = "none";
      this.textContent = "ещё";
      card.style.height = "286px";
    } else {
      dots.style.display = "none";
      more.style.display = "inline";
      this.textContent = "скрыть";
      card.style.height = "350px";
    }
  });
}
function isNumber(n) {
  return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
}
let prices = document.querySelectorAll(".price");

for (price of prices) {
  price.addEventListener("click", function () {
    let cardItem = this.closest(".card");
    let currentPrice = document.querySelector(".sum_price").textContent;
    let bufCurrent = "",
      bufNew = "";
    for (let item = 0; item < currentPrice.length; item++) {
      if (isNumber(currentPrice[item])) {
        bufCurrent += currentPrice[item];
      }
    }
    for (let item = 0; item < this.textContent.length; item++) {
      if (isNumber(this.textContent[item])) {
        bufNew += this.textContent[item];
      }
    }
    document.querySelector(".sum_price").textContent = `${
      parseInt(bufCurrent) + parseInt(bufNew)
    } RUB`;
    cardItem.style.border = "2px solid #132734";
  });
}

function bisness_slider() {
  let economy = document.querySelector(".wrapper");
  console.log(economy);
  let bisness = document.querySelector(".wrapper-bisness");
  let btnBisness = document.querySelector(".bisness");
  let btnEconomy = document.querySelector(".economy");
  economy.style.display = "none";
  bisness.style.display = "inline";
  btnBisness.style.opacity = "1";
  btnBisness.style.borderBottom = "1px solid #132734";
  btnEconomy.style.opacity = "0.5";
  btnEconomy.style.borderBottom = "0";
}
function economy_slider() {
  let economy = document.querySelector(".wrapper");
  console.log(economy);
  let bisness = document.querySelector(".wrapper-bisness");
  let btnBisness = document.querySelector(".bisness");
  let btnEconomy = document.querySelector(".economy");
  economy.style.display = "inline";
  bisness.style.display = "none";
  btnBisness.style.opacity = "0.5";
  btnBisness.style.borderBottom = "0";
  btnEconomy.style.opacity = "1";
  btnEconomy.style.borderBottom = "1px solid #132734";
}

var wow = new WOW({
  boxClass: "wow", // класс, скрывающий элемент до момента отображения на экране (по умолчанию, wow)
  animateClass: "animated", // класс для анимации элемента (по умолчанию, animated)
  offset: 0, // расстояние в пикселях от нижнего края браузера до верхней границы элемента, необходимое для начала анимации (по умолчанию, 0)
  mobile: false, // включение/отключение WOW.js на мобильных устройствах (по умолчанию, включено)
  live: true, // поддержка асинхронно загруженных элементов (по умолчанию, включена)
  callback: function (box) {
    // функция срабатывает каждый раз при старте анимации
    // аргумент box — элемент, для которого была запущена анимация
  },
  scrollContainer: null, // селектор прокручивающегося контейнера (опционально, по умолчанию, window)
});
wow.init();

let d = document;
function hoverCard(n, m) {
  let a = "card" + n;
  let btn = "btn" + n;
  if (m == 1) {
    eval("d.all[a].style.opacity='0.6'");
    d.getElementById(btn).style.visibility = "visible";
    d.getElementById(btn).style.opacity = "1 !important";
  } else {
    eval("d.all[a].style.opacity='1'");
    d.getElementById(btn).style.visibility = "hidden";
  }
}
document.querySelector('.button1').addEventListener('click',()=>{
let fail = "";
let name = document.querySelector('.name').value;
let mail = document.querySelector('.mail').value;
let message = document.querySelector('.message').value;

if (mail == "" ||  name == ""  || message == ""){
  alert("Заполните все поля");
}
else{
let mail_valid = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
let name_valid = /(^[A-Z][a-z]*)[,|\s]([A-Z][a-z]+$)|(^[А-Я][а-я]*)[,|\s]([А-Я][а-я]+$)/;
if (mail_valid.test(mail) == false) {
  fail += "Вы ввели некорректный электронный адрес.\n\n";
}
if (name_valid.test(name) == false) {
  fail += "Вы ввели некорректное имя пользователя.\n\n";
}
if (fail) {
  alert(fail);
}
else{
  alert("Сообщение отправлено успешно");
  document.querySelector('.name').value = ""; 
  document.querySelector('.mail').value = ""; 
  document.querySelector('.message').value = "";
}
}
});

document.querySelector('.inter').addEventListener('click',()=>{
  let fail = "";
  let login = document.querySelector('.login').value;
  let phone = document.querySelector('.phone').value;
  let password = document.querySelector('.password').value;
  
  if (login == "" ||  phone == ""  || password == ""){
    alert("Заполните все поля");
  }
  else{
  let phone_valid = /^(8)[\- ]?(\(?\d{3}\)?[\- ]?)?(([\d]{3}[\- ]?)([\d]{2}[\- ]?)([\d]{2}[\- ]?))$/;
  let password_valid = /(^[A-Z][a-z]*)[,|\s]([A-Z][a-z]+$)|(^[А-Я][а-я]*)[,|\s]([А-Я][а-я]+$)/;
  if (phone_valid.test(phone) == false) {
    fail += "Вы ввели некорректный номер телефона.\n\n";
  }
  if (password_valid.test(password) == false) {
    fail += "Вы ввели некорректный пароль.\n\n";
  }
  if (fail) {
    alert(fail);
  }
  else{
    document.querySelector('.login').value = ""; 
    document.querySelector('.phone').value = ""; 
    document.querySelector('.message').value = "";
  }
  }
  });
