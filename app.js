const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

let time = document.getElementById('date');

let d = new Date();

time.innerHTML = d.toDateString();