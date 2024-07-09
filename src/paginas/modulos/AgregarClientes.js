import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ContentHeader from '../../Componentes/ContentHeader';
import Navbar from '../../Componentes/Navbar';
import SidebarContainer from '../../Componentes/SidebarContainer';
import Footer from '../../Componentes/Footer';
import APIInvoke from '../../configuracion/APIInvoke';
import swal from 'sweetalert';


const AgregarClientes = () => {

    const navigate = useNavigate();

    const [clientes, setClientes] = useState({
        nombres: '',
        apellidos: '',
        cedula: '',
        correo: '',
        numeroContacto: '',
        nit: '',
        direccion: ''
    });

    const { nombres, apellidos, cedula, correo, numeroContacto, nit, direccion } = clientes;

    const Onchange = (e) => {
        setClientes({ ...clientes, [e.target.name]: e.target.value })
    };

    useEffect(() => {
        document.getElementById('nombres').focus();
    }, []);

    const crearClientes = async () => {
        const data = {
            nombres: clientes.nombres,
            apellidos: clientes.apellidos,
            cedula: clientes.cedula,
            correo: clientes.correo,
            numeroContacto: clientes.numeroContacto,
            nit: clientes.nit,
            direccion: clientes.direccion
        };
        const response = await APIInvoke.invokePOST('/api/clientes', data);
        const idClientes = response._id;

        if (idClientes === '') {
            const msg = 'Error al agregar el cliente';
            swal({
                title: 'Error',
                text: msg,
                icon: 'error',
                confirm: {
                    text: 'ok',
                    value: true,
                    visible: true,
                    className: "btn btn-danger",
                    closeModal: true
                }
            });
        } else {
            navigate('/clientes');

            const msg = 'El cliente fue creado con exito';
            swal({
                title: 'Info',
                text: msg,
                icon: 'success',
                confirm: {
                    text: 'ok',
                    value: true,
                    visible: true,
                    className: "btn btn-primary",
                    closeModal: true
                }
            });
            setClientes({
                nombres: '',
                apellidos: '',
                cedula: '',
                correo: '',
                numeroContacto: '',
                nit: '',
                direccion: ''
            });
        };
    };

    const Onsubmit = (e) => {
        e.preventDefault();
        crearClientes();
    }


    return (

        <div className="wrapper">
            <Navbar />
            <SidebarContainer />
            <div className="content-wrapper">
                <ContentHeader titulo={'Nuevo Cliente'} breadCrumb1={'Inicio'} breadCrumb2={'Nuevo Cliente'} ruta1={'/home'} />
                <section className="content">
                    <div className="card">
                        <div className="card-header">
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="collapse">
                                    <i className="fas fa-minus" />
                                </button>
                                <button type="button" className="btn btn-tool" data-card-widget="remove" title="remove">
                                    <i className="fas fa-times" />
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <form onSubmit={Onsubmit} style={{ width: '40%', margin: 'auto' }}>

                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="nombres">Nombres</label>
                                        <div className="d-flex">
                                            <input type="text" className="form-control" placeholder="Nombres..." id="nombres" name="nombres" value={nombres} onChange={Onchange} required />
                                            <div className="input-group-append ml-1">
                                                <div className="input-group-text">
                                                    <span className="fas fa-user" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="apellidos">Apellidos</label>
                                        <div className="d-flex">
                                            <input type="text" className="form-control" placeholder="Apellidos..." id="apellidos" name="apellidos" value={apellidos} onChange={Onchange} required />
                                            <div className="input-group-append ml-1">
                                                <div className="input-group-text">
                                                    <span className="fas fa-user" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="cedula">Documento</label>
                                        <div className="d-flex">
                                            <input type="number" className="form-control" placeholder="Documento..." id="cedula" name="cedula" value={cedula} onChange={Onchange} required />
                                            <div className="input-group-append ml-1">
                                                <div className="input-group-text">
                                                    <span className="fas fa-id-card" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="correo">Correo</label>
                                        <div className="d-flex">
                                            <input type="email" className="form-control" placeholder="Correo..." id="correo" name="correo" value={correo} onChange={Onchange} required />
                                            <div className="input-group-append ml-1">
                                                <div className="input-group-text">
                                                    <span className="fas fa-envelope" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="numeroContacto">Contacto</label>
                                        <div className="d-flex">
                                            <input type="number" className="form-control" placeholder="Numero de Contacto..." id="numeroContacto" name="numeroContacto" value={numeroContacto} onChange={Onchange} required />
                                            <div className="input-group-append ml-1">
                                                <div className="input-group-text">
                                                    <span className="fas fa-mobile-alt" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="nit">Nit</label>
                                        <div className="d-flex">
                                            <input type="number" className="form-control" placeholder="Nit..." id="nit" name="nit" value={nit} onChange={Onchange} required />
                                            <div className="input-group-append ml-1">
                                                <div className="input-group-text">
                                                    <span className="fas fa-hashtag" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="direccion">Direccion</label>
                                        <div className="d-flex">
                                            <input type="text" className="form-control" placeholder="Direccion..." id="direccion" name="direccion" value={direccion} onChange={Onchange} required />
                                            <div className="input-group-append ml-1">
                                                <div className="input-group-text">
                                                    <span className="fas fa-home" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-footer">
                                    <button type="submit" className="btn btn-block btn-primary">Agregar Cliente</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default AgregarClientes