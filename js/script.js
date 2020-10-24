"use strict";

document.addEventListener('DOMContentLoaded', () => {
	const body = document.querySelector('body'),
		menuBtn = document.querySelector('.menu'),
		menuContent = document.querySelector('.header__right'),
		logo = document.querySelector('.header__logo');

	menuBtn.addEventListener('click', () => {
		menuContent.classList.toggle('_show');
		menuBtn.classList.toggle('_active');
		body.classList.toggle('_show');
		logo.classList.toggle('_show');
	});
	/* ibg  */

	function ibg() {

		let ibg = document.querySelectorAll(".ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img')) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}

	ibg();
	/* ibg  */


	/* slider */
	function funcSlide() {
		const slides = document.querySelectorAll('.info__title'),
			prev = document.querySelector('.prev'),
			next = document.querySelector('.next'),
			dots = document.querySelector('.slide-control__dots');
		let dote = [];


		for (let i = 0; i < slides.length; i++) {
			const dot = document.createElement('span');
			dot.classList.add('dot');
			dot.setAttribute('data-el', i + 1);
			if (i == 0) {
				dot.style.opacity = 1;
			}
			dots.append(dot);
			dote.push(dot);
		}
		let slideIndex = 1;
		showSlides(slideIndex);

		function showSlides(n) {
			if (n > slides.length) {
				slideIndex = 1;
			}
			if (n < 1) {
				slideIndex = slides.length;
			}

			slides.forEach((item) => {
				item.classList.add('hide');
			});

			slides[slideIndex - 1].classList.remove('hide');


		}

		function plusSlides(n) {
			showSlides(slideIndex += n);
		}

		function dotFunc() {
			dote.forEach(dot => dot.style.opacity = ".5");
			dote[slideIndex - 1].style.opacity = 1;
		}

		function prevSlider(np) {
			np.addEventListener('click', () => {
				plusSlides(-1);
				dotFunc();
			});
		}



		function nextSlider(nbt) {
			nbt.addEventListener('click', () => {
				plusSlides(1);
				dotFunc();
			});
		}

		prevSlider(prev);
		nextSlider(next);

	}
	funcSlide();
	/* validate */

	const form = document.querySelector('form'),
		texta = document.querySelector('textarea');

	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();
		let error = formValidate(form);
	}

	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');
		for (let i = 0; i < formReq.length; i++) {
			const input = formReq[i];

			if (input.value === '' || texta.value === '') {
				formAddError(input);
				error++;
			} else {
				formRemoveError(input);
			}
		}

	}

	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}

	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
});



function funcSliderThree() {
	const slides2 = document.querySelectorAll('.four__content'),
		prev1 = document.querySelector('.prev1'),
		next1 = document.querySelector('.next1'),
		dots2 = document.querySelector('.slide-control__dots2');
	let dote2 = [];


	for (let i = 0; i < slides2.length; i++) {
		const dot = document.createElement('span');
		dot.classList.add('two', 'dot');
		dot.setAttribute('data-el', i + 1);
		if (i == 0) {
			dot.style.opacity = 1;
		}
		dots2.append(dot);
		dote2.push(dot);
	}
	let slideIndex = 1;
	showSlides(slideIndex);

	function showSlides(n) {
		if (n > slides2.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides2.length;
		}

		slides2.forEach((item) => {
			item.classList.add('hide');
		});

		slides2[slideIndex - 1].classList.remove('hide');


	}

	function plusSlides(n) {
		showSlides(slideIndex += n);
	}

	function dotFunc() {
		dote2.forEach(dot => dot.style.opacity = ".5");
		dote2[slideIndex - 1].style.opacity = 1;
	}

	function prevSlider() {
		prev1.addEventListener('click', () => {
			plusSlides(-1);
			dotFunc();
		});
	}



	function nextSlider() {
		next1.addEventListener('click', () => {
			plusSlides(1);
			dotFunc();
		});
	}

	prevSlider();
	nextSlider();



}
funcSliderThree();
const slides3 = document.querySelectorAll('.five__content'),
prev2 = document.querySelector('.prev2'),
next2 = document.querySelector('.next2'),
dots3 = document.querySelector('.slide-control__dots3');
let dote3 = [];


for (let i = 0; i < slides3.length; i++) {
const dot = document.createElement('span');
dot.classList.add('two','dot');
dot.setAttribute('data-el',i + 1);
if(i == 0){
dot.style.opacity = 1;

}
dots3.append(dot);
dote3.push(dot);
}
let slideIndex = 1;
showSlides(slideIndex);
function showSlides(n) {
if(n > slides3.length) {
slideIndex = 1;
}
if (n < 1) {
slideIndex = slides3.length;
}

slides3.forEach((item) => {
item.classList.add('hide');
});

slides3[slideIndex - 1].classList.remove('hide');


}

function plusSlides(n) {
showSlides(slideIndex += n);
}

function dotFunc() {
dote3.forEach(dot => dot.style.opacity = ".5");
dote3[slideIndex-1].style.opacity = 1;
}

function prevSlider() {
prev2.addEventListener('click' ,() => {
plusSlides(-1);
dotFunc();
});
}



function nextSlider() {
next2.addEventListener('click' ,() => {
plusSlides(1);
dotFunc();
});
}

prevSlider();
nextSlider();