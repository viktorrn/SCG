//gtts.js https://www.geeksforgeeks.org/how-to-convert-text-to-speech-in-node-js/
import {gTTS} from 'gtts';
     
let speech = 'Welcome to GeeksforGeeks';
const  gtts = new gTTS(speech, 'en');
 
gtts.save('Voice.mp3', function (err, result){
    if(err) { throw new Error(err); }
    console.log("Text to speech converted!");
});