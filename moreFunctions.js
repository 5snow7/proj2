function movePar(){
	par1.style.left=Math.floor(slider.value)+"px";
    tBox.c.font="30px Ariel";
	 tBox.c.fillText("slider is "+slider.value,40,80);
     par1.innerHTML="I am at "+slider.value;
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