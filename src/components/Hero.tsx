export default function Hero() {
  return (
    <div id="home" className="relative h-screen">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('../src/assets/image7.jpg')", backgroundAttachment: 'fixed' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Catalyzing Sustainable Growth in African Agriculture
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Creating opportunities for African agricultural produce
          </p>
          <a
            href="#contact"
            style={{ background: 'linear-gradient(45deg, #0ebb2c, #0ebb2c)' }}
            className="text-white px-8 py-3 rounded-lg transition duration-300"
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#03634a'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#047857'}
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}