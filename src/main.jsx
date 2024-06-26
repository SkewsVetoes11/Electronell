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
    var titleString = document.querySelector('#Title').firstChild.firstChild.textContent;
    downloadjs(dataURL, titleString, 'image/png');
};

const handleHideHints = () =>
    {
        document.querySelector('#hints').style.visibility='hidden'
    }
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
        <div id="hints"><br></br>
        <button onClick={handleHideHints}>Hide Hints</button>
        <p>Export as image might not function properly when WebGL is disabled in your Brower! Check if export works properly before entering your notes.</p>
        <p>As of now, you could save your progress by using browser extension like <a href='https://chromewebstore.google.com/detail/singlefile/mpiodijhokgodhhofbcjdecpffjipkle'>SingleFile</a>.</p>
</div>
        
    </React.StrictMode>
)
