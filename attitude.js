const quotes = [
  "My attitude is a result of your actions, so if you change yours, I'll change mine.",
  "I’m not heartless, I just learned how to use my heart less.",
  "Attitude is everything, so pick a good one.",
  "I’m not a second option, you either choose me or lose me.",
  "Be savage, not average.",
  "I’m not here to be average, I’m here to be awesome.",
  "Your attitude determines your altitude.",
  "Stay positive, work hard, and make it happen.",
  "Don’t be afraid to be different, be afraid to be the same as everyone else."
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteText = quotes[randomIndex];
  document.getElementById('quote-text').textContent = quoteText;
}

function shareOnWhatsApp() {
  const quote = encodeURIComponent(document.getElementById('quote-text').textContent);
  const url = `https://wa.me/?text=${quote}`;
  window.open(url, '_blank');
}

function shareOnFacebook() {
  const quote = encodeURIComponent(document.getElementById('quote-text').textContent);
  const url = `https://www.facebook.com/sharer/sharer.php?u=&quote=${quote}`;
  window.open(url, '_blank');
}
