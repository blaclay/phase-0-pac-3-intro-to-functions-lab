function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    const lHDT = "Let's have dinner together!";
    let iCHR = "I can't hear you!";
    let yI = "YES INDEED!";
    let iWLT = "I would love to!";


    if (string === string.toLowerCase()) {
        //return string.toLowerCase("I can\'t hear you!");
        // console.log(string.toLowerCase("I can\'t hear you!"));
        return iCHR;
    }
    else if (string === string.toUpperCase()) {
        return yI;
    }

    if (string === lHDT) {
        return iWLT;
    }


}