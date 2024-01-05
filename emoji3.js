const emojiDetails = [
    { description: "Smiling face with sunglasses", emoji: "😎" },
    { description: "Thumbs up", emoji: "👍" },
    { description: "Heart eyes", emoji: "😍" },
    { description: "Crying face", emoji: "😢" },
    { description: "Party popper", emoji: "🎉" },
    // Add more emoji descriptions here
  ];
  
    let currentEmojiIndex = 0;
    let score = 0;
    let seconds =50;
    let timer;
    //
    const timerElement = document.getElementById('timer'); 
  
  
    //
    const guessInput = document.getElementById("guess-input");
    const resultElement = document.getElementById("resultYes");
    const resultElement2 = document.getElementById("resultNo");
    const scoreElement = document.getElementById("score");
    const AwardElement = document.getElementById("Award");
  
    function displayEmoji() {
      const descriptionElement = document.getElementById("description");
      descriptionElement.textContent = emojiDetails[currentEmojiIndex].emoji;
      timerElement.textContent=`Time:${seconds}s`;
    }
  
    function checkGuess() {
      const guess = guessInput.value.trim().toLowerCase();
      const correctEmoji = emojiDetails[currentEmojiIndex].description.trim().toLowerCase();
  
      if (guess === correctEmoji) {
        resultElement.textContent = "Correct!";
        score++;
      } else {
        resultElement2.textContent = "Wrong!";
      }
      console.log(score);
      scoreElement.textContent = `Score: ${score}`;
      guessInput.value = "";
      guessInput.focus();
      nextEmoji();
     }
  
    function nextEmoji() {
      currentEmojiIndex++;
      setTimeout(()=>{resultElement.textContent =''; resultElement2.textContent ='';},1000);
      


      if (currentEmojiIndex === emojiDetails.length) {
        if(score>=4){
        AwardElement.textContent ='congratulations! u are doing great';}
        currentEmojiIndex = 0;
        score=0;
      }
  
      displayEmoji();
    }
  
    document
      .getElementById("guess-input")
      .addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          checkGuess();
        }
      });
  
    document.addEventListener("DOMContentLoaded", () => {
      displayEmoji();
      startTimer();
    });  // used for shown intial imogi
  
    function startTimer(){
        timer =setInterval(()=>{
           seconds--;
           timerElement.textContent=`Time:${seconds}s`;
           if(seconds<=0){
            endGame();
           }
        },1000);

        function endGame(){
            clearInterval(timer);
            guessInput.disabled = true;
            timerElement.textContent='';
        }
    }