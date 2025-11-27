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
    this.document.getElementById("butn").onclick = func1;
}

function func1() {
    document.getElementById("form").innerHTML = "";
    document.getElementById("main_text").innerHTML = "<p>NOOO! what did you do??<br><br>why is my form gone??</p>"
}
