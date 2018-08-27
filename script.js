document.onload = function(){ responsiveVoice.speak("test")};
    //    check session
    var sessionVisited = sessionStorage.getItem("sessionVisited");
    if (sessionVisited == null) {
        responsiveVoice.speak("Welcome to relaxation.", "UK English Male", {pitch: 1.2});
    }
    sessionStorage.setItem("sessionVisited", true);

    //additional voice output
//    setTimeout(intro, 1000);
//    setTimeout(voiceOne, 10000);
//    setTimeout(voiceTwo, 30000);
//    setTimeout(voiceThree, 60000);
//    setTimeout(voiceFour, 100000);

    function intro() {
        responsiveVoice.speak("Let us get started.", "UK English Male");
    }

    function voiceOne() {
        responsiveVoice.speak("You are beginning to feel relaxed.", "UK English Male");
    }

    function voiceTwo() {
        responsiveVoice.speak("Just a few more breaths.", "UK English Male");
    }

    function voiceThree() {
        responsiveVoice.speak("Are you not feeling better?", "UK English Male");
    }

    function voiceFour() {
        responsiveVoice.speak("Now, back to work.", "UK English Male");
    }

    //    check local storage
    var time = window.localStorage.getItem("timeInLS");
    if (time == null) {
        window.localStorage.setItem("timeInLS", 7);
    }

    //    convert the number to bpm
    var animationTime = 60 / time;

    //    autorun the animation
    document.getElementById("circle").style.animation = "grow " + animationTime + "s infinite";
    document.getElementById("inhale").style.animation = "inhale " + animationTime + "s infinite";
    document.getElementById("exhale").style.animation = "exhale " + animationTime + "s infinite";

    // user taps + button
    var touchPlus = document.getElementById("plus");
    touchPlus.addEventListener("touchend", plus, false);
    function plus() {
        var time = window.localStorage.getItem("timeInLS");
        var i = parseFloat(1);
        var updatedTime = parseFloat(time) + i;
        if (updatedTime < 6 || updatedTime > 11) {
            document.getElementById("timeReadingTwo").innerHTML = "The range is 6-11";
            setTimeout(clearMessage, 2000);
            return;
        }
        window.localStorage.setItem("timeInLS", updatedTime);
        document.getElementById("timeReading").innerHTML = updatedTime;
        var animationTime = 60 / updatedTime;
        document.getElementById("circle").style.animation = "grow " + animationTime + "s infinite";
        document.getElementById("inhale").style.animation = "inhale " + animationTime + "s infinite";
        document.getElementById("exhale").style.animation = "exhale " + animationTime + "s infinite";
    }

    // user taps - button
    var touchMinus = document.getElementById("minus");
    touchMinus.addEventListener("touchend", minus, false);
    function minus() {
        var time = window.localStorage.getItem("timeInLS");
        var updatedTime = time - 1;
        if (updatedTime < 6 || updatedTime > 11) {
            document.getElementById("timeReadingTwo").innerHTML = "The range is 6-11";
            setTimeout(clearMessage, 2000);
            return;
        }
        window.localStorage.setItem("timeInLS", updatedTime);
        document.getElementById("timeReading").innerHTML = updatedTime;
        var animationTime =  60 / updatedTime;
        document.getElementById("circle").style.animation = "grow " + animationTime + "s infinite";
        document.getElementById("inhale").style.animation = "inhale " + animationTime + "s infinite";
        document.getElementById("exhale").style.animation = "exhale " + animationTime + "s infinite";
    }

    // clears message about the range 6-11
    function clearMessage() {
        document.getElementById("timeReadingTwo").innerHTML = "";
    }

    // output the current time to the div
    document.getElementById("timeReading").innerHTML = time;