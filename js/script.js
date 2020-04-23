document.addEventListener('DOMContentLoaded', ()=> {
    'use strict';

    let hamburger = document.querySelector('.ham5'),
        menu = document.querySelector('.header-menu'),
        header = document.querySelector('.header-item'),
        animation = document.querySelectorAll('.a');

    menu.addEventListener('click', ()=> {
        hamburger.classList.toggle('active');
    });

	menu.addEventListener('click', ()=> {

		if(hamburger.classList.contains('active')) {
			document.body.style.overflow = 'hidden';
            header.style.opacity = '1';
            header.style.pointerEvents = 'visible';
            animation.forEach(function(el) {
                el.style.animation = 'navOpen 1s ease forwards';
            });
            animation[1].style.animationDelay = '0.3s';
            animation[2].style.animationDelay = '0.6s';
            animation[3].style.animationDelay = '0.9s';
            animation[4].style.animationDelay = '1.2s';
            menu.style.pointerEvents = 'none';
            setTimeout(function() {
                menu.style.pointerEvents = 'visible';
            }, 1700);
		} else {
            menu.style.pointerEvents = 'none';
            setTimeout(function() {
                menu.style.pointerEvents = 'visible';
            }, 1500);
            setTimeout(function() {
                document.body.style.overflow = 'visible';
                header.style.opacity = '0';
                header.style.pointerEvents = 'none';
                animation.forEach(function(el) {
                    el.style.opacity = '0';
                });
            }, 1500);
            animation.forEach(function(el) {
                el.style.animation = 'navClose 1s ease-in-out forwards';
                el.style.opacity = '1';
            });
            animation[3].style.animationDelay = '0.3s';
            animation[2].style.animationDelay = '0.6s';
            animation[1].style.animationDelay = '0.9s';
            animation[0].style.animationDelay = '1.2s';
		}
	});

});