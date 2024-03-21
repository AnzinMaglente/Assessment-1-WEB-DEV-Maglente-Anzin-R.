/* Javascript is used to implement functionality to your website, it usually defines
the behavior of buttons, links, and other interactable materials. */

let set1audio = document.getElementsByClassName("set1")
let set2audio = document.getElementsByClassName("set2")
/*
var, let, and const are all to set variables, it declares a value to a keyword to be used 
later in the program.

The document object represents your web page, if you want to change a certain element in
said page, you would need to indicate how to get them, there are several ways to do this.
    1. getElementById finds the element based on the ID given to them.
    2. getElementsByTagName finds the element based on the tag given to them.
    3. getElementsByClassName finds the element based on the class name given to them.
*/

function playAudio(soundfile){
    let audio = new Audio(soundfile);
    audio.play();
}
/* A function is the block of code used to perform a particular task
in this function, playAudio, it requires a parameter called "soundfile"
it create a variable and object called "audio" & "Audio" respectively
in order to play the mp3, ogg, and other audio file types.
*/

function forward() {   
    Array.from(set1audio).forEach((x) => {
        if (x.style.display === "none") {
            x.style.display = "inline";
        } else {
            x.style.display = "none";
        }
    })
    Array.from(set2audio).forEach((y) => {
        if (y.style.display === "inline") {
            y.style.display = "none";
        } else {
            y.style.display = "inline";
        }
    })
}

/* The forward and backward function acts as the way to switch between the two
sets of content, it uses display to hide one set while the other set will become
an inline.

Notable operators are:
    Arrays - used to select multiple items in a element.
    from - used to select an variable.
    forEach - allows each element in the array to perform a particular task

    style - is used to change how a particular variable is styled
    display - is the css property, it changes how the element is 
    displayed in the html file.
*/


function backward() {
    Array.from(set2audio).forEach((x) => {
        if (x.style.display === "none") {
            x.style.display = "inline";
        } else {
            x.style.display = "none";
        }
    })
    Array.from(set1audio).forEach((y) => {
        if (y.style.display === "inline") {
            y.style.display = "none";
        } else {
            y.style.display = "inline";
        }
    })
}

function texttospeechconverter() {
    let msg = new SpeechSynthesisUtterance
    msg.text = document.getElementById("text-input").value;;
    window.speechSynthesis.speak(msg);
}

/* The texttospeechconverter function is used to convert text to speech as the name
implies, it gets a value and stores it in the msg variable, and then using the window
speechSythesis plays the audio by a robotic voice.

Notable operators are:
    - .value - Gathers a particular value of an element.
    - speechSynthesis.speak - Adds an utterance to the utterance queue; it will be spoken 
    when any other utterances queued before it have been spoken.
*/