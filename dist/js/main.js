
const synth=window.speechSynthesis;//init speechsynth api



const textForm=document.querySelector('form');
const textInput=document.querySelector('#text-input');
const voiceSelect=document.querySelector('#voice-select');
const rate=document.querySelector('#rate');
const rateValue=document.querySelector('#rate-value');
const pitch=document.querySelector('#pitch');
const pitchValue=document.querySelector('#pitch-value');

//init voices array

let voices=[];
const getVoices=()=>{
    voices=synth.getVoices();
    //loop through voices
    voices.forEach(voice=>{
        //create an option element
    const option=document.createElement('option');
    option.textContent=voice.name + '('+voice.lang +')';
    option.setAttribute('data-lang',voice.lang);
    option.setAttribute('data-name',voice.name);
    voiceSelect.appendChild(option);

    });
};
getVoices();
if(synth.onvoiceschanged !== undefined){
    synth.onvoiceschanged=getVoices;

}
//speak
const speak=()=>{
    if(synth.speaking){
        console.error('Already speaking ...');
        return;

    }
    if(textInput.value !==''){
        const speakText=new SpeechSynthesisUtterance(textInput.value);
        //speak 
        speakText.onend=e=>{
            console.log('Done Speaking');
            
        }

    }
}