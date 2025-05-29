
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

function shareQuote(platform) {
  const quote = document.getElementById("quote").textContent;
  let url = "";
  if (platform === 'whatsapp') {
    url = `https://wa.me/?text=${encodeURIComponent(quote)}`;
  } else if (platform === 'facebook') {
    url = `https://www.facebook.com/sharer/sharer.php?u=https://muzzi1090.github.io/&quote=${encodeURIComponent(quote)}`;
  }
  window.open(url, '_blank');
}

document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

document.getElementById("search-bar").addEventListener("input", function() {
  const searchTerm = this.value.toLowerCase();
  const quoteBlock = document.getElementById("quote");
  const match = quotes.find(q => q.toLowerCase().includes(searchTerm));
  quoteBlock.textContent = match || "No matching quote found.";
});
