// 
let circle = document.querySelector(".box");
let x = parseInt(getComputedStyle(circle).left),
    y = parseInt(getComputedStyle(circle).top);
document.addEventListener('keydown',(e) => {
    console.log(e.key);
    if (e.key === "w"||e.key === "W")
        y -= 10;
    else if (e.key === "a"||e.key === "A") 
        x -= 10;
    else if (e.key === "s"||e.key === "S") 
        y += 10
    else if (e.key === "d"||e.key === "D")
        x += 10;
    
    circle.style.top = y + "px";
    circle.style.left = x + "px";
})