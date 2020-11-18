import React from 'react';
import Webcam from "react-webcam";
import axios from 'axios';
import {Button} from './Button'

class Camera extends React.Component {
    constructor() {
        super();
        this.state = { emotionData: null };
        this.localPostman = this.localPostman.bind(this);
    }

    setRef = webcam => {
        this.webcam = webcam;
    };

    capture = () => {
        const imageSrc = this.webcam.getScreenshot();
        var img = new Image();
        img.src = imageSrc;

        var canvas = document.getElementById("canvassample");
        var canvasdraw = canvas.getContext("2d");
        img.onload = function () {
            canvasdraw.drawImage(img, 0, 0, 1280, 720);
        }
    };

    servePostman = () => {
        const url = "https://localhost:4000";
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

        axios({
            method: 'post',
            url: url,
            data: blob,
            headers: {
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


    localPostman = () => {
        const kaito = this;
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
                console.log('Emotion: ' + resData)
            });
        }).catch(function (error) {
            console.log(error)
        });
    };

    // componentDidMount = () => {
    //     this.intervalId = setInterval(()=>{
    //         var flag = true;
    //         while (flag) {
    //             this.capture();
    //             this.localPostman();
    //             if (this.state.resData != null) {
    //                 flag = false;
    //                 break;
    //             }
    //         }
    //     }, 30000);
    // }

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
                <Button onClick={this.capture}>キャンバスに表示する</Button>
                <Button onClick={this.localPostman}>ローカルで送信</Button>
                <Button onClick={this.servePostman}>サーバーに送信</Button>

                <canvas id="canvassample" height="720" width="1280"></canvas>
            </div>
        );
    }
}


export default Camera;
