import {useRef} from 'react';
import {Editor} from '@tinymce/tinymce-react';
import './App.css';

export default function App() {
    const editorRef = useRef(null);
    // const log = () => {
    //     if (editorRef.current) {
    //         console.log(editorRef.current.getContent());
    //     }
    // };

    return (
        <>
            <div id={"NotesBox"}>
                <Editor
                    tinymceScriptSrc='/tinymce/tinymce.min.js'
                    licenseKey='GPL'
                    onInit={(_evt, editor) => editorRef.current = editor}
                    initialValue='<p>Notes go to here... </p>'
                    init={{
                        height: "500px",
                        width:"700px",
                        selector: 'div.tinymce',
                        plugins: [ 'quickbars' ],
                        toolbar: false,
                        menubar: false,
                        inline: true,
                        border: "solid 1px"
                    }}
                />
            </div>

        </>
    );
}