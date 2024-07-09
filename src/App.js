import './App.css';
import Home from './Home';
import Registro from './paginas/auth/Registro';
import Login from './paginas/auth/Login';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Fragment } from 'react';
import MostrarClientes from './paginas/modulos/MostrarClientes';
import AgregarClientes from './paginas/modulos/AgregarClientes';
import EditarClientes from './paginas/modulos/EditarClientes';
import RutasProtegidas from './paginas/auth/RutasProtegidas';
import MostrarProveedores from './paginas/modulos/MostrarProveedores';
import AgregarProveedores from './paginas/modulos/AgregarProveedores';
import EditarProveedores from './paginas/modulos/EditarProveedores';


function App() {

  return (
    <div className="App">
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Navigate to="/login" />}></Route>
            <Route path="/login" exact element={<Login />}></Route>
            <Route path="/registro" exact element={<Registro />}></Route>
            <Route path="/home" exact element={<RutasProtegidas element={<Home />} />}></Route>
            <Route path="/clientes" exact element={<RutasProtegidas element={<MostrarClientes />} />}></Route>
            <Route path="/clientes/agregar" exact element={<RutasProtegidas element={<AgregarClientes />} />}></Route>
            <Route path="/clientes/editar/:id" exact element={<RutasProtegidas element={<EditarClientes />} />}></Route>
            <Route path="/proveedores" exact element={<RutasProtegidas element={<MostrarProveedores />} />}></Route>
            <Route path="/proveedores/agregar" exact element={<RutasProtegidas element={<AgregarProveedores />} />}></Route>
            <Route path="/proveedores/editar/:id" exact element={<RutasProtegidas element={<EditarProveedores />} />}></Route>
          </Routes>
        </BrowserRouter>
      </Fragment>
    </div>
  );
}

export default App;
