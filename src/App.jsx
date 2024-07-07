import NotesBox from "./components/NotesBox.jsx";
import CueBox from "./components/CueBox.jsx";
import TitleBox from "./components/TitleBox.jsx";
import downloadjs from "downloadjs";
import html2canvas from "html2canvas";
import {useRef} from "react";
import {useReactToPrint} from 'react-to-print'
export default function App() {
  const handleCaptureClick = async () => {
    const canvas = await html2canvas(document.querySelector(".captureArea"));
    const dataURL = canvas.toDataURL("image/png");
    var titleString =
      document.querySelector("#Title").firstChild.firstChild.textContent;
    downloadjs(dataURL, titleString, "image/png");
  };

  const handleHideHints = () => {
    document.querySelector("#hints").style.visibility = "hidden";
  };

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    });
  // ...

  return (
    <>
      <div ref={componentRef} className={"captureArea"}>
        <TitleBox type={"Title"} />
        <div className="main-area">
          <CueBox />

          <NotesBox />
        </div>
        <TitleBox type={"Summary"} />
      </div>
      <button className={"button-1"} onClick={handleCaptureClick}>
        Export as image
      </button>
      <button className="button-2" onClick={handlePrint}>
        Export as PDF
        </button>

      <br></br>
      <br></br>

      <div id="hints">
        <button className="button-1" onClick={handleHideHints}>
          Hide Hints
        </button>
        <p>
          Export as image might not function properly when WebGL is disabled in
          your Brower! Check if export works properly before entering your
          notes.
        </p>
        <p>
          As of now, you could save your progress by using browser extension
          like{" "}
          <a href="https://chromewebstore.google.com/detail/singlefile/mpiodijhokgodhhofbcjdecpffjipkle">
            SingleFile
          </a>
          .
        </p>
      </div>
    </>
  );
}
