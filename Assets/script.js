
const A1 = document.getElementsByClassName('a1');
const A2 = document.getElementsByClassName('a2');
const A3 = document.getElementsByClassName('a3');
const A4 = document.getElementsByClassName('a4');
const land = document.getElementById("land");
const timeDisplay = document.getElementById("timer");
const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");
const q3 = document.getElementById("q3");
const q4 = document.getElementById("q4");
const start = document.getElementById("start");
const hs = document.getElementById("hs");
const hsp = document.getElementById("hsp");
const L = document.getElementById("L");
var score = document.getElementById("score");
const save = document.getElementById("save");
const hsf = document.getElementById("hsf");
const hss = document.getElementById("hss");
const restart = document.getElementById("restart");
const initials = document.getElementById("initials")
score = 0;
let sec = 60;
let intervalHandle

// sub.id = 'res';
// sub.className = 'res';

const a1 = [
    {
        a: "answer1",
        b: "answer2",
        c: "answer3",
        d: "answer4",
        response: "",
        correct: "b"
    }
];

const a2 = [
    {
        a: "answer1",
        b: "answer2",
        c: "answer3",
        d: "answer4",
        response: "",
        correct: "b"
    }
];

const a3 = [
    {
        a: "answer1",
        b: "answer2",
        c: "answer3",
        d: "answer4",
        response: "",
        correct: "b"
    }
];

const a4 = [
    {
        a: "answer1",
        b: "answer2",
        c: "answer3",
        d: "answer4",
        response: "",
        correct: "b"
    }
];

function gameover(){

    console.log(score);
    console.log(sec);

    q1.hidden = true;
    q2.hidden = true;
    q3.hidden = true;
    q4.hidden = true;
    timeDisplay.hidden = true;
    newmessage = score + " And your time left over " + sec + " seconds";
    L.hidden = false;
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.innerHTML = newmessage;
    clearInterval(intervalHandle);
}

function tick(){
	var timeDisplay = document.getElementById("timer");
	var message = sec.toString() + " seconds remaining????";

	timeDisplay.innerHTML = message;

	if (sec === 0){
		clearInterval(intervalHandle);
        gameover();
	}
	sec--;
};

save.addEventListener("click", function(){
    L.hidden = true;
    hsf.hidden = false;
})


restart.addEventListener("click", function() {
    window.location.reload();
})


function insert(event) {

    event.preventDefault();
    let init = $(`input[name="init"]`).val()
    localStorage.setItem(init,sec);

    for(i=0; i < localStorage.length; i++){
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
    
        const Ascore = document.createElement("li");
    
        Ascore.append(key,"-", value);
    
        hsp.append(Ascore);
    }
    hsp.hidden = false;

}

// const form = document.querySelector("initials")

initials.addEventListener("click", function() {
    insert()
});

function startCountdown(){
	intervalHandle = setInterval(tick, 1000);
}

start.addEventListener("click", function() {
    startCountdown()
    quest1()
}) 

function quest1() {
    const sub = document.createElement('sub');
    sub.id = 'res';
    sub.className = 'res';
    score.hidden = false
    q1.hidden = false;
    land.hidden = true
    const allA1 = document.querySelectorAll('.a1');
    let right = false

    document.getElementById("correct1").addEventListener("click", function() {
         right = true
     });

    allA1.forEach(el => el.addEventListener("click", function() {
        if( right ) {
            score++;
            a1.response = "Correcto!!";
            sub.innerHTML = a1.response;
            document.body.appendChild(sub);
            quest2();
            sub.remove();
            alert("Yessss")

        }

       else{
        sec--;
        score--;
        a1.response = "Falso Bro";
        sub.innerHTML = a1.response;
        document.body.appendChild(sub);
        alert("Nooo")   
        } }
    ));
};
function quest2() {
    const sub = document.createElement('sub');
    sub.id = 'res';
    sub.className = 'res';
    q1.hidden = true;
    q2.hidden = false;
    const allA2 = document.querySelectorAll('.a2');
    let right = false

    document.getElementById("correct2").addEventListener("click", function() {
         right = true
     });

    allA2.forEach(el => el.addEventListener("click", function() {
        if( right ) {
            score++;
            a2.response = "You're doing great1";
            sub.innerHTML = a2.response;
            document.body.appendChild(sub);
            quest3();
            sub.remove();
            alert("Yessss")

        }

       else{
        score--;
        a2.response = "Homie you need some cheesecake";
        sub.innerHTML = a2.response;
        document.body.appendChild(sub);
        alert("Nooo")   
        } }
    ));
}
function quest3() {
    const sub = document.createElement('sub');
    sub.id = 'res';
    sub.className = 'res';
    q2.hidden = true;
    q3.hidden = false;
    const allA3 = document.querySelectorAll('.a3');
    let right = false

    document.getElementById("correct3").addEventListener("click", function() {
         right = true
     });

    allA3.forEach(el => el.addEventListener("click", function() {
        if( right ) {
            score++;
            a3.response = "One more baby";
            sub.innerHTML = a3.response;
            document.body.appendChild(sub);
            quest4();
            sub.remove();
            alert("Yessss")

        }

       else{
        score--;
        a3.response = "Another slice!";
        sub.innerHTML = a3.response;
        document.body.appendChild(sub);
        alert("Nooo")   
        } }
    ));
}
function quest4() {
    const sub = document.createElement('sub');
    sub.id = 'res';
    sub.className = 'res';
    q3.hidden = true;
    q4.hidden = false;
    const allA4 = document.querySelectorAll('.a4');
    let right = false

    document.getElementById("correct4").addEventListener("click", function() {
         right = true
     });

    allA4.forEach(el => el.addEventListener("click", function() {
        if( right ) {
            score++;
            a4.response = "Finally over with";
            sub.innerHTML = a4.response;
            document.body.appendChild(sub);
            gameover();
            sub.remove();
        }

       else{
        score--;
        a4.response = "Come on man, last Q";
        sub.innerHTML = a4.response;
        document.body.appendChild(sub);
        alert("Nooo")   
        } }
    ));
}