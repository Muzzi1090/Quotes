const quotes = [
  "Believe in yourself!",
  "Stay positive, work hard, make it happen.",
  "Success is not final; failure is not fatal.",
  "Be yourself; everyone else is already taken.",
  "Push yourself, because no one else is going to do it for you."
];

function generateQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").textContent = quote;
}
