
// Add this in your <script> tag or external JS file
document.querySelectorAll('.crypto-card').forEach(card => {
  card.addEventListener('click', () => {
    const coinName = card.getAttribute('data-name');
    const logoUrl = card.getAttribute('data-logo');
    const walletAddress = card.getAttribute('data-wallet');

    const coinData = { coinName, logoUrl, walletAddress };
    localStorage.setItem('selectedCoin', JSON.stringify(coinData));
    window.location.href = 'wallet.html';
  });
});
