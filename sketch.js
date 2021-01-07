

function initPolys(){
	//runs when click button "click to init"
	init();
	t.c.font="20px Ariel";
	t.c.fillText("testing Text"+t.xs,40,40);
}

function start(){
	//runs when click "click to run"
moveOne=setInterval(drawing,10);
}

function clear_Can(){
     let canA=document.getElementById("can1");
	 let w=canA.width;
	 canA.width=w;//clears the screen.
 }
 
 function init(){
	 for(let j=0;j<10;j++){
	polyAr[j]=new move(20*j,20*j,3*Math.random(),2*Math.random());	 
	 }
	 }
 
 function drawing(){//runs inside start() function
     //ie when click button "click to run"
	 clear_Can();//havnt shown class
	 roaver.move();roaver.display(4);
	cnt++;movePar();
	tBox.set1(Math.floor(slider.value),450,0);
	tBox.poly(50,8);//the gun.
	
	for(let j=0;j<polyAr.length;j=j+1){
    	 polyAr[j].move();polyAr[j].display(6);}
	
	 for(let j=0;j<polyAr.length;j=j+1){
     for(let k=0;k<bull.length;k=k+1){
	if(coll(bull[k],polyAr[j])==0){polyAr.splice(j,1);}
	 }}
	 
	 for(let k=0;k<bull.length;k=k+1){
	bull[k].move();bull[k].display();
	if(bull[k].y<0){bull.splice(k,1);}
	 }
	 if(polyAr.length>15){polyAr.splice(0,polyAr.length-5);}
     if(polyAr.length==0){init();}
     
	 if(cnt>3000){cnt=0;stopArray();}
     
	 t2.c.font="30px Ariel";
	 t2.c.fillText("mouse on "+cntM+" times",40,60);
    
     par1.innerHTML="# of bullits out is "+bull.length;
     
 }

function addPoly(){
 //runs when click on canvas
 polyAr.push(new move(event.clientX,event.clientY,-4+8*Math.random(),-4+8*Math.random()));	
}

function stopArray(){
	//runs when click "click to stop"
	clearInterval(moveOne);
}



function coll(b1,b2){
	if(Math.abs(b1.x-b2.x)<20&&Math.abs(b1.y-b2.y)<20){return 0;}
	else{return 1;}
}

function func2(){
	//t2.c.font="30px Ariel";
	//t.c.fillText("mouse on "+cntM+" times",40,60);
	cntM++;
}