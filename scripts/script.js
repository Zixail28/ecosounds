const navItem = document.querySelectorAll('.nav-item');
const btn = document.querySelector('.btn');
const mainCont = document.querySelector('.main-container');
let isPlay = false;
let peekBtn = 'forest';

btn.addEventListener('click', () => {
	if (!isPlay) {
		isPlay = true;
		btn.setAttribute('src', './assets/svg/pause.svg')
		playAudio(peekBtn);
	} else {
		isPlay = false;
		btn.setAttribute('src', './assets/svg/play.svg')
		pauseAudio();
	}
})

const audio = new Audio();

function playAudio(name) {
	audio.src = `./assets/audio/${name}.mp3`;
	audio.currentTime = 0;
	audio.play();
}
function pauseAudio() {
  audio.pause();
}

function reloadPl() {
	audio.pause();
	isPlay = false;
	btn.setAttribute('src', './assets/svg/play.svg');
}

navItem[0].addEventListener('click', () => {
	reloadPl()
	navItem[0].classList.add('active')
	navItem[1].classList.remove('active')
	navItem[2].classList.remove('active')
	navItem[3].classList.remove('active')
	navItem[4].classList.remove('active')
	mainCont.style.background = "url('./assets/img/solovey.jpg') no-repeat"
	peekBtn = 'solovey';
})
navItem[1].addEventListener('click', () => {
	reloadPl()
	navItem[1].classList.add('active')
	navItem[0].classList.remove('active')
	navItem[2].classList.remove('active')
	navItem[3].classList.remove('active')
	navItem[4].classList.remove('active')
	mainCont.style.background = "url('./assets/img/drozd.jpg') no-repeat"
	peekBtn = 'drozd';
})
navItem[2].addEventListener('click', () => {
	reloadPl()
	navItem[2].classList.add('active')
	navItem[1].classList.remove('active')
	navItem[0].classList.remove('active')
	navItem[3].classList.remove('active')
	navItem[4].classList.remove('active')
	mainCont.style.background = "url('./assets/img/zarynka.jpg') no-repeat"
	peekBtn = 'zarynka';
})
navItem[3].addEventListener('click', () => {
	reloadPl()
	navItem[3].classList.add('active')
	navItem[1].classList.remove('active')
	navItem[2].classList.remove('active')
	navItem[0].classList.remove('active')
	navItem[4].classList.remove('active')
	mainCont.style.background = "url('./assets/img/javoronok.jpg') no-repeat"
	peekBtn = 'javoronok';
})
navItem[4].addEventListener('click', () => {
	reloadPl()
	navItem[4].classList.add('active')
	navItem[1].classList.remove('active')
	navItem[2].classList.remove('active')
	navItem[3].classList.remove('active')
	navItem[0].classList.remove('active')
	mainCont.style.background = "url('./assets/img/slavka.jpg') no-repeat"
	peekBtn = 'slavka';
})