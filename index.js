function randomizeButtonPositions() {
    let buttons = document.querySelectorAll("button");
    buttons.forEach( (b) => {
        b.style.left = (Math.random()*80+10)+"%";
        b.style.top = (Math.random()*80+10)+"%";
    });
}