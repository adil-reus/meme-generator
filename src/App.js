import React, { useState, useEffect } from 'react';
import MemeEditor from './MemeEditor';
import './App.css';

function App() {
  const [memes, setMemes] = useState([]);
  const [selectedMeme, setSelectedMeme] = useState(null);
  const [loadingImages, setLoadingImages] = useState({}); // Track loading status for each image

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((response) => response.json())
      .then((data) => setMemes(data.data.memes));
  }, []);

  const handleImageLoad = (id) => {
    setLoadingImages((prev) => ({ ...prev, [id]: false }));
  };

  const handleImageError = (id) => {
    setLoadingImages((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <div>
      <h1>Meme Generator</h1>
      {selectedMeme ? (
        <MemeEditor meme={selectedMeme} onClose={() => setSelectedMeme(null)} />
      ) : (
        <div className="meme-grid">
          {memes.map((meme) => (
            <div key={meme.id} className="meme-card">
              {loadingImages[meme.id] !== false && (
                <div className="loading-spinner"> 
                  {/* SVG spinner */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    width="50"
                    height="50"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="blue"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray="200"
                      strokeDashoffset="0"
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 50 50"
                        to="360 50 50"
                        dur="1s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </svg>
                </div>
              )}
              <img
                src={meme.url}
                alt={meme.name}
                className="meme-image"
                style={{ display: loadingImages[meme.id] === false ? 'block' : 'none' }}
                onLoad={() => handleImageLoad(meme.id)}
                onError={() => handleImageError(meme.id)}
              />
              <button className="edit-button" onClick={() => setSelectedMeme(meme)}>
                Edit
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
