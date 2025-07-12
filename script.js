function reveal() {
  document.querySelectorAll('.reveal').forEach(elem => {
    const windowHeight = window.innerHeight;
    const revealTop = elem.getBoundingClientRect().top;
    if (revealTop < windowHeight - 100) {
      elem.classList.add('active');
    }
  });
}
window.addEventListener('scroll', reveal);

// Update year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle button
const toggleBtn = document.getElementById('themeToggle');
let dark = false;
toggleBtn.addEventListener('click', () => {
  dark = !dark;
  document.documentElement.style.setProperty('--bg-color', dark ? '#111' : '#f5f5f5');
  document.documentElement.style.setProperty('--text-color', dark ? '#fff' : '#000');
  toggleBtn.textContent = dark ? '☀️' : '🌙';
});

// Mobile navigation toggle
document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});
