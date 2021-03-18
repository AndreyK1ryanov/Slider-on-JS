let next = document.getElementById('next');	
let prev = document.getElementById('prev');
let auto = document.getElementById('start');
let stop = document.getElementById('stop');
let sliderMove = document.getElementsByClassName('slide');
let pcsSlide = document.getElementsByClassName('title');

let slide = 0;
let playing = true;


function nextSlide(){
	if (slide < sliderMove.length - 1) {
		slide ++;
		sliderMove[slide - 1].style.display = "none";
	}
		sliderMove[slide].style.display = "block";
}

function prevSlide(){
	if (slide > 0) {
		slide --;
		sliderMove[slide + 1].style.display = "none";
	}
		sliderMove[slide].style.display = "block";
}

function startPlay(){
	playing = true;
    	slideInterval = setInterval(nextSlide,1200);
		start.style.display = "none";
		stop.style.display = "block";
}

function stopPlay(){
	playing = false;
	clearInterval(slideInterval);
	stop.style.display = "none";
	start.style.display = "block";
}

(function() {
    if(playing == true) {
		startPlay();
  } else {
    stopPlay();
  }
});

(function pcsPictures(){
	for (var i = 0; i < pcsSlide.length; i++) {
		let startNumb = i + 1;
		pcsSlide[i].textContent = "Pictures" + " " + startNumb + "/" + sliderMove.length;
	}
}())

