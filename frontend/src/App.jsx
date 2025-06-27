import { useState, useEffect } from 'react';
import viteLogo from './assets/logo.jpg'; // adjust your path if needed
import './App.css'; // Optional: your styling file

import { FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa';

function App() {
  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <button className="close-btn" onClick={closePopup}>X</button>
            <div>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </a>
            </div>
            <h1>OOPs! Website is under Construction...</h1>
            <p>
              A student-led tech initiative empowering developers to think like founders.
              We focus on real-world skills, startup mindset, team projects, and community growth.
            </p>
            <hr />
            <p className="read-the-docs" style={{ textAlign: 'start' }}>
              Lead: Zain Zahid <br />
              CO-Lead: Hassan Kahleel & Aqdas Ansari
            </p>
            <hr />
            <p className="read-the-docs">
              " kuch bara krny mai time lagta hai..."
            </p>
            <a
              href="https://chat.whatsapp.com/JOHKrpozDHhHrtq1KtHtla"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              <FaWhatsapp size={28} style={{ marginRight: '8px' }} />
              Join Our Comunity
            </a>
            <div className="social-icons">

              <a
                href="https://www.linkedin.com/company/next-dev-nation/posts?lipi=urn%3Ali%3Apage%3Aorganization_admin_admin_page_posts_published%3B647dfc27-d545-4a60-a2d2-349f2556f6a8"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="http://instagram.com/nextdevnation.pk/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <FaInstagram />
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default App;
