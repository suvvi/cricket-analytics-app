import { useReactMediaRecorder } from "react-media-recorder";
import { useState } from "react";

const VideoRecorder = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: true });

  const [metadata, setMetadata] = useState({
    runsScored: "",
    wicketStatus: "",
    shotType: "",
    otherData: "",
  });

  const handleInputChange = (event) => {
    setMetadata((prevMetadata) => ({
     ...prevMetadata,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSave = () => {
    if (mediaBlobUrl) {
      const blob = new Blob([JSON.stringify(metadata)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "metadata.json";
      a.click();

      const videoBlob = new Blob([mediaBlobUrl], { type: "video/webm" });
      const videoUrl = URL.createObjectURL(videoBlob);
      const videoA = document.createElement("a");
      videoA.href = videoUrl;
      videoA.download = "video.webm";
      videoA.click();

      // Reset form and video recorder
      setMetadata({
        runsScored: "",
        wicketStatus: "",
        shotType: "",
        otherData: "",
      });
      startRecording();
    }
  };

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