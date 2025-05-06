// Анимация появления секций
const sections = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  observer.observe(section);
});

// Валидация формы
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const response = document.getElementById('form-response');

  if (!name || !email || !message) {
    response.textContent = 'Пожалуйста, заполните все поля.';
    response.style.color = 'red';
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    response.textContent = 'Введите корректный email.';
    response.style.color = 'red';
    return;
  }

  response.textContent = 'Спасибо! Ваше сообщение отправлено.';
  response.style.color = 'green';

  this.reset();
});