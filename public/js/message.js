function play(encodedMP3) {
  // Play the audio on the server
  var audio = new Audio('/birthday.mp3');
  audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
  }, false);
  audio.play();
}
