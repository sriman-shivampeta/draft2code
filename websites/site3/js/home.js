﻿setTimeout(function () {
    $(".element0").typed({
        strings: ["apt-get install konquer"],
        typeSpeed: 30, // typing speed
        backDelay: 750, // pause before backspacing
        loop: false, // loop on or off (true or false)
        loopCount: false, // number of loops, false = infinite
        callback: function () { } // call function after typing is done
    });
}, 0);

setTimeout(function () {
    $(".element1").css("display", "inherit");
    $(".element1").typed({
        strings: ["konquer -r /world"],
        typeSpeed: 30, // typing speed
        backDelay: 750, // pause before backspacing
        loop: false, // loop on or off (true or false)
        loopCount: false, // number of loops, false = infinite
        callback: function () { } // call function after typing is done
    });
}, 2000);

setTimeout(function () {
    $(".element2").css("display", "inherit");
    $(".element2").typed({
        strings: ["chown gabriel /world"],
        typeSpeed: 30, // typing speed
        backDelay: 750, // pause before backspacing
        loop: false, // loop on or off (true or false)
        loopCount: false, // number of loops, false = infinite
        callback: function () { } // call function after typing is done
    });
}, 4000);

setTimeout(function () {
    $(".element3").css("display", "inherit");
    $(".element3").typed({
        strings: ["chmod 700 /world"],
        typeSpeed: 30, // typing speed
        backDelay: 750, // pause before backspacing
        loop: false, // loop on or off (true or false)
        loopCount: false, // number of loops, false = infinite
        callback: function () { } // call function after typing is done
    });
}, 6000);

setTimeout(function () {
    $(".element4").css("display", "inherit");
    $(".element4").typed({
        strings: ["chown parents /world/australia"],
        typeSpeed: 30, // typing speed
        backDelay: 750, // pause before backspacing
        loop: false, // loop on or off (true or false)
        loopCount: false, // number of loops, false = infinite
        callback: function () { } // call function after typing is done
    });
}, 8000);