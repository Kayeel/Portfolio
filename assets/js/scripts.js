//FAIRE APPARAITRE BLOC AU SCROLL

$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }
        if (this.scrollY > 200) {
            $(".scroll-up-btn").addClass("show");
        } else {
            $(".scroll-up-btn").removeClass("show");
        }
    });

    // slide-up script
    $(".scroll-up-btn").click(function () {
        $("html").animate({
            scrollTop: 0,
        });
    });

    // TOOGLE MENU/NAVBAR SCRIPT
    $(".menu-btn").click(function () {
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });

});

// TYPING Animation
var typed = new Typed(".typing", {
    strings: ["Développeur Web Junior"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});

// 3D EFFETS

VanillaTilt.init(document.querySelector(".card"), {
    max: 25,
    speed: 400,
});

        // MER BIENVENUE
  
let bg = document.getElementById("bg");
let mouette = document.getElementById("mouette");
let mer = document.getElementById("mer");
let sable = document.getElementById("sable");
let text = document.getElementById("text");

window.addEventListener('scroll', function () {
    var value = window.scrollY;

    bg.style.top = value * 0.5 + 'px';
    mouette.style.left = value * 2 + 'px';
    mer.style.top = value * 0.4 + 'px';
    sable.style.top = value * 0.15 + 'px';
    text.style.top = value * 1 + 'px';
    
});