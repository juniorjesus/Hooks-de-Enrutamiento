import React, {useState} from 'react';
import {url as junior} from '../helpers/url';

export const AgregarTarea = () => {


    const [agregar, setAgregar] = useState({
        url: '',
        nombre: '',
        descripcion: ''
    });

    const {url,nombre,descripcion} = agregar;

    const handleChanged = ({target}) => {
         setAgregar({
             ...agregar,
             [target.name]: target.value
         })

         console.log(agregar)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

     const agregarDatos = async  () => {//para agregar los datos en json server!
         await fetch (junior,{
             method: 'POST',
             body: JSON.stringify(agregar),
             headers: {
                'Content-Type': 'application/json; charset=utf-8'//especificacion al header
             }
         })
     }

    return (
        <div>
            <h3 className="text-center"> Agregar Tareas </h3>

            <form className="form-group" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control "
                    placeholder="Url"
                    name="url"
                    value={url}
                    onChange={handleChanged}
                />

                <input
                    type="text"
                    className="form-control mt-2"
                    name="nombre"
                    autoComplete="off"
                    placeholder="Nombre Tarea"
                    value={nombre}
                    onChange={handleChanged}
                />

                <textarea
                    className="form-control mt-2"
                    autoComplete="off"
                    name="descripcion"
                    value={descripcion}
                    onChange={handleChanged}
                >
                </textarea>

                <div className="d-grid gap-2 mx-auto mt-2">
                    <button
                        type="submit"
                        className="btn btn-dark"
                        onClick={() => agregarDatos()}
                        >
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    )
}
