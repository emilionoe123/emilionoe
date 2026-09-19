const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const cart = [];
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

document.querySelectorAll('.add-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const name = btn.closest('.product-card').dataset.name;
    cart.push(name);
    renderCart();
    btn.textContent = '✓ Agregado';
    setTimeout(() => {
      btn.textContent = 'Agregar al carrito';
    }, 1500);
  });
});

function renderCart() {
  cartItems.innerHTML = '';
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item;
    const remove = document.createElement('button');
    remove.textContent = 'Eliminar';
    remove.className = 'btn btn-outline';
    remove.style.padding = '2px 10px';
    remove.style.fontSize = '0.8rem';
    remove.style.marginLeft = '10px';
    remove.addEventListener('click', () => {
      cart.splice(index, 1);
      renderCart();
    });
    li.appendChild(remove);
    cartItems.appendChild(li);
  });
  cartTotal.textContent = cart.length;
}

const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();

  if (!nombre || !email.includes('@') || !email.includes('.')) {
    formMsg.textContent = 'Por favor verifica tus datos.';
    formMsg.className = 'form-msg error';
  } else {
    formMsg.textContent = '¡Gracias! Tu mensaje ha sido enviado.';
    formMsg.className = 'form-msg';
    contactForm.reset();
  }
});