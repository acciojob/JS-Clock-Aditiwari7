//your code here
const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secHand = d0cument.querySelector(".second-hand");

function updateTime() {
	const now = new Date();
	const hr = now.getHours();
	const min = now.getMinutes();
	const sec = now.getSeconds();

	const hrRot = (hr*30 + min/2)%360;
	const minRot = (min*6 + sec/10)%360;
	const secRot = (sec*6)%360;

	hourHand.style.transform = `rotate(${hrRot}deg)`;
	minHand.style.transform = `rotate(${minRot}deg)`;
	secHand.style.transform = `rotate(${secRot}deg)`;
}

updateTime();
setInterval(updateTime, 1000);
