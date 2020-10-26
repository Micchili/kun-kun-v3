import React from 'react';

import Webcam from "react-webcam";

class Camera extends React.Component {
    setRef = webcam => {
       this.webcam = webcam;
    };

    capture = () => {
    const imageSrc = this.webcam.getScreenshot({width: 1920, height: 1080});
    alert(imageSrc);
    };

    render() {
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
    };

    return (
        <div>
        <Webcam
            audio={false}
            height={350}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={350}
            videoConstraints={videoConstraints}
        /><br />
        <button onClick={this.capture}>base64を表示する</button>
        </div>
    );
    }
}


  export default Camera;