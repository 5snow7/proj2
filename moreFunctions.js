function movePar(){
//clear_Can();
//tBox.set1(Math.floor(slider.value),450,0);
	//tBox.poly(50,8);
	par1.style.left=Math.floor(slider.value)+"px";
    tBox.c.font="30px Ariel";
	 tBox.c.fillText("slider is "+slider.value,40,80);
     //par1.innerHTML="I am at "+slider.value;
	 par1.innerHTML="# of bullits out is "+bull.length;
}

function shoot(){
bull.push(new bullit(Math.floor(slider.value),450,-3));	
}

function chgpic(){
	let img1=document.getElementById("image1");
	let img2=document.getElementById("image2");
     img1.height="1";img1.width="1";
	 img2.height="150";img2.width="100"; 
}