import React, { useState, useRef } from 'react';
import Draggable from 'react-draggable';
import html2canvas from 'html2canvas';

function MemeEditor({ meme, onClose }) {
  const [texts, setTexts] = useState([{ id: Date.now(), value: '', nodeRef: React.createRef() }]);
  const memeContainerRef = useRef(null);

  const addText = () => {
    setTexts([...texts, { id: Date.now(), value: '', nodeRef: React.createRef() }]);
  };

  const updateTextValue = (id, value) => {
    setTexts((prevTexts) =>
      prevTexts.map((text) => (text.id === id ? { ...text, value } : text))
    );
  };

  const downloadMeme = () => {
    html2canvas(memeContainerRef.current, { useCORS: true }).then((canvas) => {
      const link = document.createElement('a');
      link.download = 'meme.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div className="meme-editor">
      <h2>Edit Meme</h2>
      <div className="meme-container" ref={memeContainerRef}>
        <img
          src={meme.url}
          alt={meme.name}
          className="meme-image"
          crossOrigin="anonymous" // Allow cross-origin image loading
        />
        {texts.map((text) => (
          <Draggable key={text.id} bounds="parent" nodeRef={text.nodeRef}>
            <div ref={text.nodeRef} className="draggable-text">
              {text.value}
            </div>
          </Draggable>
        ))}
      </div>
      {texts.map((text) => (
        <input
          key={text.id}
          type="text"
          placeholder="Enter text"
          value={text.value}
          onChange={(e) => updateTextValue(text.id, e.target.value)}
        />
      ))}
      <button onClick={addText}>Add Text</button>
      <button onClick={downloadMeme}>Download Meme</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default MemeEditor;
