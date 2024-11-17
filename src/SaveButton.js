// SaveButton.js
import React from'react';
import { saveAs } from 'file-saver';

const SaveButton = ({ videoBlob, metadata }) => {
  const handleSave = () => {
    // Save the video and metadata locally
    const videoFile = new File([videoBlob], 'video.webm', { type: 'video/webm' });
    saveAs(videoFile, 'video.webm');
    console.log('Metadata saved:', metadata);
  };

  return (
    <button onClick={handleSave}>Save</button>
  );
};

export default SaveButton;
