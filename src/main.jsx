import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CueBox from './components/CueBox.jsx'
import TitleBox from './components/TitleBox.jsx'
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';

import './index.css'
const handleCaptureClick = async () => {
    const canvas = await html2canvas(document.querySelector('.captureArea'));
    const dataURL = canvas.toDataURL('image/png');
    downloadjs(dataURL, 'download.png', 'image/png');
};

// ...


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
        <button onClick={handleCaptureClick}>Export as image</button>
    </React.StrictMode>
)
