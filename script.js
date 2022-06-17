$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Developer", "Coder"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Developer", "Coder"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});

let today = new Date();
let past = new Date(2021, 02, 01); // remember this is equivalent to 01/03/2021
//dates in js are counted from 0, so 02 is march

function calcDate(date1, date2) {
  var diff = Math.floor(date1.getTime() - date2.getTime());
  var day = 1000 * 60 * 60 * 24;

  var days = Math.floor(diff / day);
  var months = Math.floor(days / 31) + 1;
  var years = Math.floor(months / 12);

  var message = "";
  if (years > 1) {
    message += years + " Years \n";
  }
  if (years == 1) {
    message += years + " Year \n";
  }

  if (months < 12) {
    if (months === 1) {
      message += months + " Month ";
    } else {
      message += months + " Months ";
    }
  } else if (months > 12) {
    if (months % 12 !== 0) {
      if (months % 12 === 1) {
        message += (months % 12) + " Month ";
      } else {
        message += (months % 12) + " Months ";
      }
    }
  }

  return message;
}

let exp = calcDate(today, past);

const element = document.getElementById("experience");
element.innerHTML = exp;

$(window)
  .resize(function () {
    if (window.innerWidth < 400) {
      document.querySelector(".logo").innerHTML =
        '<a href="#">Jay<span>esh</span></a>';
    } else if (window.innerWidth > 400) {
      document.querySelector(".logo").innerHTML =
        '<a href="#">Jay<span>esh</span> Chou<span>dhary</span></a>';
    }
  })
  .resize();
