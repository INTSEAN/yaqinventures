import {
  FaLinkedin,
  FaGithub,
  FaGlobe,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarker,
} from "react-icons/fa";
import { color, motion } from "framer-motion";
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
            <h3>Yaqin Ventures Limited</h3>
            <p>
              Empowering farmers by creating market opportunities for African produce through innovative processing and strategic marketing.
            </p>
            <h2>Contact Us</h2>
            <div className="social-links">
              <a
                href="tel:+254703382976"
                title="Call Us"
                className={`social-link ${animateCallIcon ? 'animate' : ''}`}
              >
                <FaPhone />
              </a>
              <a
                href="https://wa.me/+254703382976"
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

            <p className="social-links">
              <div className="space-y-5 my-10">
                <div className="flex items-center space-x-4">
                  <FaMapMarker className="w-6 h-6 text-slate-0" />
                  <span>Manga House, Nairobi, Kenya</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FaPhone className="w-6 h-6 text-slate-0" />
                  <span>+254 703 382 976</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="w-6 h-6 text-slate-0" />
                  <span>Yakinholdingint@gmail.com</span>
                </div>
              </div>            
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="tel:+254703382976">Call Us</a>
              </li>
              <li>
                <a href="https://wa.me/+254703382976">Chat With Us</a>
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
          {/* Products */}
          <div className="footer-section">
            <h4>Our Products</h4>
            <ul>
              <li>
                <li><a href="#products">Tea</a></li>
                <li><a href="#products">Coffee</a></li>
                <li><a href="#products">Dried Chilli</a></li>
                <li><a href="#products">Mangoes</a></li>
                <li><a href="#products">Dried Mangoes</a></li>
                <li><a href="#products">Avocados</a></li>
                <li><a href="#products">Avocado Oil</a></li>
                <li><a href="#products">Mint</a></li>
                <li><a href="#products">Nuts</a></li>
                <li><a href="#products">Flower Export</a></li>
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
                  Shipping Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className="service-link"
                >
                  Export Services
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
                  Marketing Services
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

        <div className="footer-section">
          <h4>Location</h4>
          <div className="relative bg-white">
            <iframe
              width="100%"
              height="450"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Manga%20House&zoom=10&maptype=roadmap"
              className="border-0 relative z-20"
            ></iframe>
            <a
              href="https://dodsafe.org"
              className="absolute left-0 top-0 z-0 text-transparent"
            >
              dod safe
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} Yaqin Ventures Limited. All rights reserved.</p>
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