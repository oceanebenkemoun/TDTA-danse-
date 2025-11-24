// Petit effet interactif sur le bouton "Découvrir nos cours"
document.getElementById("decouvrirBtn").addEventListener("click", function() {
  document.getElementById("styles").scrollIntoView({ behavior: "smooth" });
});


// --- SCRIPT POUR LES DESCRIPTIONS DES STYLES ---
const styles = document.querySelectorAll('.style');
const descriptionBox = document.getElementById('description');

styles.forEach(style => {
  style.addEventListener('click', () => {
    const text = style.getAttribute('data-description');
    descriptionBox.textContent = text;
  });
});
