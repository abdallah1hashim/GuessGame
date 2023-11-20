let score = 20;
let msg = document.querySelector('.message');
let highScoreEle = document.querySelector('.highscore');
let highScore = 0;
let btn = document.querySelector('.check');
let again = document.querySelector('.again');
let num = document.querySelector('.number');
let hNum = Math.trunc(Math.random() * 20 + 1);

btn.addEventListener('click', function() {
  let guess = Number(document.querySelector('.guess').value);
  console.log(hNum);
  console.log(guess);
  if (score === 0) {
    document.querySelector(".go").classList.add("grow");
  } else if (!guess) {
    msg.textContent = '⛔ No Number!';
  } else if (guess === hNum) {
    msg.textContent = '🎊 Correct Number!';
    if (highScore < score) {
      highScore += score;
      highScoreEle.textContent = score;
      num = hNum;
      hNum = Math.trunc(Math.random() * 20 + 1);
      score = score + 2;
      document.querySelector('.score').textContent = score;
      document.body.style.backgroundColor = "green";
    }
  } else if (guess > hNum) {
    msg.textContent = '📈 Too high!';
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.score').classList.toggle("show");
    setTimeout(function() {
      document.querySelector('.score').classList.toggle("show");
    }, 600)

  } else if (guess < hNum) {
    msg.textContent = '📉 Too low!';
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.score').classList.toggle("show");
    setTimeout(function() {
      document.querySelector('.score').classList.toggle("show");
    }, 550)
  } else {
    console.log('Error');
  }
});


again.addEventListener("click", function(){
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector(".go").classList.remove("grow");
})
