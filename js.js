let aboutSection = document.querySelector('.about');
let spans = document.querySelectorAll('.the-progress span');
window.onscroll = function() {
    if (window.scrollY >= aboutSection.offsetTop - 100) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    }
};
let switcher = document.querySelectorAll('.switcher li');
let imgs = Array.from(document.images);

switcher.forEach((li) => {
    li.addEventListener('click', removeActive);
    li.addEventListener('click', manageImgs);

})

function removeActive() {
    switcher.forEach((li) => {
        li.classList.remove('active');
        this.classList.add('active')
    })
}

function manageImgs() {
    imgs.forEach((img) => {
        img.style.display = 'none';
    })
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display = 'block';
    })
}

// /########################################## 
let switcherToggle = document.querySelector('.style-switcher-toggler');
switcherToggle.addEventListener('click', () => {
    document.querySelector('.style-switcher').classList.toggle('open');
})

window.addEventListener('scroll', () => {
        if (document.querySelector('.style-switcher').classList.contains('open')) {
            document.querySelector('.style-switcher').classList.remove('open');
        }
    })
    // ###############################

let alternateStyle = document.querySelectorAll('.alternate-style');

function setActiveStyle(color) {
    alternateStyle.forEach((style) => {
        if (color === style.getAttribute('title')) {
            style.removeAttribute('disabled');
        } else {
            style.setAttribute('disabled', 'true');
        }
    })
}

// ########################################
let dayNight = document.querySelector('.day-night');
dayNight.addEventListener('click', () => {
    dayNight.querySelector('i').classList.toggle('fa-sun');
    dayNight.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark')
});
window.addEventListener('load', () => {
    if (document.body.classList.contains('dark')) {
        dayNight.querySelector('i').classList.add('fa-sun');
    } else {
        dayNight.querySelector('i').classList.add('fa-moon');
    }
})

// ##################################

// var typed = new Typed('.typing', {
//     strings: ['', 'Front-end Developer', 'front-end Designer'],
//     typeSpeed: 100,
//     backSpeed: 60,
//     loop: true
// })

// #########################################
let listIcon = document.querySelector('.navbar .icon i');
let list = document.querySelector('.main-container .navbar .nav')

listIcon.addEventListener('click', () => {
    if (list.classList.contains('open')) {
        list.classList.remove('open');
    } else {
        list.classList.add('open');
    }
})
window.addEventListener('scroll', () => {
    if (list.classList.contains('open')) {
        list.classList.remove('open');
    }
})