import {useRef} from 'react';
import {Editor} from '@tinymce/tinymce-react';
import '../App.css';

export default function CueBox() {
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };
    return (
        <>
            <div id={"CueBox"}>
                <Editor
                    tinymceScriptSrc='/tinymce/tinymce.min.js'
                    licenseKey='GPL'
                    onInit={(_evt, editor) => editorRef.current = editor}
                    initialValue='<p>Cues go to here..</p>'
                    init={{
                        height: "500px",
                        width:"100px",
                        selector: 'div.tinymce',
                        plugins: [ 'quickbars' ],
                        toolbar: false,
                        menubar: false,
                        inline: true,
                    }}
                />
            </div>

        </>
    );
}