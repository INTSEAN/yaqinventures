import React, { useState } from 'react';
import './Videos.css';

const Videos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoSources = [
    "https://www.youtube.com/embed/MDWE0la8jAE",
    "https://www.youtube.com/embed/4r7_eqjZdFw",
    "https://www.youtube.com/embed/YFKuaTuCJcQ",
    "https://www.youtube.com/embed/TVPTjOwv5Fk"
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? videoSources.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === videoSources.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="videos-container">
      <h1 className="videos-title">Processing at Yaqin</h1>
      <div className="videos-grid">
        {/* Column 1: Two YouTube videos */}
        <div className="video-column">
          <iframe
            className="video"
            src="https://www.youtube.com/embed/MDWE0la8jAE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            className="video"
            src="https://www.youtube.com/embed/4r7_eqjZdFw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Column 2: Image */}
        <div className="image-column">
          <img
            src="../src/assets/processing.jpeg"
            alt="Processing Image"
            className="processing-image"
          />
        </div>

        {/* Column 3: Two YouTube videos */}
        <div className="video-column">
          <iframe
            className="video"
            src="https://www.youtube.com/embed/YFKuaTuCJcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            className="video"
            src="https://www.youtube.com/embed/TVPTjOwv5Fk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Video Carousel for Mobile */}
      <div className="video-carousel">
        <button className="carousel-button prev" onClick={handlePrev}>&#10094;</button>
        <iframe
          className="video"
          src={videoSources[currentIndex]}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <button className="carousel-button next" onClick={handleNext}>&#10095;</button>
      </div>
    </div>
  );
};

export default Videos; 