// Interaction bouton "Découvrir nos cours"
const decouvrirBtn = document.getElementById("decouvrirBtn");
if (decouvrirBtn) {
  decouvrirBtn.addEventListener("click", () => {
    document.getElementById("styles")?.scrollIntoView({ behavior: "smooth" });
  });
}

// Mise à jour des descriptions de styles
const styles = document.querySelectorAll('.style');
const descriptionBox = document.getElementById('description');

if (styles.length && descriptionBox) {
  styles.forEach(style => {
    style.addEventListener('click', () => {
      const text = style.getAttribute('data-description');
      descriptionBox.textContent = text;
    });
  });
}
