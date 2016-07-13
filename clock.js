// $ ("#txt").css("color", "blue");



$(document).ready(function () { 
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ampm = isAMorPM ();
    h = correctTime(h);
    h = checkTime (h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s + ampm;
    var t = setTimeout(startTime, 500);


}


function isAMorPM(i) {
    if (i >12) {
        return "pm";
    } else {
        return "am";
    }
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function correctTime(i) {
    if (i > 12) {
        i = i - 12;

    }
    return i;
}

});
