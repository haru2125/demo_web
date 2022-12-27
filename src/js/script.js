window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');

    if (window.scrollY > 713) {
        if (!navbar.classList.contains('scrolled')) {
            navbar.classList.add('scrolled');
        }
    } else {
        if (navbar.classList.contains('scrolled')) {
            navbar.classList.remove('scrolled');
        }
    }

    if (window.scrollY > 700) {
        document.getElementById('introduction').classList.add('active');
    }

    if (window.scrollY > 1000) {
        document.getElementById('about_inner').classList.add('active');
        document.getElementById('about_inner_1').classList.add('active');
        document.getElementById('about_inner_2').classList.add('active');
    }

    if (window.scrollY > 2500) {
        document.getElementById('skills').classList.add('active');

        var skills_cards = document.getElementsByClassName('yuphie__skills_cards');

        for (var i = 0; i < skills_cards.length; i++) {
            skills_cards[i].classList.add('active');
        }

        var skills_cardss = document.getElementsByClassName('yuphie__skills_card');

        for (var i = 0; i < skills_cardss.length; i++) {
            skills_cardss[i].classList.add('active');
        }
    }

    if (window.scrollY > 4800) {
        document.getElementById('projects_inner').classList.add('active');

        var p_cards = document.getElementsByClassName('yuphie__project_card');

        for (var i = 0; i < p_cards.length; i++) {
            p_cards[i].classList.add('active');
        }
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function scrollTrigger(sel) {
    let e_s = document.querySelectorAll(sel);

    e_s = Array.from(e_s);

    e_s.forEach(e => {
        addObserver(e);
    });
}

function addObserver(e){
    let observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(function () {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }, 100);
            }
        });
    });

    observer.observe(e);
}

scrollTrigger('.scroll_animation');