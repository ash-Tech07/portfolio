$(document).ready(function() {

    // NAVBAR STICKY ANIMATION
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky")
        } else {
            $(".navbar").removeClass("sticky")
        }
    });
    // NAVBAR STICKY ANIMATION



    // NAVBAR MENU TOGGLER
    $(".menu-btn").click(function() {
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });
    // NAVBAR MENU TOGGLER



    // OWL CAROUSEL CONFIGURATION
    $(".carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
    // OWL CAROUSEL CONFIGURATION



    //TYPING ANIMATION
    var typed = new Typed(".typing", {
        strings: ["WebDeveloper.", "Student.", "Aspirant.", "	Chennaiite.", "MITian."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["WebDeveloper.", "Student.", "Aspirant.", "	Chennaiite.", "MITian."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    //TYPING ANIMATION

});