function speakToMeNow(text) {
    alert("Bite Me 2")
    if (!('speechSynthesis' in window)) {
        alert("You don't have speechSynthesis");
        return;
    }
    let cnt = 0;
    speechSynthesis.getVoices().forEach(function (voice) {
        console.log(cnt++, voice.name, voice.default ? voice.default : '');
    });
    const speechRequest = new SpeechSynthesisUtterance();
    let voices = window.speechSynthesis.getVoices();
    // speechRequest.voice = voices[7]; British 1, 0.7, 1.25
    // speechRequest.voice = voices[7];
    // speechRequest.voice = voices[7];
    // speechRequest.voice = voices[7];
    // speechRequest.voice = voices[7];
    speechRequest.voice = voices[7];
    speechRequest.volume = 1; // From 0 to 1
    speechRequest.rate = 0.7; // From 0.1 to 10
    speechRequest.pitch = 1.25; // From 0 to 2
    speechRequest.text = text

    window.speechSynthesis.speak(speechRequest);
}