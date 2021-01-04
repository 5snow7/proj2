class move{
	
constructor(x,y,xs,ys){
this.x=x;this.y=y;this.xs=xs;this.ys=ys;
this.t=new logo(x,y,0,"can1");
}	
	
move(){
	this.x=this.x+this.xs;
	this.y=this.y+this.ys;
	if(this.x<0||this.x>800){this.xs=-1*this.xs;}
	if(this.y<0||this.y>500){this.ys=-1*this.ys;}
	
}
	
display(num){
this.t.set1(this.x,this.y,0);
this.t.poly(20,num);
}	
}


class bullit{
	
	constructor(x,y,ys){
this.x=x;this.y=y;this.ys=ys;
this.t=new logo(x,y,0,"can1");
}	
	
move(){
	//this.x=this.x+this.xs;
	this.y=this.y+this.ys;
	//if(this.x<0||this.x>500){this.xs=-1*this.xs;}
	//if(this.y<0||this.y>400){this.ys=-1*this.ys;}
	
}
	
display(){
this.t.set1(this.x,this.y,90);
this.t.poly(20,3);
}	

destroy(ar){
	//if(this.y<-10){ar.splice(this.
}

}