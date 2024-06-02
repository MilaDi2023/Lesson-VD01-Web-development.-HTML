document.querySelectorAll('.card-inner').forEach(card => {
  card.addEventListener('click', () => {
    const parentCard = card.closest('.card');
    parentCard.classList.toggle('is-flipped');
  });
});
