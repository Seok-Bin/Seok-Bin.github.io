const quotes = [
  {
    quote: "나이가 성숙을 보장하지는 않는다.",
    author: "(Lawana Blackwell)",
  },
  {
    quote: "여행은 되돌아 보았을 때에만 매력적이다.",
    author: "(Paul Theroux)",
  },
  {
    quote: "내가 태어났을 때 나는 너무 놀라서 1년 반동안 말을 할 수 없었다.",
    author: "(Gracie Allen)",
  },
  {
    quote: "인생은 지긋지긋한 일의 반복이 아니라 지긋지긋한 일의 연속이다.",
    author: "(Edna St. Vincent Millay)",
  },
  {
    quote: "20대에 당신의 얼굴은 자연이 준 것이지만, 50대의 당신의 얼굴은 스스로 가치를 만들어야 한다.",
    author: "(Gabriel Coco Chanel)",
  },
  {
    quote: "우리는 나이가 들면서 변하는 게 아니다. 보다 자기다워지는 것이다.",
    author: "(Lynn Hall)",
  },
  {
    quote: "행동의 가치는 그 행동을 끝까지 이루는 데 있다.",
    author: "(Genghis Khan)",
  },
  {
    quote: "결국 삶이란 여러분이 되고자 했던 완벽한 인격체로 거듭나는 것입니다.",
    author: "(Oprah Winfrey)",
  },
  {
    quote: "성공한 사람이 될 수 있는데 왜 평범한 이에 머무르려 하는가?",
    author: "(Bertolt Brecht)",
  },
  {
    quote: "인생에서 실패한 사람 중 다수는 성공을 목전에 두고도 모른 채 포기한 이들이다.",
    author: "(Thomas A. Edison)",
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQoute = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQoute.quote;
author.innerText = todaysQoute.author;

