function shout(string){
    return string.toUpperCase();

}
"HELLO!".toUpperCase();



function whisper(string){
    return string.toLowerCase();
}
"hello".toLowerCase();



function logShout(string){
    console.log("HELLO");
}
logShout();



function logWhisper(string){
    console.log("HELLO".toLowerCase());
}



function sayHiToHeadphonedRoommate(string) {
    if(string === string.toLowerCase()){
        return `I can't hear you!`;
    }
    else if (string === string.toUpperCase()) {
        return 'YES INDEED!'
    }
    else {
        return `I would love to!`
    }
}
shout("hello")
whisper('Hello')
logShout('javascript')
logWhisper('javascript')
sayHiToHeadphonedRoommate('charles')

