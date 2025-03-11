import { useState } from "react";
import "./ImageGallery.css";

const images = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/8.jpg",
  "/images/9.jpg",
  "/images/10.jpg",
  "/images/11.jpg",
  "/images/12.jpg",
  "/images/13.jpg",
  "/images/14.jpg",
  "/images/15.jpg",
];

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [rotation, setRotation] = useState(0);

  const rotateImage = () => {
    setRotation(rotation + 90);  
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">📸 Image Gallery</h1>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery Image ${index + 1}`}
            className="gallery-image"
            onClick={() => {
              setSelectedImage(src);
              setRotation(0); // Reset rotation when opening a new image
            }}
          />
        ))}
      </div>

      {/* Full-Screen Image Modal */}
      {selectedImage && (
        <div className="fullscreen-overlay" onClick={() => setSelectedImage(null)}>
          <div className="button-container">
            <button className="rotate-button" onClick={(e) => { e.stopPropagation(); rotateImage(); }}>
              ⟳ Rotate
            </button>
            <button className="close-button" onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}>
              ✖
            </button>
          </div>
          <img 
            src={selectedImage} 
            alt="Full Screen" 
            className="fullscreen-image" 
            style={{ transform: `rotate(${rotation}deg)` }} 
          />
        </div>
      )}
    </div>
  );
}
