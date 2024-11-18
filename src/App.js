// App.js
import VideoFeed from './VideoFeed';
import VideoRecorder from './VideoRecorder';
import BallDataForm from './BallDataForm';
import SaveButton from './SaveButton';
import UploadButton from './UploadButton';
import React, { useState } from'react';

const App = () => {
  const [videoBlob, setVideoBlob] = useState(null);
  const [metadata, setMetadata] = useState({});

  return (
    <div>
      <VideoRecorder/> 
      {/* onRecordingStop={(blob) => setVideoBlob(blob)} />
      <BallDataForm onSubmit={(metadata) => setMetadata(metadata)} />
      <SaveButton videoBlob={videoBlob} metadata={metadata} />
      <UploadButton /> */}
    </div>
  );
};

export default App;