function toggleDropdown() {
  const dropdown = document.getElementById("diceDropdown");
  const isDropdownOpen = dropdown.classList.toggle("show");

  if (!isDropdownOpen) {
    // Ripristina le etichette originali quando la dropdown viene chiusa
    const diceButtons = document.querySelectorAll(".dropdown-content button");
    diceButtons.forEach(button => {
      const sides = button.id.slice(1); // Ottieni il numero di facce dal buttonId
      button.innerText = `D${sides}`;
    });
  }
}

function rollDice(sides, buttonId) {
  const result = Math.floor(Math.random() * sides) + 1;
  const buttonText = `D${sides}: ${result}`;
  document.getElementById(buttonId).innerText = buttonText;
}

function toggleDiv(bannerId) {
  const banner = document.getElementById(bannerId);
  const content = banner.querySelector('.content');

  banner.classList.toggle('open');
  content.style.height = banner.classList.contains('open') ? `${content.scrollHeight}px` : '0';

  const banners = document.querySelectorAll('.banner');
  banners.forEach((otherBanner) => {
      if (otherBanner.id !== bannerId) {
          otherBanner.classList.remove('open');
          const otherContent = otherBanner.querySelector('.content');
          otherContent.style.height = '0';
      }
  });
}

const modal = document.getElementById("layer");
function openModal(){
  modal.classList.toggle("hidden");
}
