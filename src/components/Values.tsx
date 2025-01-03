import './Values.css';

const coreValues = [
  { letter: "V", title: "Value Creation", description: "We strive to create value for our customers, our farmers, and our stakeholders by promoting sustainable agriculture practices and fostering economic growth and development in the agricultural sector." },
  { letter: "I", title: "Integrity", description: "We conduct our business with honesty, transparency, and respect for all stakeholders, building trust and credibility in everything we do." },
  { letter: "S", title: "Sustainability", description: "We are committed to promoting environmental sustainability and social responsibility through our business practices, recognizing our responsibility to protect the planet and support the well-being of our communities." },
  { letter: "A", title: "Accountability", description: "We take responsibility for our actions and decisions, ensuring that we are accountable for our results and outcomes." },
  { letter: "L", title: "Leadership", description: "We are committed to promoting environmental sustainability and social responsibility through our business practices, recognizing our responsibility to protect the planet and support the well-being of our communities." },
  { letter: "Q", title: "Quality", description: "We are committed to delivering exceptional quality produce to our customers and upholding the highest standards in everything we do." },
];

const Values = () => {
  const gradientColors = [
    '#1750ad', // Start color
    '#0ebb2c',
    '#1750ad',
    '#0ebb2c',
    '#1750ad',
    '#0ebb2c',
    '#1750ad',
    '#0ebb2c', // End color
  ];

  return (
    <div className="values-container">
      <h1 className="values-title">Our Core Values</h1>
      <p className="values-subtitle">
        Our values bind us together as a team and inspire our service, actions and behaviours internally and externally.
      </p>
      <div className="values-carousel">
        {coreValues.map((value, index) => (
          <div
            className="value-card"
            key={index}
            style={{ backgroundColor: gradientColors[index % gradientColors.length] }}
          >
            <h3 className="value-letter">{value.letter}</h3>
            <h4 className="value-title">{value.title}</h4>
            <p className="value-description">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;

