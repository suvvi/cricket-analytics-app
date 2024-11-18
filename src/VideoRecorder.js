import { useReactMediaRecorder } from "react-media-recorder";
import { useState, useEffect } from "react";

const VideoRecorder = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl, previewStream } =
    useReactMediaRecorder({ video: true });

  const [metadata, setMetadata] = useState({
    runsScored: "",
    wicketStatus: "",
    shotType: "",
    otherData: "",
    videoUrl: "",
  });

  const [videoBlob, setVideoBlob] = useState(null);

  const handleInputChange = (event) => {
    setMetadata((prevMetadata) => ({
     ...prevMetadata,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSave = () => {
    if (videoBlob) {
      const videoUrl = URL.createObjectURL(videoBlob);
      const videoA = document.createElement("a");
      videoA.href = videoUrl;
      videoA.download = "video.webm";
      videoA.click();
  
      const newMetadata = {
       ...metadata,
        videoUrl: videoUrl,
      };
  
      const metadataBlob = new Blob([JSON.stringify(newMetadata)], { type: "application/json" });
      const metadataUrl = URL.createObjectURL(metadataBlob);
      const metadataA = document.createElement("a");
      metadataA.href = metadataUrl;
      metadataA.download = "metadata.json";
      metadataA.click();
  
      // Reset form and video recorder
      setMetadata({
        runsScored: "",
        wicketStatus: "",
        shotType: "",
        otherData: "",
        videoUrl: "",
      });
      //startRecording();
    }
  };
  

  useEffect(() => {
    if (mediaBlobUrl) {
      fetch(mediaBlobUrl)
       .then((response) => response.blob())
       .then((blob) => setVideoBlob(blob));
    }
  }, [mediaBlobUrl]);

  return (
    <div>
      <p>{status}</p>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
      <button onClick={handleSave}>Save</button>
      <video src={mediaBlobUrl} controls autoPlay loop />
      <form>
        <label>
          Runs Scored:
          <input type="number" name="runsScored" value={metadata.runsScored} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Wicket Status:
          <input type="text" name="wicketStatus" value={metadata.wicketStatus} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Shot Type:
          <input type="text" name="shotType" value={metadata.shotType} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Other Data:
          <input type="text" name="otherData" value={metadata.otherData} onChange={handleInputChange} />
        </label>
      </form>
    </div>
  );
};


export default VideoRecorder;