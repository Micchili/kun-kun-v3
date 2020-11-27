import React from 'react';
import Webcam from "react-webcam";
import axios from 'axios';
import {Button} from '../components/Button'



class Test extends React.Component {
    constructor() {
        super();
        this.state = { emotionData: null };
    }

    setRef = webcam => {
        this.webcam = webcam;
    };

    testsend = () => {
        const imageSrc = this.webcam.getScreenshot();
        var img = new Image();
        img.src = imageSrc;

        var canvas = document.getElementById("canvassample");
        var canvasdraw = canvas.getContext("2d");
        img.onload = function () {
            canvasdraw.drawImage(img, 0, 0, 1280, 720);
        }

        const kaito = this;

        const base64 = canvas.toDataURL('image/jpeg', 1.0)
        // Base64からバイナリへ変換
        var bin = atob(base64.replace(/^.*,/, ''));
        var buffer = new Uint8Array(bin.length);
        for (var i = 0; i < bin.length; i++) {
            buffer[i] = bin.charCodeAt(i);
        }
        // Blobを作成
        var blob = new Blob([buffer.buffer]);

        const testtest = (blob) => {
            const subscriptionKey = process.env.REACT_APP_FACE_KEY;
            const endpoint = process.env.REACT_APP_FACE_URL;
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
                console.log(res)
                res.data.forEach((face) => {
                    const resData = JSON.stringify(face.faceAttributes.emotion)
                    kaito.setState({
                        emotionData: resData,
                    });
                    console.log(kaito.state.emotionData)
                });
            }).catch(function (error) {
                console.log(error)
            });
        }
        testtest(blob);
    };
    
    testbtn = () => {
        const kaito = this;

        setTimeout(function run() {
            if(kaito.state.emotionData == null) {
                kaito.testsend();
                setTimeout(run, 3000);
            } else {
                alert("正常に動作しました");
                window.location.href = "/camera";
            }
        }, 3000);
    }

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

                <Button onClick={this.testbtn}>testing</Button>

                <canvas id="canvassample" height="720" width="1280" hidden></canvas>
            </div>
        );
    }
}


export default Test;
