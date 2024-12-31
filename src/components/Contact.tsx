import React, { useState } from "react";
import { motion } from "framer-motion";

type ContactProps = {
  onContactClick?: () => void;
};

type FormDetails = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

type Status = {
  message?: string;
  success?: boolean;
};

const Contact: React.FC<ContactProps> = ({ onContactClick }) => {
  const formInitialDetails: FormDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState<FormDetails>(formInitialDetails);
  const [buttonText, setButtonText] = useState<string>("Send");
  const [status, setStatus] = useState<Status>({});

  function onFormUpdate(category: keyof FormDetails, value: string) {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [category]: value,
    }));
  }

  return (
    <>
    <section className="contact" id="contact">
      <div className="contact-container">
        {/* Left side - Image */}
        <motion.div
          className="contact-image"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://plus.unsplash.com/premium_vector-1718640967558-ec56217287fe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bG9nbyUyMGFncmljdWx0dXJlfGVufDB8fDB8fHww"
            alt="Contact Us"
          />
        </motion.div>

        {/* Right side - Form */}
        <motion.div
          className="contact-form"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Request a Consultation</h2>
          <form action="https://api.web3forms.com/submit" method="POST">
            <input
              type="hidden"
              name="access_key"
              value="[TODO]"
            />

            <div className="form-row">
              <input
                type="text"
                name="firstName"
                required
                value={formDetails.firstName}
                placeholder="First Name"
                onChange={(e) => onFormUpdate("firstName", e.target.value)}
              />
              <input
                type="text"
                name="lastName"
                required
                value={formDetails.lastName}
                placeholder="Last Name"
                onChange={(e) => onFormUpdate("lastName", e.target.value)}
              />
            </div>

            <div className="form-row">
              <input
                type="email"
                name="email"
                required
                value={formDetails.email}
                placeholder="Email Address"
                onChange={(e) => onFormUpdate("email", e.target.value)}
              />
              <input
                type="tel"
                name="phone"
                value={formDetails.phone}
                placeholder="Contact Number"
                onChange={(e) => onFormUpdate("phone", e.target.value)}
              />
            </div>

            <textarea
              rows={6}
              name="message"
              required
              value={formDetails.message}
              placeholder="Please let us know how we can support you or your organization."
              onChange={(e) => onFormUpdate("message", e.target.value)}
            ></textarea>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{buttonText}</span>
            </motion.button>

            {status.message && (
              <div
                className={`status-message ${
                  status.success ? "success" : "danger"
                }`}
              >
                {status.message}
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default Contact;
