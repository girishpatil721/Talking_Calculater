let screen =document.getElementById('output-screen');
 buttons=document.querySelectorAll('button');
 let screenvalue=" "
 

let outputscreen = document.getElementById("output-screen");

    function display(num){
        outputscreen.value += num;
    }
    function Clear(){
        outputscreen.value = "";
    }
    function del(){
        outputscreen.value = outputscreen.value.slice(0,-1);
    }
    function calulation(){
        try{
            outputscreen.value = eval(outputscreen.value);
        }
        catch(err){
            alert("Are You Out of You'r Mind(Karna Kay Chate hooo!)")
        }
    }
    // //////////////////////////////

for(items of buttons){
items.addEventListener('click',(e)=>{
    btntext=e.target.innerText;
    console.log('Button text is ',btntext);

    if(btntext=="=")
    {
        screen.value=eval(screenvalue);
        if(screen.value>0)
            speak("equals"+screen.value); 
        else{speak("equals minus"+screen.value);}       
    }
    else if(btntext=='X')
    {
        btntext='*';
        speak("multiplied")
        screenvalue +=btntext;
        screen.value=screenvalue;
    }
    else if(btntext=="C")
    {
        screenvalue="";
        speak("clear")
        screen.value=screenvalue;
    }
    else if(btntext=="Backspace")
    {
        screenvalue=screenvalue.slice(0,-1);
        screen.value=screenvalue;

    }
    else if(btntext=="-")
    {
        speak("Minus");
        screenvalue+=btntext;
        screen.value=screenvalue;
    }
    else if(btntext=="=")
    {
        speak("equalto");
        screenvalue+=btntext;
        screen.value=screenvalue;
    }
    else if(btntext=="del")
    {
        speak("Delete");
        screenvalue=screenvalue.slice(0,-1);
        screen.value=screenvalue;
    }
    else if(btntext=="+")
    {
        speak("Plus");
        screenvalue+=btntext;
        screen.value=screenvalue;
    }
    else{
        screenvalue+=btntext;
        speak(btntext)
        screen.value=screenvalue;
    }
})
}
function speak(x)
{
let speech = new SpeechSynthesisUtterance();
speech.lang = "hi-IN";
                
speech.text = x;             
window.speechSynthesis.speak(speech);
}          


SpeechSynthesisUtterance