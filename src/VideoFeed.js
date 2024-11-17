import React, { useState, useEffect } from'react';

const VideoFeed = () => {
  const [videoStream, setVideoStream] = useState(null);

  useEffect(() => {
    // Get the video stream from the HDMI port
    navigator.mediaDevices.getUserMedia({ video: true })
     .then(stream => {
        setVideoStream(stream);
      })
     .catch(error => {
        console.error('Error getting video stream:', error);
      });
  }, []);

  return (
    <div>
      <video width="640" height="480" srcObject={videoStream} />
    </div>
  );
};

export default VideoFeed;