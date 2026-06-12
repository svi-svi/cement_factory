document.getElementById('calc-btn').addEventListener('click', function() {

  // Зчитуємо значення з полів
  const length = parseFloat(document.getElementById('calc-length').value);
  const width  = parseFloat(document.getElementById('calc-width').value);
  const height = parseFloat(document.getElementById('calc-height').value);
  const grade  = parseInt(document.getElementById('calc-grade').value);
  const type   = document.getElementById('calc-type').value;

  // Перевірка — чи всі поля заповнені
  if (!length || !width || !height) {
    alert('Будь ласка, заповніть всі поля розмірів');
    return;
  }

  // Розрахунок об'єму
  const volume = length * width * height;

  // Запас матеріалу залежно від типу конструкції
  const reserve = type === 'foundation' ? 1.1 : 1.05;
  const volumeWithReserve = volume * reserve;

  // Розрахунок вартості
  const cost = volumeWithReserve * grade;

  // Назви типів
  const typeNames = {
    foundation: 'Фундамент',
    slab: 'Стяжка підлоги',
    wall: 'Стіна'
  };

  // Відображаємо результат
  document.getElementById('calc-result').innerHTML = `
    <div class="result-content">
      <h3>Результат розрахунку — ${typeNames[type]}</h3>

      <div class="result-row">
        <span class="result-label">Розміри</span>
        <span class="result-value">${length} × ${width} × ${height} м</span>
      </div>

      <div class="result-row">
        <span class="result-label">Чистий об'єм</span>
        <span class="result-value">${volume.toFixed(2)} м³</span>
      </div>

      <div class="result-row">
        <span class="result-label">З запасом (${reserve === 1.1 ? '10%' : '5%'})</span>
        <span class="result-value">${volumeWithReserve.toFixed(2)} м³</span>
      </div>

      <div class="result-row result-total">
        <span class="result-label">Орієнтовна вартість</span>
        <span class="result-value">${cost.toLocaleString('uk-UA')} грн</span>
      </div>
    </div>
  `;
  // Галерея — лайтбокс
function openPhoto(item) {
  const img     = item.querySelector('img');
  const caption = item.querySelector('.gallery-overlay span');

  document.getElementById('lightbox-img').src     = img.src;
  document.getElementById('lightbox-img').alt     = img.alt;
  document.getElementById('lightbox-caption').textContent = caption.textContent;

  document.getElementById('lightbox').classList.add('active');
}

function closePhoto() {
  document.getElementById('lightbox').classList.remove('active');
}
// Форма замовлення
document.getElementById('form-btn').addEventListener('click', function() {

  const name    = document.getElementById('form-name').value.trim();
  const phone   = document.getElementById('form-phone').value.trim();
  const product = document.getElementById('form-product').value;

  // Перевірка обов'язкових полів
  if (!name) {
    alert("Будь ласка, введіть ваше ім'я");
    return;
  }
  if (!phone) {
    alert('Будь ласка, введіть номер телефону');
    return;
  }
  if (!product) {
    alert('Будь ласка, оберіть продукцію');
    return;
  }

  // Імітація відправки — ховаємо кнопку, показуємо повідомлення
  document.getElementById('form-btn').style.display = 'none';
  document.getElementById('form-success').style.display = 'block';

  // Очищаємо форму
  document.getElementById('form-name').value    = '';
  document.getElementById('form-phone').value   = '';
  document.getElementById('form-product').value = '';
  document.getElementById('form-comment').value = '';
});
});