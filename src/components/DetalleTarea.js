import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';


export const DetalleTarea = ({detalle}) => {

     const navegar = useNavigate();

    const params = useParams();
    const {id} = params;
    console.log(id)

    console.log(detalle)

    const buscado = detalle.find(tarea => tarea.id === Number(id))
    console.log(buscado)

    const {nombre,url,descripcion} = buscado;



    return (
        <div>
            <div className="container row row-cols-1 row-cols-md-5 g-4 py-5 text-center">


                <div className="card text-white bg-dark ms-3 py-3"  >
                    <div className="">
                        <img src={buscado.url} className="img-fluid rounded-start" alt="..." width="200px" />
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card-body">
                                <h5 className="card-title">{buscado.nombre}</h5>
                                <p className="card-title">{buscado.descripcion}</p>

                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col'>
                            <button
                                className="btn btn-warning btm-sm mx-2"
                                onClick={() => navegar('/')}
                            >
                                Atras
                            </button>
                        </div>
                        <div className='col'>
                            <button
                                className="btn btn-warning btm-sm mx-2"  data-bs-toggle="modal" data-bs-target="#exampleModal "
                            >
                                Abrir modal
                            </button>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{color:"black"}}>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{buscado.nombre}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <img src={buscado.url} className='img fluid rounded start' alt ="..." width="200px"/>{buscado.descripcion}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

            </div>
        </div>
    )
}
