import React, {useContext} from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CueBox from "./CueBox.jsx";
import TitleBox from "./TitleBox.jsx"
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <TitleBox type={"Title"}/>
        <div className="main-area">

            <CueBox/>

            <App/>
        </div>
        <TitleBox type={"Summary"}/>

    </React.StrictMode>,
)
