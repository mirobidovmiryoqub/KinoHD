// NAV TOGGLE (mobile)
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector('.toggle-btn');
    const navList = document.querySelector('#navbar ul');
    
    if (toggle && navList) {
      toggle.addEventListener('click', () => {
        navList.classList.toggle('show');
      });
    }
  
    // STAR RENDERING FROM data-rating
    document.querySelectorAll('[data-rating]').forEach(el => {
      const rating = parseFloat(el.getAttribute('data-rating'));
      let stars = '';
      for (let i = 1; i <= 5; i++) {
        if (rating >= i) stars += '<i class="fas fa-star"></i>';
        else if (rating >= i - 0.5) stars += '<i class="fas fa-star-half-alt"></i>';
        else stars += '<i class="far fa-star"></i>';
      }
      el.innerHTML = stars;
    });
  
    // SCROLL TO TOP BUTTON
    const scrollBtn = document.createElement('button');
    scrollBtn.id = "scrollTopBtn";
    scrollBtn.innerHTML = "↑";
    document.body.appendChild(scrollBtn);
  
    window.onscroll = () => {
      if (window.scrollY > 300) scrollBtn.style.display = "block";
      else scrollBtn.style.display = "none";
    };
  
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
  