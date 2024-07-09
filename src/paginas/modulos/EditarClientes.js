import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ContentHeader from '../../Componentes/ContentHeader';
import Navbar from '../../Componentes/Navbar';
import SidebarContainer from '../../Componentes/SidebarContainer';
import Footer from '../../Componentes/Footer';
import APIInvoke from '../../configuracion/APIInvoke';


const EditarClientes = () => {

    const navigate = useNavigate();

    //se definen los estados
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [cedula, setCedula] = useState('');
    const [correo, setCorreo] = useState('');
    const [numeroContacto, setNumeroContaco] = useState('');
    const [nit, setNit] = useState('');
    const [direccion, setDireccion] = useState('');
    const { id } = useParams();

    //funcion modificar clientes
    const modificarClientes = async (e) => {
        e.preventDefault();
        await APIInvoke.invokePUT(`api/clientes/${id}`, {
            nombres: nombres,
            apellidos: apellidos,
            cedula: cedula,
            correo: correo,
            numeroContacto: numeroContacto,
            nit: nit,
            direccion: direccion
        });
        navigate('/clientes');
    };

    useEffect(() => {
        getClientes();
        // eslint-disable-next-line
    }, []);

    const getClientes = async () => {
        const response = await APIInvoke.invokePUT(`api/clientes/${id}`);
        setNombres(response.nombres);
        setApellidos(response.apellidos);
        setCedula(response.cedula);
        setCorreo(response.correo);
        setNumeroContaco(response.numeroContacto);
        setNit(response.nit);
        setDireccion(response.direccion);
    }


    return (

        <div className="wrapper">
            <Navbar />
            <SidebarContainer />
            <div className="content-wrapper">
                <ContentHeader titulo={'Dashboard'} breadCrumb1={'Inicio'} breadCrumb2={'Dashboard'} ruta1={'/home'} />
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
                            <form onSubmit={modificarClientes} style={{ width: '40%', margin: 'auto' }}>

                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="nombres">Nombres</label>
                                        <div className="d-flex">
                                            <input type="text" className="form-control" placeholder="Nombres..." id="nombres" name="nombres" value={nombres} onChange={(e) => setNombres(e.target.value)} required />
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
                                            <input type="text" className="form-control" placeholder="Apellidos..." id="apellidos" name="apellidos" value={apellidos} onChange={(e) => setApellidos(e.target.value)} required />
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
                                            <input type="number" className="form-control" placeholder="Documento..." id="cedula" name="cedula" value={cedula} onChange={(e) => setCedula(e.target.value)} required />
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
                                            <input type="email" className="form-control" placeholder="Correo..." id="correo" name="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
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
                                            <input type="number" className="form-control" placeholder="Numero de Contacto..." id="numeroContacto" name="numeroContacto" value={numeroContacto} onChange={(e) => setNumeroContaco(e.target.value)} required />
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
                                            <input type="number" className="form-control" placeholder="Nit..." id="nit" name="nit" value={nit} onChange={(e) => setNit(e.target.value)} required />
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
                                            <input type="text" className="form-control" placeholder="Direccion..." id="direccion" name="direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)} required />
                                            <div className="input-group-append ml-1">
                                                <div className="input-group-text">
                                                    <span className="fas fa-home" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-footer">
                                    <button type="submit" className="btn btn-block btn-primary">Editar Cliente</button>
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

export default EditarClientes