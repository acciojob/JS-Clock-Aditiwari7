//your code here
const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secHand = d0cument.querySelector(".second-hand");

function updateTime() {
	const time = new Date();
	const hr = time.getHours();
	const min = time.getMinutes();
	const sec = time.getSeconds();

	const hrRot = (hr*30) + (min/2);
	const minRot = (min*6) + (sec/10);
	const secRot = sec*6;

	hourHand.style.transform = `rotate(${hrRot}deg)`;
	minHand.style.transform = `rotate(${minRot}deg)`;
	secHand.style.transform = `rotate(${secRot}deg)`;
}

updateTime();
setInterval(updateTime, 1000);
