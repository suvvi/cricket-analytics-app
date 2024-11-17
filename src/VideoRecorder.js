// VideoRecorder.js
import React, { useState, useEffect } from'react';
import { MediaRecorder } from'react-media-recorder';

const VideoRecorder = () => {
  const [recording, setRecording] = useState(false);
  const [videoBlob, setVideoBlob] = useState(null);

  useEffect(() => {
    if (recording) {
      // Start recording the video
      MediaRecorder.start();
    } else {
      // Stop recording the video
      MediaRecorder.stop();
    }
  }, [recording]);

  const handleStartRecording = () => {
    setRecording(true);
  };

  const handleStopRecording = () => {
    setRecording(false);
    // Get the recorded video blob
    MediaRecorder.getBlob().then(blob => {
      setVideoBlob(blob);
    });
  };

  return (
    <div>
      <button onClick={handleStartRecording}>Start Recording</button>
      <button onClick={handleStopRecording}>Stop Recording</button>
    </div>
  );
};

export default VideoRecorder;
