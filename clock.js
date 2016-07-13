




$(document).ready(function() {
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ampm = amOrPm(h);
    h = convertHours(h);
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    background(s);
    textColor(m);
    fontSize(s);
     $("#txt").html(h + ":" + m + ":" + s + ampm)


    setTimeout(startTime, 500);
  }

  function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i;
  }

  function convertHours(i) {
    if (i > 12) {
        i = i - 12;
    }
    return i;
  }

  function amOrPm(i) {
    if (i < 12) {
        return "AM";
    } else {
        return "PM";
    }
  }

  startTime();

var color = "#"

function background(s) {
    if ( s % 2 == 0 ) {
    $("body").css("background", "lightblue")
    } else {$("body").css("background", "pink")

} 

}




    

function textColor(m) {
    if ( m % 2 == 1 ) {
    $ ("#txt").css("color", "green")
    } else { $ ("#txt").css("color", "blue")}

}

function fontSize(s) {
    if (s % 2 == 0 ){
        $("#txt").css("font-family", "verdana")
    } else { $("#txt").css("font-family", "papyrus")}
  
}


 

});
