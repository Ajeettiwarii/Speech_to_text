const { Deepgram } = require("@deepgram/sdk");
const fs = require("fs");  
const path=require('path')   
require('dotenv').config() 



// Your Deepgram API Key
const deepgramApiKey = process.env.DEEPGRAM_API_KEY  
const pathToFile=path.join(__dirname,'audiosong.mp3');
const mimetype='audio/mp3';   
// Initialize the Deepgram SDK
const deepgram = new Deepgram(deepgramApiKey);
 
console.log("Requesting  transcript")  
deepgram.transcription.preRecorded(
    {buffer:fs.readFileSync(pathToFile),mimetype},
    {punctuate:true,language:'en-US'}
)      
.then((transcription)=>{
    console.dir(transcription.results.channels[0].alternatives[0].transcript,{depth:null});
})  
.catch((err)=>{
    console.log(err)
})





