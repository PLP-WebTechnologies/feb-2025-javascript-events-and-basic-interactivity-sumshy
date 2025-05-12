// Event Handling
document.getElementById('clickBtn').addEventListener('click', () => {
    alert('Button clicked! 🎉');
  });
  
  document.getElementById('hoverBox').addEventListener('mouseenter', () => {
    event.target.style.backgroundColor = '#d1c4e9';
  });
  
  document.getElementById('hoverBox').addEventListener('mouseleave', () => {
    event.target.style.backgroundColor = '#eee';
  });
  
  document.addEventListener('keydown', (e) => {
    document.getElementById('keyOutput').textContent = e.key;
  });
  
  document.getElementById('secretBox').addEventListener('dblclick', () => {
    alert('🎊 Surprise! You found the secret action!');
  });
  
  // Tabs
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const selectedTab = tab.getAttribute('data-tab');
      document.querySelectorAll('.tab-content').forEach(content => {
        content.style.display = 'none';
      });
      document.getElementById(`tab${selectedTab}`).style.display = 'block';
    });
  });
  
  // Image Gallery
  const images = [
    'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg',
    'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg',
    'https://images.pexels.com/photos/34950/pexels-photo.jpg',
    'https://images.pexels.com/photos/547115/pexels-photo-547115.jpeg',
    'https://images.pexels.com/photos/459301/pexels-photo-459301.jpeg'
  ];
  
  let currentImg = 0;
  
  document.getElementById('nextBtn').addEventListener('click', () => {
    currentImg = (currentImg + 1) % images.length;
    document.getElementById('galleryImage').src = images[currentImg];
  });
  
  document.getElementById('prevBtn').addEventListener('click', () => {
    currentImg = (currentImg - 1 + images.length) % images.length;
    document.getElementById('galleryImage').src = images[currentImg];
  });
  
  // Form Validation
  const form = document.getElementById('signupForm');
  const passwordInput = document.getElementById('password');
  const passwordFeedback = document.getElementById('passwordFeedback');
  const message = document.getElementById('formMessage');
  
  passwordInput.addEventListener('input', () => {
    if (passwordInput.value.length < 8) {
      passwordFeedback.textContent = 'Password too short!';
    } else {
      passwordFeedback.textContent = '✅ Looks good!';
    }
  });
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = passwordInput.value.trim();
  
    if (!name || !email || !password) {
      message.textContent = 'Please fill out all fields.';
      return;
    }
  
    if (!email.includes('@') || !email.includes('.')) {
      message.textContent = 'Invalid email format.';
      return;
    }
  
    if (password.length < 8) {
      message.textContent = 'Password must be at least 8 characters.';
      return;
    }
  
    message.textContent = '✅ Form submitted successfully!';
  });
  