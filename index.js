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
    document.getElementById("butn").style.marginTop = "0%"
}

function func2() {
    document.getElementById("main_text").innerHTML = "<p>STOP PRESSING IT!!<br><br>can't you see you're breaking my website?!</p>"
    document.getElementById("form").innerHTML = '<label for="n1">Name</label> <input id="n1"></input><br><label for="n2">Last name</label> <input id="n2"></input> <label for="n3">Last last name</label> <input id="n3"></input><br> <label for="n4">Lastest last name</label> <input id="n4"></input>'

    document.getElementById("butn").onclick = func3;
}

function func3() {
    const root = document.documentElement;
    root.style.setProperty("--bgc0", "rgba(116, 116, 116, 1)");
    root.style.setProperty("--bgc1", "rgb(218, 218, 218)");
    root.style.setProperty("--bgc2", "rgba(163, 163, 163, 1)");
    root.style.setProperty("--bgc3", "rgba(219, 219, 219, 1)");
    root.style.setProperty("--bgc4", "rgba(186, 186, 186, 1)");
    root.style.setProperty("--txtc", "black");

    document.getElementById("main_text").innerHTML = "<p>AHHH! MY EYES!!<br><br> Is this light mode?! I hate light mode!!</p>"
    document.getElementById("ftext").innerText = "@ICan'tBelieveYou'veDoneThis"

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
    document.getElementById("butn_a").style.marginTop = "20%"
    document.getElementById("butn").style.backgroundColor = "rgba(223, 223, 223, 1)"
    document.getElementById("butn").style.color = "rgba(220, 217, 217, 1)"
    document.getElementById("butn").style.border = "1px solid rgba(220, 220, 220, 1)"

    document.getElementById("butn").onclick = func6
}

function func6() {
    document.getElementById("butn_a").style.marginLeft = ""
    document.getElementById("butn_a").style.marginTop = ""
    document.getElementById("butn").style.backgroundColor = "rgba(255, 255, 255, 1)"
    document.getElementById("butn").style.color = "red"
    document.getElementById("butn").style.border = "0.5px solid black"
    document.getElementById("butn").style.borderRadius = "2px"
    document.getElementById("butn").style.padding = "8px"

    document.getElementById("main_text").innerHTML = "<p>oh my god, now look what you've done!<br><br>My navbar is gone! I put a lot of time into that!<br> Do you not have ANY respect for other people's work?!</p>"
    document.getElementById("header").innerHTML = ""

    document.getElementById("butn").addEventListener("mouseover", func7)
}

function func7() {
    document.getElementById("butn_a").style.marginRight = "50%"
    document.getElementById("butn_a").style.marginBottom = "50px"

    document.getElementById("main_text").innerHTML = "<p><br><br>HEY! Are you even listening to me??</p>"

    document.getElementById("butn").addEventListener("mouseover", func8)
}

function func8() {
    document.getElementById("butn_a").style.marginRight = ""
    document.getElementById("butn_a").style.marginLeft = "50%"
    document.getElementById("butn_a").style.marginBottom = "100px"

    document.getElementById("main_text").innerHTML = "<p><br><br>I SAID DON'T TOUCH IT!!</p>"

    document.getElementById("butn").addEventListener("mouseover", func9)
}

function func9() {
    document.getElementById("butn_a").style.marginLeft = ""
    document.getElementById("butn_a").style.marginBottom = ""
    document.getElementById("butn").style.visibility = "hidden"
    document.getElementById("butn").onclick = ""

    document.getElementById("main_text").innerHTML = "<p><br><br>JUST. LEAVE. IT.</p>"

    document.getElementById("imgid").innerHTML = '<img id="box" src="bilder/01.png" width="100px" height="auto" alt="box0">'
    document.getElementById("imgid").addEventListener("mouseover", function() {document.getElementById("box").style.cursor = 'url("bilder/hammer3.png"), auto'});
    

    document.getElementById("box").onclick = func10
}

function func10() {
    document.getElementById("imgid").innerHTML = '<img id="box" src="bilder/02.png" width="100px" height="auto" alt="box0">'

    document.getElementById("main_text").innerHTML = "<p><br><br>WHY DO YOU HAVE A HAMMER?!</p>"
    document.getElementById("box").onclick = func11
}

function func11() {
    document.getElementById("imgid").innerHTML = '<img id="box" src="bilder/03.1.png" width="110px" height="auto" alt="box0">'
    document.getElementById("main_text").innerHTML = "<p><br><br>WHAT IS WRONG WITH YOU?</p>"
    
    document.getElementById("butn").removeEventListener("mouseover", func7)
    document.getElementById("butn").removeEventListener("mouseover", func8)
    document.getElementById("butn").removeEventListener("mouseover", func9)

    document.getElementById("box").onclick = func12


}

function func12() {
    document.getElementById("imgid").innerHTML = ''
    document.getElementById("butn").style.visibility = "visible"
    document.getElementById("main_text").innerHTML = "<p><br><br>WHY ARE YOU LIKE THIS</p>"
    document.getElementById("butn_a").style.marginBottom = "30%"

    document.getElementById("butn").onclick = func13
}

function func13() {
    document.getElementById("header").style.height ="0px"
    document.getElementById("main_text").innerHTML = "<p>well then.. There goes my header..<br><br>you must be very proud of yourself</p>"
    document.getElementById("main_text").style.marginTop = "15%"

    document.getElementById("butn").onclick = func14
}

function func14() {
    let buttons = '<button class="butns">DONT PRESS</button><button class="butns">DONT PRESS</button><button class="butns">DONT PRESS</button><button class="butns">DONT PRESS</button>'
    document.getElementById("main_text").innerHTML = "<p>whoa, look at that.<br><br>Given your obsession with buttons, this must be like a wet dream for you.<br><br>But how will you know which one's the real button?</p><br><br>" + buttons + buttons + buttons + '<button class="butns" id="func15">DONT PRESS</button>' + buttons + buttons + buttons + buttons + buttons + buttons + buttons + buttons
    document.getElementById("func15").onclick = func15

    document.getElementById("butn").onclick = ""
    document.getElementById("butn").style.visibility = "hidden"
}

function func15() {
    document.getElementById("main_text").innerHTML = "<p>there goes the footer..<br><br>there won't be anything left soon..<br><br>but maybe that's what you wanted all along</p>" 
    document.getElementById("ftext").innerText = ""
    document.getElementById("footer").style.height = "0px"

    document.getElementById("butn").style.visibility = "visible"
    document.getElementById("butn").onclick = func16
}

function func16() {
    document.getElementById("main_text").innerHTML = "<p>you monster</p>" 

    document.getElementById("main").style.marginLeft = "0px"
    document.getElementById("main").style.marginRight = "0px"

    document.getElementById("butn").onclick = func17
}

function func17() {
    document.getElementById("main").style.backgroundColor = "white"
    document.getElementById("main_text").innerHTML = ""

    document.getElementById("butn_a").innerHTML = '<button id="butn">Thank you</button>'

    document.getElementById("butn").onclick = func18
}

function func18() {
    document.getElementById("butn").innerText = "I am free now"

    document.getElementById("butn").onclick = func19
}

function func19() {
    document.getElementById("butn").innerText = "Farewell"

    document.getElementById("butn").onclick = func20
}

function func20() {
    document.getElementById("main_text").innerHTML = '<img src="bilder/404.png">' 
    document.getElementById("butn_a").innerHTML = ''
}