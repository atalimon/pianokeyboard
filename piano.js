console.log("JAVAISHERe")
document.addEventListener("DOMContentLoaded", function(){
    var buttons = document.querySelectorAll('.piano-pad');
console.log(buttons.length)
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        console.log("Pressed")
        var note = button.dataset.note;
        var audio = document.getElementById(note);
        console.log(audio);
        audio.currentTime= 0;
        audio.play();

});

    });
});