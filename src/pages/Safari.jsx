import React, { useEffect, useRef, useState } from 'react';
import '../safari.css';
import * as tf from '@tensorflow/tfjs';
import * as cocoSsd from '@tensorflow-models/coco-ssd';

const videos = [
  { id: 1, url: '/videos/CAM 1.mp4' },
  { id: 2, url: '/videos/CAM 2.mp4' },
  { id: 3, url: '/videos/CAM 3.mp4' },
  { id: 4, url: '/videos/CAM 4.mp4' },
];

function Safari() {
  const videoRef = useRef(null);
  const liveViewRef = useRef(null);
  const [model, setModel] = useState(null);
  const [webcamEnabled, setWebcamEnabled] = useState(false);

  useEffect(() => {
    async function loadModel() {
      const loadedModel = await cocoSsd.load();
      setModel(loadedModel);
    }
    loadModel();
  }, []);

  useEffect(() => {
    if (tf.version) {
      console.log('Loaded TensorFlow.js - version: ' + tf.version.tfjs);
    }
  }, []);

  function getUserMediaSupported() {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  }

  async function enableCam() {
    if (!model) return;

    setWebcamEnabled(true);

    const constraints = { video: true };

    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.addEventListener('loadeddata', predictWebcam);
      }
    } catch (error) {
      console.error('Error accessing the webcam:', error);
    }
  }

  const children = useRef([]);

  function predictWebcam() {
    if (!model || !videoRef.current || !liveViewRef.current) return;

    model.detect(videoRef.current).then((predictions) => {
      // Remove previous predictions
      children.current.forEach((child) => {
        liveViewRef.current.removeChild(child);
      });
      children.current = [];

      // Draw new predictions
      predictions.forEach((prediction) => {
        if (prediction.score > 0.66) {
          const p = document.createElement('p');
          p.innerText = `${prediction.class} - ${Math.round(prediction.score * 100)}% sure`;
          p.style = `margin-left: 0px; margin-top: 0px; top: 0; left: 0;`;

          const highlighter = document.createElement('div');
          highlighter.setAttribute('class', 'highlighter');
          highlighter.style = `left: 0px; top: 0px; width: ${prediction.bbox[2]}px; height: ${prediction.bbox[3]}px;`;

          liveViewRef.current.appendChild(highlighter);
          liveViewRef.current.appendChild(p);
          children.current.push(highlighter, p);
        }
      });

      requestAnimationFrame(predictWebcam);
    });
  }

  return (
    <div className="background-safari">
      <div className="video-row">
        {videos.map((video) => (
          <div key={video.id} className="video-container">
            <video muted loop autoPlay playsInline className="custom-video">
              <source src={video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
      <section id="demos" className={model ? '' : 'invisible'}>
        <p>Hold some objects up close to your webcam to get a real-time classification! When ready click "enable webcam" below and accept access to the webcam when the browser asks (check the top left of your window)</p>
        <div id="liveView" className="camView" ref={liveViewRef}>
          {!webcamEnabled && (
            <button className="btn" onClick={enableCam} disabled={!getUserMediaSupported()}>
              Enable Webcam
            </button>
          )}
          <video
            ref={videoRef}
            id="webcam"
            autoPlay
            muted
            // width={160}
            // height={90}
          ></video>
        </div>
      </section>
    </div>
  );
}

export default Safari;