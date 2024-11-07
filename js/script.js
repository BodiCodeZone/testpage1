function initMap() {
    map = new google.maps.Map(document.getElementById("map"), { center: { lat: 29.979524329575636, lng: 31.28151534998068 }, zoom: 13 });
    var e = [
            ["Maadi", 29.979524329575636, 31.28151534998068],
            ["cairo", 30.012491838406447, 31.305204535388853],
            ["9th Street 9, Al Abageyah, El-Khalifa, Cairo Governorate 11571", 30.01695106997479, 31.295248176334226],
            ["Al Bahr Al Aazam, Saqiyet Mekki, Giza District, Giza Governorate", 30.00595126946192, 31.21422401299315],
            ["Sohag, Al Omraneyah Al Gharbeyah, El Omraniya, Giza Governorate", 30.002680823285438, 31.196027908514008],
            ["158 Al Haram, Al Kom Al Akhdar, El Omraniya, Giza Governorate", 29.99643694490022, 31.160665667733795],
            ["داخلي - جامعة القاهرة، 61 ماكينة حديقه الحيوان، Oula", 30.023788168958244, 31.212164076637023],
            ["ش رفاعة . ميدان، Al Mesaha, Giza Governorate", 30.03894701094098, 31.215253981171216],
        ],
        i = new google.maps.Marker({ position: new google.maps.LatLng(e[0][1], e[0][2]), animation: google.maps.Animation.BOUNCE, icon: "img/branches/pin.png", map: map }),
        n = new google.maps.Marker({ position: new google.maps.LatLng(e[1][1], e[1][2]), animation: google.maps.Animation.BOUNCE, icon: "img/branches/pin.png", map: map }),
        a = new google.maps.Marker({ position: new google.maps.LatLng(e[2][1], e[2][2]), animation: google.maps.Animation.BOUNCE, icon: "img/branches/pin.png", map: map }),
        t = new google.maps.Marker({ position: new google.maps.LatLng(e[3][1], e[3][2]), animation: google.maps.Animation.BOUNCE, icon: "img/branches/pin.png", map: map }),
        o = new google.maps.Marker({ position: new google.maps.LatLng(e[4][1], e[4][2]), animation: google.maps.Animation.BOUNCE, icon: "img/branches/pin.png", map: map }),
        s = new google.maps.Marker({ position: new google.maps.LatLng(e[5][1], e[5][2]), animation: google.maps.Animation.BOUNCE, icon: "img/branches/pin.png", map: map }),
        l = new google.maps.Marker({ position: new google.maps.LatLng(e[6][1], e[6][2]), animation: google.maps.Animation.BOUNCE, icon: "img/branches/pin.png", map: map }),
        r = new google.maps.Marker({ position: new google.maps.LatLng(e[7][1], e[7][2]), animation: google.maps.Animation.BOUNCE, icon: "img/branches/pin.png", map: map });
    map.setCenter(i.getPosition()),
        map.setCenter(n.getPosition()),
        map.setCenter(a.getPosition()),
        map.setCenter(t.getPosition()),
        map.setCenter(o.getPosition()),
        map.setCenter(s.getPosition()),
        map.setCenter(l.getPosition()),
        map.setCenter(r.getPosition());
}
$(document).ready(function () {
    "use strict";
    -1 != navigator.userAgent.indexOf("Mac OS X") ? $("body").addClass("mac") : $("body").addClass("pc"),
        $(".fixed_list span").click(function () {
            $(".fixed_list span").siblings().slideToggle(500), $(".fixed_list span").children().toggleClass("hid", 500);
        }),
        $(".fixed_list").click(function (e) {
            e.stopPropagation();
        }),
        $(".popup_tooltip").click(function (e) {
            $(this).children(".tooltip_list").slideToggle().toggleClass("flex");
        }),
        $(window).click(function () {
            $(".fixed_list ul").slideUp(500), $(".fixed_list span img").removeClass("hid"), $(".fixed_list span i").addClass("hid");
        }),
        $("button.collapsed").click(function () {
            $(this).siblings("").toggleClass("show");
        }),
        $(".navbar-nav li").hover(function () {
            $(this).addClass("active").siblings().removeClass("active");
        }),
        $(".navbar-nav ul.prevent_default").click(function () {
            $(this).addClass("active").parent().siblings().children("ul.prevent_default").removeClass("active");
        }),
        $(".navbar-nav ul.prevent_default li").click(function () {
            $(this).addClass("active").siblings().removeClass("active");
        }),
        $("input[type='file']").change(function () {
            $(this).val() &&
                $(this)
                    .siblings()
                    .html(this.value.replace(/C:\\fakepath\\/i, ""));
        }),
        $(window).width() >= 991 &&
            $(".video_for_apply .video_parent").click(function () {
                $(this).children("div").fadeOut(500);
            }),
        $(".accordion button").on("click", function () {
            $(this).children("img").toggleClass("rotate"), $(this).parent().siblings().children("div.collapse").removeClass("show"), $(this).parent().siblings().children("button").children("img").removeClass("rotate");
        }),
        $(".card_accordion button").on("click", function () {
            $(this).children("img").toggleClass("rotate"),
                $(this).parent().parent(".container").siblings().children().children("div.collapse").removeClass("show"),
                $(this).parent().parent(".container").siblings().children().children("button").children("img").removeClass("rotate");
        });
    let e = $(".navbar"),
        i = $(".navbar__upper-bar");
    $(window).on("scroll", function () {
        $(this).scrollTop() > 0 ? (i.addClass("navbar__upper-bar--toggle-color"), e.addClass("navbar--toggle-bg-color")) : (i.removeClass("navbar__upper-bar--toggle-color"), e.removeClass("navbar--toggle-bg-color"));
    }),
        $(".complainant ul li").click(function () {
            $(this).addClass("active").siblings().removeClass("active");
        }),
        $("#form_Selector").change(function () {
            $(".complain_form").hide(), $("#" + $(this).val()).css("display", "flex");
        });
    let n = $("section.hero_slider"),
        a = $(".page_body"),
        t = e.outerHeight(!0);
    var o, s, l;
    a.css("padding-top", t),
        $(window).width() >= 1200 ? n.css("height", $(window).outerHeight() - t) : n.css("height", "auto"),
        new Swiper(".swiper-container.hero_slider_swiper", { autoplay: { delay: 5e3 }, speed: 1e3, pagination: { el: ".swiper-pagination", clickable: !0 } }),
        (o = $(".range-slider")),
        (s = $(".range-slider__range")),
        (l = $(".range-slider__value")),
        o.each(function () {
            l.each(function () {
                var e = $(this).prev().attr("value");
                $(this).html(e);
            }),
                s.on("input", function () {
                    $(this).next(l).html(this.value), console.log($(this).val()), $("html").css({ fontSize: $(this).val() + "%" });
                });
        }),
        $(".count-statis").each(function () {
            $(this).appear(
                function () {
                    $(this)
                        .prop("Counter", 0)
                        .animate(
                            { Counter: $(this).text() },
                            {
                                duration: 4e3,
                                easing: "swing",
                                step: function (e) {
                                    $(this).text(Math.ceil(e));
                                },
                            }
                        );
                },
                { accX: 0, accY: 0 }
            );
        }),
        $(".form-control").on("blur", function () {
            "" == $(this).val() ? $(this).next("label").removeClass("none") : $(this).next("label").addClass("none");
        });
    let r = $(".bran_atm_loc .to_location");
    window.matchMedia("(orientation: landscape)").matches && $(window).width() <= 992
        ? r.on("click", function () {
              $("html, body").animate({ scrollTop: $("#map").offset().top - 20 }, 500);
          })
        : r.on("click", function () {
              $("html, body").animate({ scrollTop: $("#map").offset().top - ($("header").outerHeight(!0) + 20) }, 1e3);
          }),
        $("input[type=number]").on("keypress", function (e) {
            ((8 != e.which && 0 != e.which && e.which < 48) || e.which > 57) && e.preventDefault();
        }),
        $('input[type=number][max]:not([max=""])').on("input", function (e) {
            var i = $(this),
                n = i.attr("max").length,
                a = i.val();
            a && a.length >= n && i.val(a.substr(0, n));
        }),
        $(function () {
            $(this).bind("contextmenu", function (e) {
                e.preventDefault();
            });
        }),
        (document.onkeydown = function (e) {
            return (
                123 != event.keyCode &&
                (!e.ctrlKey || !e.shiftKey || e.keyCode != "I".charCodeAt(0)) &&
                (!e.ctrlKey || !e.shiftKey || e.keyCode != "C".charCodeAt(0)) &&
                (!e.ctrlKey || !e.shiftKey || e.keyCode != "J".charCodeAt(0)) &&
                (!e.ctrlKey || e.keyCode != "U".charCodeAt(0)) &&
                void 0
            );
        }),
        new Swiper(".swiper-container.product_services_slider_swiper", {
            slidesPerView: 5,
            spaceBetween: 20,
            centeredSlides: !0,
            loop: !0,
            autoplay: { delay: 6e3 },
            speed: 800,
            pagination: { el: ".swiper-pagination", clickable: !0 },
            breakpoints: {
                320: { slidesPerView: 2, spaceBetween: 10, centeredSlides: !1 },
                768: { slidesPerView: 3, spaceBetween: 15, centeredSlides: !0 },
                992: { slidesPerView: 3, spaceBetween: 20 },
                1200: { slidesPerView: 5, spaceBetween: 20 },
            },
        }),
        $(window).width() >= 991 &&
            ((WOW.prototype.addBox = function (e) {
                this.boxes.push(e);
            }),
            new WOW({ boxClass: "wow", animateClass: "animated", offset: 0, mobile: !1, live: !0, callback: function (e) {}, scrollContainer: null }).init());
});
