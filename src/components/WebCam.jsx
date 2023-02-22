import "../styling/react-webcam.css";
import React, { useCallback, useRef } from "react";
import Webcam from "react-webcam";
import * as Icon from "react-bootstrap-icons";

const WebCam = ({ hide }) => {
  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log("I am the img", imageSrc);
    hide();
  }, [webcamRef]);
  const handleFullScreen = useCallback(() => {
    const video = webcamRef.current.video;
    if (video) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    }
  }, [webcamRef]);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  return (
    <div className="webcam-container">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        className="webcam-video"
      />
      <div className="webcam-controls">
        <button className="webcam-button" onClick={capture}>
          <Icon.Camera size={40} />
        </button>
        <button className="webcam-button-fullscreen" onClick={handleFullScreen}>
          <Icon.Fullscreen size={40} />
        </button>
      </div>
    </div>
  );
};

export default WebCam;
