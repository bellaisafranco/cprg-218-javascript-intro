//pop up secret message
swag.addEventListener('click', function(){
    alert("boi oi oi oing!");
}
);
//make light bulb image change when user clicks button
light_on.addEventListener('click', function(){
console.log("let there be swag");
document.getElementById("lightbulb").src="lightbulb_on.webp";
//make only one button appear, on when light is off, off when light is on
document.getElementById("light_on").style.display="none";
document.getElementById("light_off").style.display="initial";
document.body.classList.toggle("light");
}
);

//make light bulb image change when user clicks button
light_off.addEventListener('click', function(){
console.log("too far");
document.getElementById("lightbulb").src="lightbulb_off.webp";
//do line 11 and 12 in reverse to create a loop of turning on and off light bulb
document.getElementById("light_off").style.display="none";
document.getElementById("light_on").style.display="initial";
}
);


