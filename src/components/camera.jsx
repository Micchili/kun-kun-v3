import React from 'react';

import Webcam from "react-webcam";

import axios from 'axios';

class Camera extends React.Component {
    constructor() {
        super();
        this.state = { imageVinary: null };
    }

    setRef = webcam => {
        this.webcam = webcam;
    };

    capture = () => {
        const imageSrc = this.webcam.getScreenshot();
        var img = new Image();
        img.src = imageSrc;
        // img.src = this.state.imageSrc;

        var canvas = document.getElementById("canvassample");
        var canvasdraw = canvas.getContext("2d");
        img.onload = function () {
            canvasdraw.drawImage(img, 0, 0, 1280, 720);
        }
        this.canvasBinary(canvas);
        //alert(imageSrc);
    };

    canvasBinary = (canvas) => {
        var base64 = canvas.toDataURL('image/png'),
            bin = atob(base64.replace(/^.*,/, '')),
            buffer = new Uint8Array(bin.length);
        for (var i = 0; i < bin.length; i++) {
            buffer[i] = bin.charCodeAt(i);
        }

        this.setState({
            imageVinary: buffer,
        });
        // return buffer;
    }

    // postman = () => {
    //     const url = "https://localhost:3001";

    //     axios.post(url, this.state.imageVinary)
    //     .then(function(response) {
    //         // 成功時
    //         console.log(response.data);
    //     })
    //     .catch(function(error) {
    //         // エラー時
    //         console.log(error);
    //     });

    //     axios.get(url)
    //     .then(function(response){
    //         console.log(response.data);
    //     })
    //     .catch(function(error){
    //         console.log(error);
    //     })
    // };


    postman = () => {

        const subscriptionKey = process.env.REACT_APP_FACE_KEY;

        const endpoint = process.env.REACT_APP_FACE_URL;

        const canvas = document.getElementById("canvassample");

        const base64 = canvas.toDataURL('image/jpeg', 1.0)
        // Base64からバイナリへ変換
        var bin = atob(base64.replace(/^.*,/, ''));
        var buffer = new Uint8Array(bin.length);
        for (var i = 0; i < bin.length; i++) {
          buffer[i] = bin.charCodeAt(i);
        }
        // Blobを作成
        var blob = new Blob([buffer.buffer]);


        console.log(blob);

        axios({
            method: 'post',
            url: endpoint,

            params: {
                returnFaceAttributes: 'emotion'
            },

            data: blob,
            headers: {
                'Ocp-Apim-Subscription-Key': subscriptionKey ,
                "Content-Type": "application/octet-stream"
            }
        }).then(function (res) {
            console.log('Status text: ' + res.status)
            console.log('Status text: ' + res.statusText)
            res.data.forEach((face) => {
                const resData = JSON.stringify(face.faceAttributes.emotion)
                console.log('Emotion: ' + resData)
            });
        }).catch(function (error) {
            console.log(error)
        });
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
                <button onClick={this.postman}>送信</button>

                <noscript>You need to enable JavaScript to run this app.</noscript>
                <div id="root"></div>
                <canvas id="canvassample" height="720" width="1280"></canvas>
                <button onClick={this.setRef}>カメラをオンにする</button><br />
            </div>
        );
    }
}


export default Camera;
