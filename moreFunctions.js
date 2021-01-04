function movePar(){
//clear_Can();
//tBox.set1(Math.floor(slider.value),450,0);
	//tBox.poly(50,8);
	par1.style.left=Math.floor(slider.value)+"px";
    tBox.c.font="30px Ariel";
	 tBox.c.fillText("slider is "+slider.value,40,80);
}

function shoot(){
bull.push(new bullit(Math.floor(slider.value),450,-3));	
}