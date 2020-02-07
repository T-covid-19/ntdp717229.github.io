$(function() {

    $("#goTop").click(function() {

        $("html,body").animate({
            scrollTop: 0
        }, 800);

        //$("html,body").animate({scrollTop:0},900,"easeOutBounce");

        return false;

    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 150) {
            $('#gotop').fadeIn("fast");
        } else {
            $('#gotop').stop().fadeOut("fast");
        }
    });
});
$(window).scroll(function() {
        if ($(this).scrollTop() > 3250 ) {
            $('#handna').fadeOut("fast");
        } else if ($(this).scrollTop() > 650 ){
            $('#handna').stop().fadeIn("fast");
        }
        else  {
            $('#handna').stop().fadeOut("fast");
        }
    });


$(window).scroll(function() {
    if ($(this).scrollTop() > 655) {
        $('#nav').fadeIn("fast");
    } else {
        $('#nav').stop().fadeOut("fast");
    }
});;
$(function() {
    //control display of goTop button and motion
    $("#go1").click(function() {
        jQuery("html,body").animate({
            scrollTop: 120
        }, 800);
    });
}, )
$(function() {
    //control display of goTop button and motion
    $("#go2").click(function() {
        jQuery("html,body").animate({
            scrollTop: 700
        }, 800);
    });
}, )
$(function() {
    //control display of goTop button and motion
    $("#go3").click(function() {
        jQuery("html,body").animate({
            scrollTop:2600
        }, 800);
    });
}, )
$(function() {
    //control display of goTop button and motion
    $("#go4").click(function() {
        jQuery("html,body").animate({
            scrollTop: 4900
        }, 800);
    });
}, )



//以下領養頁
$(function() {
            //control display of goTop button and motion
            $("#s1").click(function() {
                jQuery("html,body").animate({
                    scrollTop: 850
                }, 800);
            });
        }, )
        $(function() {
            //control display of goTop button and motion
            $("#s2").click(function() {
                jQuery("html,body").animate({
                    scrollTop: 1300
                }, 800);
            });
        }, )
        $(function() {
            //control display of goTop button and motion
            $("#s3").click(function() {
                jQuery("html,body").animate({
                    scrollTop: 1750
                }, 800);
            });
        }, )
        $(function() {
            //control display of goTop button and motion
            $("#s4").click(function() {
                jQuery("html,body").animate({
                    scrollTop: 2200
                }, 800);
            });
        }, )
        $(function() {
            //control display of goTop button and motion
            $("#s5").click(function() {
                jQuery("html,body").animate({
                    scrollTop: 2650
                }, 800);
            });
        }, )
        $(function() {
            //control display of goTop button and motion
            $("#s6").click(function() {
                jQuery("html,body").animate({
                    scrollTop: 3100
                }, 800);
            });
        }, )
      