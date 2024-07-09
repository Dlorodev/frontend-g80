import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ContentHeader from '../../Componentes/ContentHeader';
import Navbar from '../../Componentes/Navbar';
import SidebarContainer from '../../Componentes/SidebarContainer';
import Footer from '../../Componentes/Footer';
import APIInvoke from '../../configuracion/APIInvoke';


const EditarProveedores = () => {

    const navigate = useNavigate();
    const [nombreEmpresa, setNombreEmpresa] = useState('');
    const [nit, setNit] = useState('');
    const [numeroContacto, setNumeroContacto] = useState('');
    const [correo, setCorreo] = useState('');
    const [direccionFactura, setDireccionFactura] = useState('');
    const { id } = useParams();

    const modificarProveedores = async (e) => {
        e.preventDefault();
        await APIInvoke.invokePUT(`api/proveedores/${id}`, {
            nombreEmpresa: nombreEmpresa,
            nit: nit,
            numeroContacto: numeroContacto,
            correo: correo,
            direccionFactura: direccionFactura
        });
        navigate('/proveedores');
    };

    useEffect(() => {
        getProveedores();
        // eslint-disable-next-line
    }, []);

    const getProveedores = async () => {
        const response = await APIInvoke.invokePUT(`api/proveedores/${id}`);
        setNombreEmpresa(response.nombreEmpresa);
        setNit(response.nit);
        setNumeroContacto(response.numeroContacto);
        setCorreo(response.correo);
        setDireccionFactura(response.direccionFactura)

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
                            <form onSubmit={modificarProveedores} style={{ width: '40%', margin: 'auto' }}>

                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="nombreEmpresa">Empresa</label>
                                        <div className="d-flex">
                                            <input type="text" className="form-control" placeholder="Empresa..." id="nombreEmpresa" name="nombreEmpresa" value={nombreEmpresa} onChange={(e) => setNombreEmpresa(e.target.value)} required />
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
                                        <label htmlFor="numeroContacto">Contacto</label>
                                        <div className="d-flex">
                                            <input type="number" className="form-control" placeholder="Contacto..." id="numeroContacto" name="numeroContacto" value={numeroContacto} onChange={(e) => setNumeroContacto(e.target.value)} required />
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
                                        <label htmlFor="direccionFactura">Direccion de Facturacion</label>
                                        <div className="d-flex">
                                            <input type="text" className="form-control" placeholder="Direccion de Facturacion..." id="direccionFactura" name="direccionFactura" value={direccionFactura} onChange={(e) => setDireccionFactura(e.target.value)} required />
                                            <div className="input-group-append ml-1">
                                                <div className="input-group-text">
                                                    <span className="fas fa-mobile-alt" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button type="submit" className="btn btn-block btn-primary">Editar Proveedor</button>
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

export default EditarProveedores