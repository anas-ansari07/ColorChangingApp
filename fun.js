let colors =['blue','green','yellow','purple','black','red']

let button = document.getElementById("click");

button.addEventListener('click',function()
{

	let index = parseInt((Math.random()*colors.length)+1);
	let canvas = document.getElementById('canvas');
	canvas.style.background = `${colors[index]}`
})