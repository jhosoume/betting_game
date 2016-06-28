class Game {
  constructor(initial_money) {
    //this.player = new Player(this.getName(), initial_money);
    do {
      this.turn();
    } while(!this.endGame());
  }
  
  getName() {
    return prompt("What's your name?");
  }

  getGuess() {
    do {
    var guess = parseInt(prompt("What's your guess? Pick an integer betweem 1 and 10."));
    } while(!this.guessValid(guess));
    alert("The number guessed is " + guess)
    return guess;
  }

  guessValid(guess) {
    return Number(guess) === guess && 
            guess % 1 ===0 && 
            guess <= 10 && 
            guess >= 1;
  }

  getBet() {
    do {
      var bet = parseFloat(prompt("How much faith are you putting in your guess?" + 
      "Number may be a decimal. Needs to be between 5 and 10 and less than bankroll."));
    } while(!this.betValid(bet));
    this.player.bankroll -= bet;
    return bet;
  }

  betValid(bet) {
    return Number(bet) === bet && 
            bet >= 5 && 
            bet <= 10 && 
            bet <= this.player.bankroll;
  }

  endGame() {
    return this.player.bankroll < 5.0;
  }

  getRandomNum() {
    return Math.floor((Math.random() * 10) + 1);
  }

  getPrize(guess, num, bet) {
    let diff = Math.abs(guess - num);
    switch(diff) {
      case 0: return 2*bet;
      case 1: return bet;
      default: return 0;
    }
  }

  turn() {
    let turn_num = this.getRandomNum();
    let guess = this.getGuess();
    let bet = this.getBet();
    let prize = this.getPrize(guess, turn_num, bet)
    alert("The number is...")
    alert(turn_num + " !!!")
    alert("In this turn, the outcome is " + prize);
    this.player.bankroll += prize;
    alert("You have now " + this.player.bankroll);
  }
}
