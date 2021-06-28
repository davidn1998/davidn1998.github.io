var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var scoreText = document.getElementById("score");
var highScoreText = document.getElementById("high-score");
var music = document.getElementById("music");
var jumping = 0;
var counter = 0;
var highScore = 0;

music.volume = 0.2;

hole.addEventListener("animationiteration", () => {
  var random = -(Math.random() * 300 + 150);
  hole.style.top = random + "px";
  counter++;
});
setInterval(function () {
  var characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  if (jumping == 0) {
    character.style.top = characterTop + 3 + "px";
  }
  var blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
  var cTop = -(500 - characterTop);
  scoreText.innerText = `Score: ${counter}`;

  if (
    characterTop > 480 ||
    (blockLeft < 20 &&
      blockLeft > -50 &&
      (cTop < holeTop || cTop > holeTop + 130))
  ) {
    alert("Game over. Score: " + counter);
    if (counter > highScore) {
      highScore = counter;
      highScoreText.innerText = `High Score: ${highScore}`;
    }
    counter = 0;
    scoreText.innerText = "";
    character.style.top = 100 + "px";
  }
}, 10);

function jump() {
  jumping = 1;
  let jumpCount = 0;
  var jumpInterval = setInterval(function () {
    var characterTop = parseInt(
      window.getComputedStyle(character).getPropertyValue("top")
    );
    if (characterTop > 6 && jumpCount < 15) {
      character.style.top = characterTop - 5 + "px";
    }
    if (jumpCount > 20) {
      clearInterval(jumpInterval);
      jumping = 0;
      jumpCount = 0;
    }
    jumpCount++;
  }, 10);
}
