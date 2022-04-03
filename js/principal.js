var menustate=0;
// function for mobile menu button manage
function myFunction(x) {
  x.classList.toggle("change");
  const a=document.getElementById('first-bar');
  const v = document.getElementById('sound');

   if(menustate==0){
    a.style.height="100%"
    menustate=1;
    a.style.display="block";
   
   }
   else{
    a.style.height="0px"
     menustate=0;
     a.style.display="none";
   }  
}
// end
// function to play the son
var soundstate = 0;
 function changetext(){
   if(soundstate==0){
     document.getElementById("soundplay").innerHTML='ON'
    const v = document.getElementById('sound');
    v.play();
    soundstate=1;
    document.getElementById('soundplay').style.color="white";
   }
   else{
     document.getElementById("soundplay").innerHTML='OFF'
    const v = document.getElementById('sound');
    v.pause();
    document.getElementById('soundplay').style.color="rgb(119, 68, 68)";
    soundstate=0;
   }    
  }
  // end 
  // anim letters function
function animleter(num){
  const x = document.getElementsByClassName('animletter')
  x[num].classList.toggle('animf');
  setTimeout(() => {
    x[num].classList.toggle('animf')    
  }, 700);  
}
// end
// this part make caracters appears when page load
 for(let i=0; i<24;i++){
   
   setTimeout(() => {
     animleter(i)
     document.getElementsByClassName('animletter')[i].style.display='inline-block'
     if(i==6)
     document.getElementById("jackimage").style.display='inline-block';
   }, 70*i);
 }
 setTimeout(() => {   
     document.getElementById("jackimage").style.transform = "rotate(360deg)"; 
     document.getElementById("jackimage").style.transition = "all 0.2s";
 
  }, 700); 
  // end
  

// mouse custom 
var container = document.getElementById("custommouse");
for (var i = 0; i < 100; i++) {
   container.innerHTML +='<div class="circle"></div>';
}


window.addEventListener('mousemove', mouseMoveHandler);
function mouseMoveHandler(e) {
  for(let k=0;k<100;k++){
    setTimeout(() => {
       var circle = document.getElementsByClassName('circle')[k];
  circle.style.left = 100+e.clientX - circle.offsetWidth / 2 + "px";
  circle.style.top = -100+e.clientY - circle.offsetHeight / 2 + "px";      
    }, k);
  }
  
}
function levef(elmn){
  elmn.style.backgroundsize="100% 100%";
  elmn.style.transition="all .4s";

}
function leavelink(elt){
  elt.style.width="0vw"
  elt.style.height="0vw"
  elt.style.transition="all .4s"

}
function showlink(numb){
  var x=document.getElementsByClassName('linkclose')[numb]
  x.style.width="15vw"
  x.style.height="15vw"

}
// sphere animation code:::::::::::::::::::::::::::::::::::::::::::::::::::::
function turnbg(){
  let getbg=document.getElementsByClassName('formbganim');
  getbg[0].style.backgroundcolor='green';
}
var displayed2=0;
document.addEventListener(
    'scroll',
    (event) => {     
      let elem = document.getElementsByClassName("animline2");
      let subelem = document.querySelectorAll('.animline2 span')
      let rect = elem[0].getBoundingClientRect();
      
      if((rect.y<window.innerHeight)&&(displayed2==0)){
        displayed2=1;
        for(let l=0; l<subelem.length;l++){   
          setTimeout(() => {
          
          subelem[l].style.display='inline-block';
          animleter(24+l);
   }, 100*l);
 }

      }      
   }   
);
var displayed3=0;
document.addEventListener(
    'scroll',
    (event) => {     
      let elem = document.getElementsByClassName("amimletter3");
      let subelem = document.querySelectorAll('.amimletter3 span')
      let rect = elem[0].getBoundingClientRect();
      
      if((rect.y<window.innerHeight)&&(displayed3==0)){
        displayed3=1;
        for(let l=0; l<subelem.length;l++){   
          setTimeout(() => {
          
          subelem[l].style.display='inline-block';
          animleter(36+l);
   }, 100*l);
 }

      }      
   }   
);
var displayed4=0;
document.addEventListener(
    'scroll',
    (event) => {     
      let elem = document.getElementsByClassName("amimletter4");
      let subelem = document.querySelectorAll('.amimletter4 span')
      let rect = elem[0].getBoundingClientRect();
      
      if((rect.y<window.innerHeight)&&(displayed4==0)){
        displayed4=1;
        for(let l=0; l<subelem.length;l++){   
          setTimeout(() => {
          subelem[l].style.display='inline-block';
          animleter(50+l);
   }, 100*l);
 }

      }      
   }   
);
var displayed5=0;
var lastsub
function show(classname){

      let elem = document.getElementsByClassName(classname);
      let subelem = document.querySelectorAll('.'+classname+'>div')
      let rect = elem[0].getBoundingClientRect();
      
      if((rect.y<window.innerHeight)){
        displayed5=1;
        for(let l=0; l<subelem.length;l++){   
          setTimeout(() => {
          subelem[l].style.opacity='1';
          subelem[l].style.transform= 'translateY(-20px)';
          subelem[l].style.transition='all 2s'
   }, 100*l);
 }
}      
}
document.addEventListener(
    'scroll',
     (event) => {  
show('makeappear');  
show('makeappear2');  
show('makeappear3');  
}   
);