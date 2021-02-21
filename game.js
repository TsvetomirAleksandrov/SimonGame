function nextSequence() {
    var gamePattern = [];
    var buttonColors = ['red', 'blue', 'green', 'yellow'];
    var randomNumber = (Math.random() * 3) + 1;

    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
}