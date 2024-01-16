import React, { useRef } from "react";
import { Editor } from '@tinymce/tinymce-react';
import articleData from "../Api/article.json";
import "../Assets/Styles/create-edit.css"

function EditArticle(){

    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
        console.log(editorRef.current.getContent());
        }
    };

    let article = articleData[0];

    return(
        <div className="box">
            <h1>Editar artículo</h1>
            <form action="">
                <div className="col-lg-6">
                    <label>Título</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="articleName" value={article.title} placeholder="Título" />
                </div>
                <div className="col-lg-6">
                    <label className="form-label">Subtítulo:</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="articleName" placeholder="Subtítulo" />
                </div>
                <div className="col-lg-6">
                    <label className="form-label">Contenido:</label>
                    <Editor
                        apiKey='ieejuk2iyvzx7mgfsf23bbpwvkcb0m34fd6n7qnk43k665yf'
                        onInit={(evt, editor) => editorRef.current = editor}
                        initialValue={article.content}
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

export default EditArticle;