import React, { useState, useEffect } from 'react';
import MemeEditor from './MemeEditor';
import './App.css';

function App() {
  const [memes, setMemes] = useState([]);
  const [selectedMeme, setSelectedMeme] = useState(null);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((response) => response.json())
      .then((data) => setMemes(data.data.memes));
  }, []);

  return (
    <div>
      <h1>Meme Generator</h1>
      {selectedMeme ? (
        <MemeEditor meme={selectedMeme} onClose={() => setSelectedMeme(null)} />
      ) : (
        <div className="meme-grid">
          {memes.map((meme) => (
            <div key={meme.id} className="meme-card">
              <img src={meme.url} alt={meme.name} className="meme-image" />
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
