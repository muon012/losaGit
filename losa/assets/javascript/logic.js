function initMap() {
    // The location of LOSA
    var losa = { lat: 33.8150238, lng: -117.8851785 };
    // The map, centered at LOSA
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 14, center: losa });
    // The marker, positioned at LOSA
    var marker = new google.maps.Marker({ position: losa, map: map });
}
$(document).ready(function () {

    // Window sizes for selecting the right navbar height;
    var twoOhTwo = window.matchMedia("(max-width: 202px)");
    var nineNineOne = window.matchMedia("(max-width: 991px)");
    var sevenSixEight = window.matchMedia("(min-width: 768px)");

    $("#losaName").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 300);
    });

    if (twoOhTwo.matches) { //From 0-202x window width;
        var navbarHeight = 178.922;
        
        $("#galleryLink").click(function () {
            $("html, body").animate({scrollTop: $("#galleryDiv").offset().top - navbarHeight}, 200);
        });
        
        $("#locationLink").click(function () {
            $("html, body").animate({scrollTop: $("#locationDiv").offset().top - navbarHeight}, 200);
        });
        
        $("#contactLink").click(function () {
            $("html, body").animate({scrollTop: $("#contactDiv").offset().top - navbarHeight}, 200);
        });
    } 
    else if(nineNineOne.matches) { //From 203px-991px window width;
        $("#submitButtonDiv").addClass("d-flex justify-content-end");        

        if (sevenSixEight.matches){ //From 203px-991px;
            $(".form-group").addClass("w-75");
            $("#submitButtonDiv").addClass("w-75 d-flex justify-content-end");        

        }
        var navbarHeight = 138.922;
        
        $("#galleryLink").click(function () {
            $("html, body").animate({scrollTop: $("#galleryDiv").offset().top - navbarHeight}, 200);
        });
        
        $("#locationLink").click(function () {
            $("html, body").animate({scrollTop: $("#locationDiv").offset().top - navbarHeight}, 200);
        });
        
        $("#contactLink").click(function () {
            $("html, body").animate({scrollTop: $("#contactDiv").offset().top - navbarHeight}, 200);
        });
    }
    else { //From 992px and on;
        var navbarHeight = 57.922;
        $("#formName").addClass("w-50");
        $("#formEmail").addClass("w-50");
        $("#formMessage").addClass("w-50");
        $("#submitButtonDiv").addClass("w-50 d-flex justify-content-end");        

        $("#galleryLink").click(function () {
            $("html, body").animate({scrollTop: $("#galleryDiv").offset().top - navbarHeight}, 200);
        });
        
        $("#locationLink").click(function () {
            $("html, body").animate({scrollTop: $("#locationDiv").offset().top - navbarHeight}, 200);
        });
        
        $("#contactLink").click(function () {
            $("html, body").animate({scrollTop: $("#contactDiv").offset().top - navbarHeight}, 200);
        });
    }
})

