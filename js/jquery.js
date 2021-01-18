$(document).ready(function() {
    $(".text-menu > a.a1").click(function() {
        $(".text-menu > a.a1").css({ "transition": "all 0.2s ease-in 0.2s" })
        $(".text-menu > a.a1").css({ "background-color": "rgb(64, 133, 224,0.7)", "color": "white", "border-radius": "5px" })
    })
    $(".text-menu > a.a2").click(function() {
        $(".text-menu > a.a2").css({ "transition": "all 0.2s ease-in 0.2s" })
        $(".text-menu > a.a2").css({ "background-color": "rgb(64, 133, 224,0.7)", "color": "white", "border-radius": "5px" })
    })

    $(".text-menu > a.a3").click(function() {
        $(".text-menu > a.a3").css({ "transition": "all 0.2s ease-in 0.2s" })
        $(".text-menu > a.a3").css({ "background-color": "rgb(64, 133, 224,0.7)", "color": "white", "border-radius": "5px" })
    })
    $(".text-menu > a.a1, .text-menu > a.a2, .text-menu > a.a3").mouseleave(function() {
        $(".text-menu > a.a1, .text-menu > a.a2, .text-menu > a.a3").css({ "background-color": "", "color": "", "border-radius": "" })
    })
    $("#logo-sabad").click(function() {
        $("#logo-sabad").css({ "transition": "all 0.2s ease-in 0.2s" })
        $("#logo-sabad").css({ "background-color": "rgb(64, 133, 224,0.7)", "color": "white", "border-radius": "5px" })
    })
    $("#logo-sabad").mouseleave(function() {
        $("#logo-sabad").css({ "background-color": "", "color": "", "border-radius": "" })
    })
    $(".menu-item>ul>li").hover(function() {
        var existUl = $(this).find('ul').length;
        if (existUl > 0) {
            $(".showContentMenu").slideDown(1000);
            $(this).find('ul').css("display", "block");
        } else {
            $(".showContentMenu").slideUp(1000);
        }

    }, function() {
        $(this).find('ul').css("display", "none")
    })
    $(".menu-item>ul").mouseleave(function() {
        $(".showContentMenu").slideUp(1000);
    })
    $(".slidedown").hover(function() {
            $(this).find('ul').slideDown(800);
        },
        function() {
            $(this).find('ul').slideUp(1000);

        })

    $(".sls").cycle({ fx: "turnRight", timeout: 100, next: ".next", prev: ".prev" });

    $(".sfdnap").hover(function() {
        $(this).find(".next,.prev").animate({ opacity: 1 }, 1000);
    }, function() {
        $(this).find(".next,.prev").animate({ opacity: 0 }, 1000);
    });

    var Hour = 4,
        Minuts = 59,
        Seconds = 60;

    setInterval(function() {

        Seconds -= 1;
        if (Seconds <= 0) {
            Seconds = 59;
            Minuts -= 1;
        }
        if (Minuts <= 0) {
            Minuts = 59;
            Hour -= 1;
        }
        document.getElementById('S1').innerHTML = Hour;
        document.getElementById('S2').innerHTML = Minuts;
        document.getElementById('S3').innerHTML = Seconds;
    }, 1000);
    $(".mv > ul > li").hover(function() {
        $(this).find('#explain').show(800);
        $(this).find('#explain').animate({ opacity: 0.8 }, 1000);
    }, function() {
        $(this).find('#explain').animate({ opacity: 0 }, 1000);
    });

    function validdateForm() {
        var un = document.loginform.user.value;
        var pw = document.loginform.psw.value;
        if ((un == "username") && (pw == "password")) {
            window.location = "main.html";
            alert("login successful")
            return true;
        } else {
            alert("Login was unsuccessful, please check your username and password");
            return false;
        }
    }
});