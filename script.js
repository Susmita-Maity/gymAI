var typed= new Typed(".text",{
    strings: ["Your Fitness Journey Starts Here...","Elevate Your Fitness.","Transform Your Body", "Transform Your Life."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const animatedDivs = document.querySelectorAll('#animated-div');

const revealDivs = () => {
    animatedDivs.forEach(div => {
        const divTop = div.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (divTop < windowHeight) {
            div.classList.add('show');
        }
    });
};

const fixedDiv = document.querySelector('#stick');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const divHeight = fixedDiv.offsetHeight;

  // Calculate the maximum scroll position 
    const maxScroll = document.body.scrollHeight - windowHeight - divHeight;

  // Position the div based on the scroll position
    if (scrollPosition >= maxScroll) {
        fixedDiv.style.bottom = '110px'; 
    } else {
        fixedDiv.style.bottom = `${scrollPosition + 20}px`; 
    }
});





window.addEventListener('scroll', revealDivs);
revealDivs(); // Trigger the initial reveal on page load
document.addEventListener("DOMContentLoaded", function
    (event) {
    let circle = document.querySelectorAll('.circle');
    circle.forEach(function (progress) {
        let degree = 0;
        var targetDegree = parseInt(progress.getAttribute
            ('data-degree'));
        let color = progress.getAttribute('data-color');
        let number = progress.querySelector('.number');
        var interval = setInterval(function () {
            degree += 1;
            if (degree > targetDegree) {
                clearInterval(interval);
                return;
            }
            progress.style.background = `conic-gradient(${color} ${degree}%, #222 0%)`;
            number.innerHTML = degree + '<span>%</span>';
            number.style.color = color;
        }, 50)
    })
});