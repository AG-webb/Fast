let lines = document.querySelectorAll('.count-circle-line');

lines.forEach(line => {
    let ctx_2 = line.getContext("2d");

    ctx_2.arc(150, 150, 144, Math.PI, -1);
    ctx_2.strokeStyle = "white";
    ctx_2.lineWidth = 10;
    ctx_2.stroke();
});