import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CueBox from './components/CueBox.jsx'
import TitleBox from './components/TitleBox.jsx'
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';
import './index.css'
import { save } from '@tauri-apps/api/dialog'
const saveFile = async () =>
    {
        try{
            const savePath = await save();
            if(!savePath){return;}
            const canvas = await html2canvas(document.querySelector('.captureArea'));
            let dataURL = canvas.toDataURL('image/png');
            downloadjs(dataURL, savePath + '.png', 'image/png');

        }catch(err)
        {
             console.log(err);
        }
    }

const handleCaptureClick = async () => {
    const canvas = await html2canvas(document.querySelector('.captureArea'));
    const dataURL = canvas.toDataURL('image/png');
    downloadjs(dataURL, 'download.png', 'image/png');
};



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div className={"captureArea"}>
        <TitleBox type={"Title"}/>
        <div className="main-area">

            <CueBox/>

            <App/>
        </div>
        <TitleBox type={"Summary"}/>
        </div>
        <button onClick={saveFile}>Export as image</button>
    </React.StrictMode>
)