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
        <h2>Software Engineer – Backend Java Developer at Infrrd</h2>
        <p>
          <strong>Role and Impact:</strong><br>
          At Infrrd, I worked as a Backend Java Developer, contributing to a product that transformed how documents are
          processed and managed. Collaborating with a dynamic team, I took on challenges that ranged from building efficient
          processing pipelines to enhancing secure user logins.
        </p>
        <h3>Key Contributions:</h3>
        <ul>
          <li>
            <strong>Streamlined Document Processing:</strong> I helped design a feature that intelligently scans diverse storage
            systems to identify documents that need processing. Using advanced algorithms and priority queues, we balanced
            workloads and cut down processing latency by about 20%.
          </li>
          <li>
            <strong>Enhanced User Authentication:</strong> I played a vital role in implementing a Single Sign-On (SSO) solution
            using Spring Security SAML and OAuth. This made a huge difference by reducing the login process for over 500 users
            from 5 steps to just 2 — making the platform both more secure and user-friendly.
          </li>
          <li>
            <strong>Innovative Document Classification:</strong> I introduced a heuristic-based system for classifying similar
            documents, achieving near-perfect accuracy without heavily relying on machine learning. This approach ensured fast
            and efficient processing while maintaining high precision.
          </li>
        </ul>
        <h3>System and Quality Improvements:</h3>
        <ul>
          <li>
            Developed a message-queue based load balancer, contributing to a modular, event-driven architecture designed to
            support fluctuating workloads.
          </li>
          <li>
            Integrated real-time monitoring into our machine learning pipelines, enabling swift anomaly detection and
            automatic failure tracking for millions of document fields.
          </li>
          <li>
            Optimized MongoDB collections by refining indexing and aggregation pipelines, ensuring smooth handling of large
            documents (300+ pages).
          </li>
          <li>
            Embraced Test-Driven Development (TDD) practices to build a robust JUnit test suite, reaching 92% code coverage
            and ensuring high-quality, maintainable code.
          </li>
        </ul>
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
  