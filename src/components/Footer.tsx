import {
    FaLinkedin,
    FaGithub,
    FaGlobe,
    FaPhone,
    FaEnvelope,
    FaWhatsapp,
    FaMapMarker,
  } from "react-icons/fa";
  import { motion } from "framer-motion";
  import { useState } from "react";
  import Modal from "./Modal"; // Ensure this component is properly typed as well
  import "./Footer.css";
  
  type FooterProps = {
    animateCallIcon: boolean;
  };
  
  const Footer: React.FC<FooterProps> = ({ animateCallIcon }) => {
    const currentYear = new Date().getFullYear();
    const [showPrivacy, setShowPrivacy] = useState<boolean>(false);
    const [showTerms, setShowTerms] = useState<boolean>(false);
  
    const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };
  
    return (
      <footer className="footer">
        <div className="footer-content container">
          {/* Main Footer Content */}
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-section">
              <h3>Yaqin Ventures</h3>
              <p>
                Empowering farmers by creating market opportunities for African produce through innovative processing and strategic marketing.
              </p>
              <div className="social-links">
                    <a
                    href="tel:+17746027563"
                    title="Call Us"
                    className={`social-link ${animateCallIcon ? 'animate' : ''}`}
                    >
                    <FaPhone />
                    </a>
                    <a
                    href="https://wa.me/+17746027563"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Chat on WhatsApp"
                    className="social-link"
                    >
                    <FaWhatsapp />
                    </a>
                    <a
                    href="#contact"
                    onClick={scrollToContact}
                    title="Email Us"
                    className="social-link"
                    >
                    <FaEnvelope />
                    </a>
                    <a
                    href="https://www.linkedin.com/company/bridged-consultants"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Connect on LinkedIn"
                    className="social-link"
                    >
                    <FaLinkedin />
                    </a>
                    {/* Add a location icon from React Icons */}
                    <a
                    href="https://www.google.com/maps/place/Manga+House,+Nairobi,+Kenya"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View on Google Maps"
                    className="social-link"
                    >
                    <FaMapMarker />
                    </a>
                </div>
            </div>
  
            {/* Quick Links */}
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="tel:+17746027563">Call Us</a>
                </li>
                <li>
                  <a href="https://wa.me/+17746027563">Chat With Us</a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={scrollToContact}
                    className="quick-link"
                  >
                    Email Us
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      const servicesSection =
                        document.querySelector(".services-section");
                      if (servicesSection) {
                        servicesSection.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }}
                    className="quick-link"
                  >
                    Our Services
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Services - Updated with web development */}
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li>
                  <a
                    href="#contact"
                    onClick={scrollToContact}
                    className="service-link"
                  >
                    Healthcare Staffing
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={scrollToContact}
                    className="service-link"
                  >
                    Temporary Placement
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={scrollToContact}
                    className="service-link"
                  >
                    Consulting Services
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={scrollToContact}
                    className="service-link"
                  >
                    Talent Solutions
                  </a>
                </li>
                <li className="developer-service">
                  <a
                    onClick={scrollToContact}
                    className="service-link website-consulting"
                  >
                    Website Building Consulting
                  </a>
                  <div className="developer-credit-container">
                    <motion.div
                      className="developer-label"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      Site Developed by Sean Donovan
                    </motion.div>
                    <motion.div
                      className="developer-social-links"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <motion.a
                        href="https://seandonovan.tech/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Contact Developer"
                        whileHover={{
                          scale: 1.1,
                          color: "#4FB8F7",
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGlobe />
                      </motion.a>
                      <motion.a
                        href="https://github.com/INTSEAN"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Developer's GitHub"
                        whileHover={{
                          scale: 1.1,
                          color: "#6cc644",
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub />
                      </motion.a>
                      <motion.a
                        href="https://www.linkedin.com/in/seandonovan-upenn/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Developer's LinkedIn"
                        whileHover={{
                          scale: 1.1,
                          color: "#0077b5",
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaLinkedin />
                      </motion.a>
                    </motion.div>
                  </div>
                </li>
              </ul>
            </div>
  
            {/* Newsletter Signup */}
            <div className="footer-section">
              <h4>Stay Updated</h4>
              <p>
                Subscribe to our newsletter for industry insights and updates.
              </p>
              <form
                className="newsletter-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email for newsletter"
                />
                <button type="submit" className="btn text-green-700 bg-white btn-primary">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
  
          {/* Bottom Bar */}
          <div className="footer-bottom">
            <p>&copy; {currentYear} Yaqin Ventures. All rights reserved.</p>
            <div className="footer-bottom-links">
              <button onClick={() => setShowPrivacy(true)} className="legal-link">
                Privacy Policy
              </button>
              <button onClick={() => setShowTerms(true)} className="legal-link">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
  
        {/* Privacy Policy Modal */}
        <Modal
          isOpen={showPrivacy}
          onClose={() => setShowPrivacy(false)}
          title="Yaqin Ventures Legal"
        >
          <div className="legal-content">
            <h2 className="text-2xl font-bold text-green-700">Privacy Policy</h2>
            <p>Last updated: {new Date().toLocaleDateString()}</p>
  
            <section>
              <h3>1. Information We Collect</h3>
              <p>
                We collect information that you provide directly to us, including:
              </p>
              <ul>
                <li>Name and contact information</li>
                <li>Business and employment information</li>
                <li>Shipping and export information</li>
              </ul>
            </section>
  
            <section>
              <h3>2. How We Use Your Information</h3>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide shipping and export services</li>
                <li>Match business with potential clients</li>
                <li>Communicate about opportunities</li>
                <li>Improve our services</li>
              </ul>
            </section>
  
            <section>
              <h3>3. Information Sharing</h3>
              <p>We may share your information with:</p>
              <ul>
                <li>Potential clients</li>
                <li>Service providers</li>
                <li>As required by law</li>
              </ul>
            </section>
          </div>
        </Modal>
  
        {/* Terms of Service Modal */}
        <Modal
          isOpen={showTerms}
          onClose={() => setShowTerms(false)}
          title="Yaqin Ventures Legal"
        >
          <div className="legal-content">
            <h2>Terms of Service</h2>
            <p>Last updated: {new Date().toLocaleDateString()}</p>
  
            <section>
              <h3>1. Services</h3>
              <p>
                Yaqin Ventures provides shipping and export services.
              </p>
            </section>
            <section>
              <h3>2. User Responsibilities</h3>
              <p>Users of our services agree to:</p>
              <ul>
                <li>Provide accurate information</li>
                <li>Maintain confidentiality</li>
                <li>Comply with all applicable laws</li>
              </ul>
            </section>
            <section>
              <h3>3. Liability</h3>
              <p>
                Yaqin Ventures strives to provide accurate and reliable
                services.
                We are not liable for any damages or losses resulting from the use of our services.
              </p>
            </section>
          </div>
        </Modal>
      </footer>
    );
  };
  
  export default Footer;