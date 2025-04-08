document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
  
    // Toggle the mobile navigation menu
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    // Hamburger Menu Toggle (if not already implemented)
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    if (hamburger) {
      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });
    }
  
    // Modal functionality for cards
    const modal = document.getElementById('detail-modal');
    const closeModal = document.querySelector('.modal-close');
    const detailButtons = document.querySelectorAll('.details-btn');
    const modalDetails = document.getElementById('modal-details');
  
    // Example detailed content for each card
    const experienceDetails = {
      exp1: `
        <h4>Infrrd - Detailed Experience</h4>
        <p>
          At Infrrd, I was part of the backend development team where I designed and implemented
          scalable solutions. My responsibilities included API development, data processing, and
          performance optimization.
        </p>
        <p>
          Technologies used: Java, Spring Boot, MySQL, and AWS.
        </p>
      `,
      exp2: `
        <h4>Other Company - Detailed Experience</h4>
        <p>
          In my role at Other Company, I led projects focused on improving system reliability and
          enhancing user experience through modern web technologies.
        </p>
        <p>
          Technologies used: Node.js, Express, and MongoDB.
        </p>
      `
    };
  
    const educationDetails = {
      edu1: `
        <h4>Rochester Institute of Technology</h4>
        <p>
          Pursuing an MS in Computer Science with a focus on software engineering and emerging technologies.
        </p>
      `,
      edu2: `
        <h4>University Name</h4>
        <p>
          Completed a BE in Information Science with extensive coursework in software development,
          algorithms, and systems design.
        </p>
      `
    };
  
    // Open modal when a "Read More" button is clicked
    detailButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = btn.getAttribute('data-target');
        // Determine if the target is an experience or education detail
        if (experienceDetails[target]) {
          modalDetails.innerHTML = experienceDetails[target];
        } else if (educationDetails[target]) {
          modalDetails.innerHTML = educationDetails[target];
        } else {
          modalDetails.innerHTML = `<p>More details coming soon...</p>`;
        }
        modal.style.display = 'flex';
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
    const speedFactor = 0.1;
  
    // Update background position using translateY
    parallax.style.transform = 'translateY(-' + scrolled * speedFactor + 'px)';
  });
  