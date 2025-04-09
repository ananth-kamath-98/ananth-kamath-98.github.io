document.addEventListener("DOMContentLoaded", () => {
  // Get modal elements
  const modal = document.getElementById('detail-modal');
  const closeModal = document.querySelector('.modal-close');
  const modalDetails = document.getElementById('modal-details');
  
  // Function to load content from file
  function loadContent(expId) {
    fetch(`../assets/content/${expId}.html`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        return response.text();
      })
      .then(html => {
        modalDetails.innerHTML = html;
        modal.style.display = 'flex';
      })
      .catch(error => {
        console.error('Error loading content:', error);
        modalDetails.innerHTML = "<p>Error loading content.</p>";
        modal.style.display = 'flex';
      });
  }
  
  // Add event listeners to the "Read More" buttons:
  const detailButtons = document.querySelectorAll('.details-btn');
  detailButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetId = btn.getAttribute('data-target'); // e.g., "exp1" or "exp2"
      loadContent(targetId);
    });
  });
  
  // Close modal when clicking the close icon or outside the modal content
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});


  document.addEventListener("DOMContentLoaded", () => {
    const heroSection = document.getElementById('hero');
    const profileCard = document.getElementById('profile-card');
  
    const options = {
      root: null,        // viewport
      threshold: 0.5    // when 10% of hero is visible
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          profileCard.classList.add('expanded');
        } else {
          profileCard.classList.remove('expanded');
        }
      });
    }, options);
  
    observer.observe(heroSection);
  });
  
  document.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.parallax-bg');
  
    // Adjust the parallax scrolling speed factor (e.g., 0.5 means slower movement)
    const speedFactor = 0.05;
  
    // Update background position using translateY
    parallax.style.transform = 'translateY(-' + scrolled * speedFactor + 'px)';
  });
  