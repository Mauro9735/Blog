import React, { useRef } from "react";
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
                    <textarea className="form-control" name="" id="" placeholder="Escribí acá lo que tengás para decir"></textarea>
                </div>
                <button onClick={log} type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    )
}

export default CreateArticle;