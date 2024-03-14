let sec=document.getElementById("sec");
let min=document.getElementById("min");
let hr=document.getElementById("hr");
let x=null;
let count =0;

function start(params) {
    clearInterval(x);   
    
    x=setInterval(() => {
        if(Number(sec.innerHTML)<60){
            if(sec.innerHTML<9){
                sec.innerHTML="0"+(Number(sec.innerHTML)+1);    

            }
            else{
                sec.innerHTML=Number(sec.innerHTML)+1;    

            }

        }
        else{
            sec.innerHTML="00";
            if(min.innerHTML<9){
                min.innerHTML="0"+(Number(min.innerHTML)+1);

            }
            else{
                min.innerHTML=Number(min.innerHTML)+1;

            }
            if(Number(min.innerHTML)>60){
                min.innerHTML="00";
                if(sec.innerHTML<9){
                    hr.innerHTML="0"+(Number(hr.innerHTML)+1);
    
                }
                else{
                    hr.innerHTML=Number(hr.innerHTML)+1;
    
                }

            }
        }
       

    }, 1000);
    
}
function stop(params) {
    clearInterval(x);
}
function restart(params) {
    sec.innerHTML="00";
    min.innerHTML="00";
    hr.innerHTML="00";
    clearInterval(x);
    let lapbox=document.getElementById("lap-box");
    lapbox.innerHTML="";  

    count=0;
    


}

function lap(params) {
    count++;
    let child= document.createElement("div");
    child.innerHTML="LAP "+count+" ==> "+hr.innerHTML+":"+min.innerHTML+":"+sec.innerHTML;
    let lapbox=document.getElementById("lap-box");
    lapbox.appendChild(child);
    
}