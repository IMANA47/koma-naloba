//Declarration variable
let text = document.getElementById("txt");
let envoyerBtn = document.getElementById("submit");
let resumeBtn =  document.getElementById("resume");
let pauseBtn =  document.getElementById("pause");
let audioMessage;


 envoyerBtn.addEventListener("click",()=>{
   audioMessage.text = text.value;
   
   //parole du text
  window.speechSynthesis.speak(audioMessage);
 });

 resumeBtn.addEventListener("click",()=>{
 pauseBtn.style.display ="block";
 resumeBtn.style.display ="none";
   
  //Pour reprendre l'audio lorsqu'elle est mise en pause .
if(speechSynthesis.pause){
  speechSynthesis.resume();
}
 });

 pauseBtn.addEventListener("click",()=>{
 pauseBtn.style.display ="none";
 resumeBtn.style.display ="block";
   
  //Faire la pause lorsque sa parle
speechSynthesis.speaking? speechSynthesis.pause () : "Ressayer";
 });

window.onload = () =>{
   resumeBtn.style.display ="none";
  if("speechSynthesis" in window){
    audioMessage = new SpeechSynthesisUtterance();
  }
  else{
    alert("Speech Synthese is not supported");
  }
};