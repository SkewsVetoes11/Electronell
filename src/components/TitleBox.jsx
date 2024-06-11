import {useRef} from 'react';
import {Editor} from '@tinymce/tinymce-react';
// import '../App.css';

export default function TitleBox({type}) {
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };
    let placeHolder = "<p>Summary here...<p>"
    if(type.toString() === "Title")
    {
        let date = new Date().toLocaleDateString();
        placeHolder = `<h2>${date}</h2>`
    }

    return (
        <>
            <div id={type.toString()}>
                <Editor
                    tinymceScriptSrc='/tinymce/tinymce.min.js'
                    licenseKey='GPL'
                    onInit={(_evt, editor) => editorRef.current = editor}
                    // initialValue='<p>This is the initial content of the editor.</p>'
                    initialValue={placeHolder}
                    init={{
                        height: "500px",
                        width:"700px",
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