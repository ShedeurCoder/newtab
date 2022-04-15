document.getElementById('search').onsubmit = function() {
    const sv = document.getElementById('sbar').value;
    window.location.href = "https://google.com/search?q=" + sv.replace(" ", "+");
    return false;
}
document.getElementById('yt').onsubmit = function() {
    const sv = document.getElementById('ytbar').value;
    window.location.href = "https://youtube.com/results?search_query=" + sv.replace(" ", "+");
    return false;
}
function updateTime() {
    const time = document.getElementById("time")
    const greet = document.getElementById("greet");
    let day = new Date;
    let hr = day.getHours();
    let mi = day.getMinutes();
    let greeting;
    let miShow = "";

    //GREET
    if (hr < 12) {
        greeting = "Good morning, Shedeur";
    } else if (hr == 12) {
        greeting = "Good noon, Shedeur";
    } else if (hr > 12 && hr < 18) {
        greeting = "Good afternoon, Shedeur";
    } else if (hr > 18) {
        greeting = "Good Morning, Shedeur";
    } else {
        greeting = "Hello, Shedeur";
    }

    //calculate not military time
    if (hr > 12) {
        hr = hr - 12;
    }
    if (hr == 0) {
        hr = 12;
    }

    //format minutes
    if (mi < 10) {
        miShow = `0${mi}`
    } else {
        miShow = mi;
    }

    //show time
    time.innerText = `${hr}:${miShow}`;
    greet.innerText = greeting;
}
setInterval(updateTime, 500)