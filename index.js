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
    document.getElementById("main_text").innerHTML = "<p>STOP PRESSING IT!!<br><br>can't you see you're breaking my website?!</p>"
    document.getElementById("form").innerHTML = '<label for="n1">Name</label> <input id="n1"></input><br><label for="n2">Last name</label> <input id="n2"></input> <label for="n3">Last last name</label> <input id="n3"></input><br> <label for="n3">Lastest last name</label> <input id="n3"></input>'

    document.getElementById("butn").onclick = func4;
}

function func4() {
    document.getElementById("main_text").innerHTML = "<p>ボタンを押すのをやめてください!!<br><br>このウェブサイトには本当に一生懸命取り組んだ</p>"
    document.getElementById("a1").innerText = "ホーム"
    document.getElementById("a2").innerText = "何か"
    document.getElementById("a3").innerText = "この"
    document.getElementById("a4").innerText = "その"
    document.getElementById("a5").innerText = "えええ"
    document.getElementById("form").innerHTML = '<img src="bilder/face_angry_man4.png" alt="angry face" style="width: 150px; height: auto">'
    document.getElementById("butn").innerText = "押さない!!"

    document.getElementById("butn").onclick = func5;
}

function func5() {
    document.getElementById("main_text").innerHTML = "<p>okay, that last one was weird...<br><br>Listen, I don't know what you're obsession is with this button, <br> but I've hidden it now, so could you just please go away?</p>"
    document.getElementById("form").innerHTML = ""
    document.getElementById("a1").innerText = "HOME"
    document.getElementById("a2").innerText = "ELSE"
    document.getElementById("a3").innerText = "THIS"
    document.getElementById("a4").innerText = "THAT"
    document.getElementById("a5").innerText = "OTHER"
    document.getElementById("butn").innerText = "DON'T PRESS!"
    document.getElementById("butn_a").style.marginLeft = "50%"
    document.getElementById("butn").style.marginTop = "20%"
    document.getElementById("butn").style.backgroundColor = "rgba(223, 223, 223, 1)"
    document.getElementById("butn").style.color = "rgba(220, 217, 217, 1)"
    document.getElementById("butn").style.border = "1px solid rgba(220, 220, 220, 1)"
   
    document.getElementById("butn").onclick = func6;
}

function func6() {
    document.getElementById("butn_a").style.marginLeft = "0%"
    document.getElementById("butn").style.marginTop = "10%"
    document.getElementById("butn").style.backgroundColor = "rgba(255, 255, 255, 1)"
    document.getElementById("butn").style.color = "red"
    document.getElementById("butn").style.border = "0.5px solid black"
    document.getElementById("butn").style.borderRadius = "2px"
    document.getElementById("butn").style.padding = "8px"

    document.getElementById("main_text").innerHTML = "<p><br><br></p>"
}