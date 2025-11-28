function form_validation() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var msg = document.getElementById("msg");
    var error = ""

    if (name.value == "") {
        error += "You didn't fill out a name\n"
    }

    var erx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!erx.test(email.value)) {
        error += "Invalid email adress\n"
    }

    if (msg.value == "") {
        error += "You didn't write any suggestions!\n"
    
    }

    if (error != "") {
        alert(`ERROR:\n${error}`);
        return false
    }

    return true
}





window.onload = function() {
    document.getElementById("butn").onclick = func1;
}

function func1() {
    document.getElementById("form").innerHTML = "";
    document.getElementById("main_text").innerHTML = "<p>NOOO! what did you do??<br><br>why is my form gone??</p>"

    document.getElementById("butn").onclick = func2;
    document.getElementById("butn").style.marginTop = "10%"
}

function func2() {
    const root = document.documentElement;
    root.style.setProperty("--bgc0", "rgba(116, 116, 116, 1)");
    root.style.setProperty("--bgc1", "rgb(218, 218, 218)");
    root.style.setProperty("--bgc2", "rgba(163, 163, 163, 1)");
    root.style.setProperty("--bgc3", "rgba(219, 219, 219, 1)");
    root.style.setProperty("--bgc4", "rgba(186, 186, 186, 1)");
    root.style.setProperty("--txtc", "black");

    document.getElementById("main_text").innerHTML = "<p>AHHH! MY EYES!!<br><br> Is this light mode?! I hate light mode!!</p>"
    document.getElementById("ftext").innerText = "@ICan'tBelieveYou'veDoneThis"

    document.getElementById("butn").onclick = func3;
}

function func3() {

}
