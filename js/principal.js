var menustate=0;
function myFunction(x) {
  x.classList.toggle("change");
  const a=document.getElementById('first-bar');
  const v = document.getElementById('sound');
v.play();
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
function animleter(num){
  const x = document.getElementsByClassName('animletter')
  x[num].classList.toggle('animf');
  setTimeout(() => {
    x[num].classList.toggle('animf')    
  }, 1000);  
}
// function moveanim(n){ jackimage
//   setTimeout(function(){ const x = document.getElementsByClassName('animletter')
//   x[n].classList.toggle('animf'); }, 1000);
  
// }
 for(let i=0; i<24;i++){
   
   setTimeout(() => {
     animleter(i)
     document.getElementsByClassName('animletter')[i].style.display='inline-block'
     if(i==6)
     document.getElementById("jackimage").style.display='inline-block';
   }, 100*i);
 }
 setTimeout(() => {   
     document.getElementById("jackimage").style.transform = "rotate(360deg)"; 
     document.getElementById("jackimage").style.transition = "all 0.2s";
 
  }, 700);  
