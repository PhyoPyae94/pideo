$(document).ready(function () {

    $(".sideNav").on("click", function() {

        let main = $("#mainSectionContainer");
        let nav = $("#sideNavContainer");
    
        if(main.hasClass('leftPadding')) {
            nav.hide();
        } else {
            nav.show();
        }

        main.toggleClass("leftPadding");
    });


});