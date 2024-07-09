import React, { useEffect, useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import swal from 'sweetalert';


const RutasProtegidas = ({ element }) => {

    const [redirec, setRedirect] = useState(false);

    //funcion si el token expiro
    const tokenExpirado = () => {
        const token = localStorage.getItem('token');

        if (!token) {
            //si no hay token, redirecciona a la pagina inicial
            setRedirect(true);
            return;
        }

        //decodificar el token para obtener la fecha de expiracion
        const tokenD = JSON.parse(atob(token.split('.')[1]));
        const timeExp = tokenD.exp * 1000; //convertir a milisegundos

        //obtener hora actual
        const actualTime = Date.now();

        if (actualTime >= timeExp) {
            swal({
                title: 'Sesion expirada',
                text: 'Su sesion ha expirado',
                icon: 'warning',
                confirm: {
                    text: 'ok',
                    value: true,
                    visible: true,
                    className: "btn btn-warning",
                    closeModal: true
                }
            });
            setTimeout(() => {
                localStorage.removeItem('token');
                setRedirect(true)
            }, 1000);

            return;
        }
    };

    //se verifica el tiempo de expiracion cuando se monta el co mponente
    useEffect(() => {
        const timeout = setInterval(tokenExpirado, 100);
        return () => clearInterval(timeout); //se limpia al desmontar el componente
    }, []);

    if (redirec) {
        return <Navigate to="/login" />
    };

    //se renderiza la ruta
    return element;
}

export default RutasProtegidas