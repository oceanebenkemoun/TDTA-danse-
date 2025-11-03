// Petit effet interactif sur le bouton "Découvrir nos cours"
document.getElementById("decouvrirBtn").addEventListener("click", function() {
  document.getElementById("styles").scrollIntoView({ behavior: "smooth" });
});
