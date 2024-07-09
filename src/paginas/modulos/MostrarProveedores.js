import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContentHeader from '../../Componentes/ContentHeader';
import Navbar from '../../Componentes/Navbar';
import SidebarContainer from '../../Componentes/SidebarContainer';
import Footer from '../../Componentes/Footer';
import APIInvoke from '../../configuracion/APIInvoke';
import swal from 'sweetalert';


const MostrarProveedores = () => {

    const [proveedores, setProveedores] = useState([]);

    const getProveedores = async () => {
        const response = await APIInvoke.invokeGET('/api/proveedores');
        setProveedores(response);

    };

    useEffect(() => {
        getProveedores();
    }, []);

    const eliminarProveedor = async (e, idProveedor) => {
        e.preventDefault();
        const response = await APIInvoke.invokeDELETE(`/api/proveedores/${idProveedor}`);

        if (response.msg === 'El proveedor ha sido eliminado') {
            const msg = 'El proveedor ha sido eliminado correctamente';
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
            getProveedores();
        } else {
            const msg = 'No fue posible eliminar el proveedor';
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
        }
    };


    return (

        <div className="wrapper">
            <Navbar />
            <SidebarContainer />
            <div className="content-wrapper">
                <ContentHeader titulo={'Dashboard'} breadCrumb1={'Inicio'} breadCrumb2={'Dashboard'} ruta1={'/home'} />
                <section className="content">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">
                                <Link to={'/proveedores/agregar'} className="btn btn-block btn-primary btn-sm">Crear Proveedor</Link>
                            </h3>
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
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th style={{ width: '25%' }}>Empresa</th>
                                        <th style={{ width: '15%' }}>Nit</th>
                                        <th style={{ width: '10%' }}>Contacto</th>
                                        <th style={{ width: '15%' }}>Correo</th>
                                        <th style={{ width: '25%' }}>Direccion Facturacion</th>
                                        <th style={{ width: '10%' }}>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {proveedores.map((proveedor, index) => (
                                        <tr key={index}>
                                            <td>{proveedor.nombreEmpresa}</td>
                                            <td>{proveedor.nit}</td>
                                            <td>{proveedor.numeroContacto}</td>
                                            <td>{proveedor.correo}</td>
                                            <td>{proveedor.direccionFactura}</td>
                                            <td>
                                                <Link to={`/proveedores/editar/${proveedor._id}`} className="btn btn-primary mt-2 mb-2"><i className="fa-solid fa-pen-to-square" /></Link>
                                                <button onClick={(e) => eliminarProveedor(e, proveedor._id)} className="btn btn-danger ml-1"><i className="fa-solid fa-trash" /></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div>

    )
}

export default MostrarProveedores