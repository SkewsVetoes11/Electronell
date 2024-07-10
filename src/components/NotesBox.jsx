import {useEffect, useRef} from 'react';
import {Editor} from '@tinymce/tinymce-react';
// import './App.css';

export default function NotesBox() {
    const editorRef = useRef(null);

    useEffect(() => {
        window.addEventListener("beforeunload", function (e) {
            var confirmationMessage = 'It looks like you have been editing something. '
                + 'If you leave before saving, your changes will be lost.';

            (e || window.event).returnValue = confirmationMessage; //Gecko + IE
            return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
        });
    }, []);

    return (
        <>
            <div id={"NotesBox"}>
                <Editor
                    tinymceScriptSrc='/tinymce/tinymce.min.js'
                    licenseKey='GPL'
                    onInit={(_evt, editor) => editorRef.current = editor}
                    initialValue='<p>Notes go to here... </p>'
                    init={{

                        selector: 'div.tinymce',
                        plugins: ["quickbars", "link", "image"],
                        quickbars_selection_toolbar: 'styles | underline bold italic | link image',
                        toolbar: false,
                        menubar: false,
                        inline: true,
                    }}
                />
            </div>

        </>
    );
}