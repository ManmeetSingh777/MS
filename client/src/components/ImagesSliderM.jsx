import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ImagesSliderM.css'; // Create a separate CSS file for custom styles

export const ImagesSlider = ({ images, overlay = true, direction = 'up' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const loadImages = () => {
      const loadPromises = images.map((image) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = image;
          img.onload = () => resolve(image);
          img.onerror = reject;
        });
      });

      Promise.all(loadPromises)
        .then((loaded) => setLoadedImages(loaded))
        .catch((error) => console.error('Failed to load images', error));
    };

    loadImages();

    const interval = setInterval(handleNext, 5000);

    return () => clearInterval(interval);
  }, [images]);

  const slideVariants = {
    initial: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
    exit: {
      opacity: 0,
      y: direction === 'up' ? '-100%' : '100%',
      transition: { duration: 1 },
    },
  };

  return (
    <div className="images-slider-container">
      {loadedImages.length > 0 && (
        <>
          {overlay && <div className="images-slider-overlay" />}
          <AnimatePresence exitBeforeEnter>
            <motion.img
              key={currentIndex}
              src={loadedImages[currentIndex]}
              initial="initial"
              animate="visible"
              exit="exit"
              variants={slideVariants}
              className="images-slider-image"
            />
          </AnimatePresence>
        </>
      )}
      <button className="images-slider-prev" onClick={handlePrevious}>
        &lt;
      </button>
      <button className="images-slider-next" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default ImagesSlider;
