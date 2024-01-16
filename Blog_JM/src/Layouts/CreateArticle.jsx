import React, { useRef } from "react";
import { Editor } from '@tinymce/tinymce-react';
import "../Assets/Styles/create-edit.css"

function CreateArticle(){

    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
        console.log(editorRef.current.getContent());
        }
    };


    return(
        <div className="box">
            <h1>Crear artículo</h1>
            <form action="">
                <div className="col-lg-6">
                    <label>Título</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="articleName" placeholder="Título" />
                </div>
                <div className="col-lg-6">
                    <label className="form-label">Subtítulo:</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="articleName" placeholder="Subtítulo" />
                </div>
                <div className="col-lg-6">
                    <label className="form-label">Contenido:</label>
                    <Editor
                        apiKey='your-api-key'
                        onInit={(evt, editor) => editorRef.current = editor}
                        initialValue="<p>Escribí aquí lo que querás contar.</p>"
                        init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                        ],
                        toolbar: 'undo redo | blocks | ' +
                            'bold italic forecolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                    />
                </div>
                <button onClick={log} type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    )
}

export default CreateArticle;