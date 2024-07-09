import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ContentHeader from '../../Componentes/ContentHeader';
import Navbar from '../../Componentes/Navbar';
import SidebarContainer from '../../Componentes/SidebarContainer';
import Footer from '../../Componentes/Footer';
import APIInvoke from '../../configuracion/APIInvoke';
import swal from 'sweetalert';


const AgregarProveedores = () => {

    const navigate = useNavigate();

    const [proveedores, setProveedores] = useState({
        nombreEmpresa: '',
        nit: '',
        numeroContacto: '',
        correo: '',
        direccionFactura: ''
    });

    const { nombreEmpresa, nit, numeroContacto, correo, direccionFactura } = proveedores;

    const Onchange = (e) => {
        setProveedores({ ...proveedores, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        document.getElementById('nombreEmpresa').focus()
    }, []);

    const crearProveedores = async () => {
        const data = {
            nombreEmpresa: proveedores.nombreEmpresa,
            nit: proveedores.nit,
            numeroContacto: proveedores.numeroContacto,
            correo: proveedores.correo,
            direccionFactura: proveedores.direccionFactura
        };

        const response = APIInvoke.invokePOST('/api/proveedores', data);
        const idProveedores = response._id;

        if (idProveedores === '') {
            const msg = 'Error al agregar el proveedor';
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
            navigate('/proveedores');

            const msg = 'El proveedor fue creado con exito';
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
            setProveedores({
                nombreEmpresa: '',
                nit: '',
                numeroContacto: '',
                correo: '',
                direccionFactura: ''
            });
        };
    };

    const Onsubmit = (e) => {
        e.preventDefault();
        crearProveedores();
    }



    return (

        <div className="wrapper">
            <Navbar />
            <SidebarContainer />
            <div className="content-wrapper">
                <ContentHeader titulo={'Nuevo Proveedor'} breadCrumb1={'Inicio'} breadCrumb2={'Nuevo Proveedor'} ruta1={'/home'} />
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
                                        <label htmlFor="nombreEmpresa">Empresa</label>
                                        <div className="d-flex">
                                            <input type="text" className="form-control" placeholder="Empresa..." id="nombreEmpresa" name="nombreEmpresa" value={nombreEmpresa} onChange={Onchange} required />
                                            <div className="input-group-append ml-1">
                                                <div className="input-group-text">
                                                    <span className="fas fa-building" />
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
                                        <label htmlFor="numeroContacto">Numero de Contacto</label>
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
                                        <label htmlFor="direccionFacturacion">Direccion de Facturacion</label>
                                        <div className="d-flex">
                                            <input type="text" className="form-control" placeholder="Direccion de Facturacion..." id="direccionFactura" name="direccionFactura" value={direccionFactura} onChange={Onchange} required />
                                            <div className="input-group-append ml-1">
                                                <div className="input-group-text">
                                                    <span className="fas fa-building" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-footer">
                                    <button type="submit" className="btn btn-block btn-primary">Agregar Proveedor</button>
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

export default AgregarProveedores