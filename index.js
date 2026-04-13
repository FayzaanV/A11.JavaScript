let score = 0;

function randomizeButtonPositions() {
    let buttons = document.querySelectorAll("button");
    buttons.forEach( (b) => {
        b.style.left = (Math.random()*80+10)+"%";
        b.style.top = (Math.random()*80+10)+"%";
    });
}

function handleDessertClick() {
    score++;
    let scoreCount = document.getElementById("score");
    scoreCount.innerHTML ="<p id=\"score\">Score: " + score + "</p>";
    randomizeButtonPositions();
}

function handleDesertClick() {
    score--;
    randomizeButtonPositions();
    let scoreCount = document.getElementById("score");
    scoreCount.innerHTML = "<p id=\"score\">Score: " + score + "</p>";
}