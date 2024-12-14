import { useState } from 'react';

import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';

function App() {

  const [mostrarFormulario, setMostrarFormulario] = useState(true);

  // Ternario --> condicion ? seMuestra : noSeMuestra
  // Cortocircuito --> condicion && seMuestra

  const cambiarMostrarFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  }

  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {mostrarFormulario && <Formulario />}
      <MiOrg cambiarMostrarFormulario = {cambiarMostrarFormulario}/>
    </div>
  );
}

export default App;
