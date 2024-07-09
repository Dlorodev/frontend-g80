import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import APIInvoke from '../../configuracion/APIInvoke';

const Login = () => {

    const navigate = useNavigate();

    //se define el estado del componente
    const [usuario, setUsuario] = useState({
        email: '',
        password: ''
    });

    const { email, password } = usuario;

    const Onchange = (e) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value })
    };

    useEffect(() => {
        document.getElementById('email').focus();
    }, []);

    const iniciarSecion = async () => {
        if (password.length < 10) {
            const msg = 'La contraseña debe tener minimo 10 caracteres';
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
            const data = {
                email: usuario.email,
                password: usuario.password
            };
            const response = await APIInvoke.invokePOST('/api/auth', data);
            const mensaje = response.msg;

            if (mensaje === 'El usuario no existe!' || mensaje === 'Contrasenia incorrecta!') {
                const msg = 'No es posible iniciar sesion, valide sus datos';
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
                //se obtiene el token de acceso
                const jwt = response.token;
                //se guarda el token en el localstorage
                localStorage.setItem('token', jwt);

                //luego de hacer login, se redirije a la pagina home
                navigate('/home');
            }

        }
    }

    const Onsubmit = (e) => {
        e.preventDefault();
        iniciarSecion();
    }


    return (

        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="login-logo">
                    <Link to={"#"}><b>Iniciar Sesion</b></Link>
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Ingresa los datos de usuario</p>
                        <form onSubmit={Onsubmit}>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="e-mail..." id="email" name="email" value={email} onChange={Onchange} required />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Password..." id="password" name="password" value={password} onChange={Onchange} required />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            <div className="social-auth-links text-center mb-3">
                                <button type="submit" className="btn btn-block btn-primary">Ingresar</button>
                                <Link to={"/registro"} className="btn btn-block btn-danger">Registrarse</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Login