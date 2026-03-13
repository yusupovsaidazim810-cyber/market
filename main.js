// window.addEventListener("load", function () {
//     setTimeout(function () {
//         document.getElementById("loader").style.display = "none";
//     }, 2000);
// });

function darkMode() {
    document.body.classList.toggle("dark");
}


const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 100; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        size: Math.random() * 3
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
    });

    requestAnimationFrame(animate);
}

animate();


document.addEventListener("mousemove", function (e) {

    let dot = document.createElement("div");
    dot.className = "cursor-dot";

    dot.style.left = e.pageX + "px";
    dot.style.top = e.pageY + "px";

    document.body.appendChild(dot);

    setTimeout(() => {
        dot.remove();
    }, 500);

});



// const canvas = document.getElementById("stars");
// const ctx = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// let stars = [];

// for (let i = 0; i < 150; i++) {
//     stars.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         size: Math.random() * 2,
//         speed: Math.random() * 1
//     });
// }

// function animate() {

//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     ctx.fillStyle = "white";

//     stars.forEach(star => {

//         star.y += star.speed;

//         if (star.y > canvas.height) {
//             star.y = 0;
//         }

//         ctx.beginPath();
//         ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
//         ctx.fill();

//     });

//     requestAnimationFrame(animate);
// }

// animate();






