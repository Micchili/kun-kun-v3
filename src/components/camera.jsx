import React from 'react';

import Webcam from "react-webcam";

class Camera extends React.Component {
    setRef = webcam => {
       this.webcam = webcam;
    };

    capture = () => {
        const imageSrc = this.webcam.getScreenshot();
        var img = new Image();
        img.src = imageSrc;

        var canvas = document.getElementById("canvassample");
        var canvasdraw = canvas.getContext("2d");
        img.onload = function(){
          canvasdraw.drawImage(img,0,0,1280,720);
        }
        //alert(imageSrc);
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
            height={720}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={1280}
            videoConstraints={videoConstraints}
        /><br />
        <button onClick={this.capture}>base64を表示する</button>
        </div>
    );
    }
}


  export default Camera;
