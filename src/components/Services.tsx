import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';
import './Services.css';

type Service = {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
};

const servicesList: Service[] = [
  {
    id: 1,
    title: "Farmers",
    shortDesc: "Empowering farmers for sustainable agriculture",
    fullDesc: "We put farmers at the center of everything we do. We work closely with them to promote sustainable agriculture practices, enhance their capacity, and provide them with access to markets and resources. We believe that by empowering farmers, we can create economic opportunities that benefit both the farmers and their communities.",
    icon: "🌾"
  },
  {
    id: 2,
    title: "Clients and Customers",
    shortDesc: "High-quality produce for our customers",
    fullDesc: "We prioritize our customers, ensuring that we provide high-quality produce that meets their needs and exceeds their expectations. We take great care to source our produce ethically, ensuring that it is sustainably produced and of exceptional quality.",
    icon: "🛒"
  },
  {
    id: 3,
    title: "Partners",
    shortDesc: "Collaborative efforts for a sustainable ecosystem",
    fullDesc: "We recognize the importance of working collaboratively with stakeholders across the agricultural value chain. We believe that by engaging with government agencies, NGOs, research institutions, and private sector companies, we can create a more sustainable and inclusive agribusiness ecosystem that benefits everyone. Through these collaborative efforts, we aim to promote sustainable agriculture practices, create economic opportunities for farmers, and enrich the lives of everyone involved in the value chain.",
    icon: "🤝"
  },
  {
    id: 4,
    title: "Technology and Shipping",
    shortDesc: "Ensuring quality in export logistics",
    fullDesc: "We utilize advanced technology to optimize shipping processes and ensure the care of exported products. Our focus is on maintaining product quality during transit, reducing delays, and enhancing the efficiency of our logistics operations to meet international standards.",
    icon: "🚢"
  }
];

type ServiceRowProps = {
  service: Service;
  isOpen: boolean;
  toggleOpen: () => void;
};

const ServiceRow: React.FC<ServiceRowProps> = ({ service, isOpen, toggleOpen }) => {
  return (
    <motion.div 
      className="service-row"
      initial={false}
    >
      <div className="service-header" onClick={toggleOpen}>
        <div className="service-title-section">
          <span className="service-icon">{service.icon}</span>
          <div className="service-title-content">
            <h3>{service.title}</h3>
            <p className="service-short-desc">{service.shortDesc}</p>
          </div>
        </div>
        <motion.button 
          className="expand-button"
          animate={{ 
            rotate: isOpen ? 180 : 0,
            backgroundColor: isOpen ? '#1750ad' : '#0ebb2c'
          }}
          whileHover={{ 
            scale: 1.1,
            backgroundColor: '#047857'
          }}
          whileTap={{ scale: 0.95 }}
          title={isOpen ? "Show less" : "Show more"}
        >
          {isOpen ? <FiMinus /> : <FiPlus />}
        </motion.button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="service-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{service.fullDesc}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const [openService, setOpenService] = useState<number | null>(null);

  const toggleService = (serviceId: number) => {
    setOpenService(openService === serviceId ? null : serviceId);
  };

  return (
    <section className="services-section" id="services">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="services-header"
        >
          <h2 className='font-bold text-4xl'>Our Services</h2>
          <p>Our mission is to empower smallholder farmers and enrich lives through sustainable agribusiness.
          </p>
        </motion.div>

        <div className="services-container">
          {servicesList.map((service) => (
            <ServiceRow
              key={service.id}
              service={service}
              isOpen={openService === service.id}
              toggleOpen={() => toggleService(service.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;