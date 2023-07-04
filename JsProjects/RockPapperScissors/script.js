const gameSummary = {
  numbers: 0,
  wins: 0,
  losses: 0,
  draws: 0,
};
const game = {
  playerHand: null,
  aiHand: null,
};
let YourChoice = document.querySelector(`[data-summary="your-choice"]`);
let AiChoice = document.querySelector(`[data-summary="ai-choice"]`);
let Winner = document.querySelector(`[data-summary="who-win"]`);
const hands = document.querySelectorAll(".select img");

hands.forEach((hand) => {
  hand.addEventListener("click", (e) => {
    game.playerHand = e.target.dataset.option;
    hands.forEach((hand) => {
      hand.style.boxShadow = "";
    });
    e.target.style.boxShadow = "0 0 0 10px royalblue";
  });
});
document.querySelector(`.start`).addEventListener(`click`, () => {
  if (game.playerHand === null) {
    return alert(`Wybierz dłoń`);
  }
  const aiChoice = () => {
    const AiHand = [`kamień`, `papier`, `nożyczki`];
    let rand = Math.floor(Math.random() * AiHand.length);
    let Choice = AiHand[rand];
    return Choice;
  };
  game.aiHand = aiChoice();
  YourChoice.innerHTML = game.playerHand;
  AiChoice.innerHTML = game.aiHand;

  let result = () => {
    if (game.playerHand === game.aiHand) {
      return `remis`;
    } else if (game.playerHand == "kamień" && game.aiHand == "nożyczki") {
      return `win`;
    } else if (game.playerHand == "kamień" && game.aiHand == "papier") {
      return `lose`;
    } else if (game.playerHand == "papier" && game.aiHand == "kamień") {
      return `win`;
    } else if (game.playerHand == "papier" && game.aiHand == "nożyczki") {
      return `lose`;
    } else if (game.playerHand == "nożyczki" && game.aiHand == "kamień") {
      return `lose`;
    } else if (game.playerHand == "nożyczki" && game.aiHand == "papier") {
      return `win`;
    }
  };

  GameResult = result();
  if (GameResult == `win`) {
    gameSummary.wins++;
    gameSummary.numbers++;
  } else if (GameResult == `remis`) {
    gameSummary.numbers++;
    gameSummary.draws++;
  } else if (GameResult == `lose`) {
    gameSummary.numbers++;
    gameSummary.losses++;
  }
  const ProgWynik = () => {
    if (GameResult === `win`) {
      return `Ty`;
    } else if (GameResult === `remis`) {
      return `remis`;
    } else if (GameResult === `lose`) {
      return `ai`;
    }
  };
  Wynik = ProgWynik();
  Winner.innerHTML = Wynik;
  let LiczbaGier = document.querySelector(`.numbers`);
  let Wins = document.querySelector(`.wins`);
  let losses = document.querySelector(`.losses`);
  let draws = document.querySelector(`.draws`);
  LiczbaGier.innerHTML = `liczba gier ${gameSummary.numbers}`
  Wins.innerHTML = `Wygrane ${gameSummary.wins}`
  losses.innerHTML = `przegrane ${gameSummary.losses}`
  draws.innerHTML = `remisy ${gameSummary.draws}`

});
