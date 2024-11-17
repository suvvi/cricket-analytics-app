// UploadButton.js
import React from'react';

const UploadButton = () => {
  const handleUpload = () => {
    // Prompt the user to upload all recorded videos to Amazon S3
    console.log('Uploading videos to Amazon S3...');
  };

  return (
    <button onClick={handleUpload}>Upload to S3</button>
  );
};

export default UploadButton;
