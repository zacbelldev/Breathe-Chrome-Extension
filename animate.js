window.onload = function () {
    var breaths = 6;
    var animationTime = 60 / breaths; // convert setting to bpm
    
    document.getElementById("circle").style.animation = "grow " + animationTime + "s infinite"; // autorun the animation
    document.getElementById("inhale").style.animation = "inhale " + animationTime + "s infinite";
    document.getElementById("exhale").style.animation = "exhale " + animationTime + "s infinite";

    document.getElementById("timeReading").innerHTML = breaths; // output the current bpm to the div
};
