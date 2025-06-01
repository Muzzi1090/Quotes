const quotes = [
  "I’m not special, I’m just a limited edition.",
  "Don’t follow me, I’m lost too.",
  "Attitude is everything, so pick a good one.",
  "I don’t have an attitude problem, I just have a personality you can’t handle.",
  "I’m not rude, I just speak what everyone else is thinking.",
];

const quoteList = document.getElementById("quoteList");
quotes.forEach(q => {
  const li = document.createElement("li");
  li.textContent = q;
  quoteList.appendChild(li);
});
