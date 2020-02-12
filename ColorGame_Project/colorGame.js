var numsquare=6;
var colorlist=generaterandomcolors(numsquare);
var square=document.querySelectorAll(".square");
var pickedcolor=pickcolor();
var messagedisplay=document.querySelector("#messagedisplay");
var colordisplay=document.querySelector("#colordisplay");
var h1=document.querySelector("h1");
var resetbutton=document.querySelector("#reset");
var modebtn=document.querySelectorAll(".mode");


    for(var i=0;i<modebtn.length;i++){
        modebtn[i].addEventListener("click",function(){
        modebtn[0].classList.remove("selected");
        modebtn[1].classList.remove("selected");
        this.classList.add("selected");
            this.textContent==="Easy"?numsquare=3:numsquare=6;
    resetall();
});
    }

  function resetall(){
    colorlist=generaterandomcolors(numsquare);
    pickedcolor=pickcolor();
    colordisplay.textContent=pickedcolor;
    for(var i=0;i<square.length;i++){
        if(colorlist[i]){
         square[i].style.display="block";   
        square[i].style.background=colorlist[i];
        }else{
            square[i].style.display="none";
        }
    }
    h1.style.background="steelblue";
    messagedisplay.textContent="";
    this.textContent="NEW GAME";

  }  
resetbutton.addEventListener("click",function(){
    resetall();
});
colordisplay.textContent=pickedcolor;
for(var i=0;i<square.length;i++){
    square[i].style.background=colorlist[i];
    square[i].addEventListener("click",function(){
        var clickedcolor=this.style.background;
        if(clickedcolor===pickedcolor){
            messagedisplay.textContent="Correct!";
            changecolor(clickedcolor);
            h1.style.background=clickedcolor;
            resetbutton.textContent="Play Again?";
        }else{
            this.style.background="#232323";
            messagedisplay.textContent="Try Again";
        
        }
    });
}
function changecolor(color){
    for(var i=0;i<square.length;i++){
        square[i].style.background=color;
    }

}
function pickcolor(){
 var random= Math.floor(Math.random()*colorlist.length);
 return colorlist[random];
}
function generaterandomcolors(num){
    var arr=[];
for(var i=0;i<num;i++){
    arr.push(randomcolor());
}
    return arr;
}
function randomcolor(){
    var r= Math.floor(Math.random()*256);
    var g= Math.floor(Math.random()*256);
    var b= Math.floor(Math.random()*256);
    return "rgb("+r+", "+ g + ", "+ b+")";
}