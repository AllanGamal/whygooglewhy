let questions = [
  { question: "What is my ip?", searches: 4550, img: "ip", a: "ip" },
  { question: "What time is it?", searches: 878, img: "time", a: "time" },
  { question: "What is VPN?", searches: 164, img: "vpn", a: "vpn" },
  { question: "What day is it today?", searches: 161, img: "day", a: "day" },

  { question: "Why is the skye blue?", searches: 694, img: "sky", a: "sky" },
  { question: "Why do cats purr?", searches: 526, img: "cat", a: "cat" },
  { question: "Why do we sleep?", searches: 358, img: "sleep", a: "sleep" },
  { question: "Why do dogs eat grass?", searches: 348, img: "dog", a: "dog" },
  { question: "Why is my poop green?", searches: 347, img: "poop", a: "poop" },
  { question: "Why am I so tired?", searches: 314, img: "tired", a: "tired" },

  {
    question: "How many days in a year?",
    searches: 113,
    img: "days",
    a: "days",
  },
  { question: "How to tie a tie?", searches: 67, img: "tie", a: "tie" },
  {
    question: "How many oucnes in a pound?",
    searches: 63,
    img: "ounces",
    a: "pound",
  },
  {
    question: "How How to screenshot on mac?",
    searches: 57,
    img: "screenshot",
    a: "screenshot",
  },
  {
    question: "How How many ounces in a cup?",
    searches: 55,
    img: "ounces",
    a: "cup",
  },
  {
    question: "How How many ounces in a gallon?",
    searches: 51,
    img: "ounces",
    a: "gallon",
  },

  {
    question: "When is black friday?",
    searches: 749,
    img: "blackfriday",
    a: "blackfriday",
  },
  {
    question: "When is thanksgiving?",
    searches: 570,
    img: "thanksgiving",
    a: "thanksgiving",
  },
  { question: "When is easter?", searches: 341, img: "easter", a: "easter" },
  {
    question: "When is halloween?",
    searches: 240,
    img: "halloween",
    a: "halloween",
  },
  {
    question: "When do the clocks go back?",
    searches: 216,
    img: "clock",
    a: "clock",
  },
];

let orderedQ = questions.sort((a, b) => (a.searches < b.searches ? 1 : -1));
let place = document.querySelectorAll(".place");
let questionText = document.querySelectorAll(".question--text");
let number = document.querySelectorAll(".number");
let image = document.querySelectorAll(".card__image--img");
let link = document.querySelectorAll(".link");

for (let i = 0; i < questions.length; i++) {
  if (orderedQ[i].question.includes("gallon")) {
  }
}

function randomQuestion() {
  let arr = [];
  // Add random number to question
  for (let i = 0; i < place.length; i++) {
    let n = Math.floor(Math.random() * orderedQ.length);

    if (arr.includes(n)) {
      randomQuestion();
    } else {
      arr.push(n);
      place[i].innerHTML = "Nr: " + (n + 1);
      questionText[i].innerHTML = orderedQ[n].question;
      number[i].innerHTML = orderedQ[n].searches + "k";
      image[i].src = "resources/images/cards/" + orderedQ[n].img + ".jpg";
      link[i].href = "#" + orderedQ[n].a;
    }
    if (arr.length == 4) {
    }
  }
}
randomQuestion();

// Show ip
fetch("https://api.ipify.org/?format=json")
  .then((results) => results.json())
  .then(
    (data) =>
      (document.getElementById("show-ip").innerHTML =
        "Your ip is: <br>" + data.ip)
  );

// Show time
function startTime() {
  let today = new Date();
  let h;
  let m;
  let s;
  today.getHours() < 10 ? (h = "0" + today.getHours()) : (h = today.getHours());

  today.getMinutes() < 10
    ? (m = "0" + today.getMinutes())
    : (m = today.getMinutes());

  today.getSeconds() < 10
    ? (s = "0" + today.getSeconds())
    : (s = today.getSeconds());

  t = setTimeout(function () {
    startTime();
  }, 1000);
  document.getElementById("show-time").innerHTML =
    "The time is: <br>" + h + ":" + m + ":" + s;
}
startTime();
