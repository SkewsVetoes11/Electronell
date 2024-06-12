import React from 'react'
import ReactDOM from 'react-dom/client'
//@ts-ignore
import App from './App.jsx'
//@ts-ignore

import CueBox from './components/CueBox.jsx'
//@ts-ignore

import TitleBox from './components/TitleBox.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <TitleBox type={"Title"}/>
        <div className="main-area">

            <CueBox/>

            <App/>
        </div>
        <TitleBox type={"Summary"}/>

    </React.StrictMode>,
)

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})
