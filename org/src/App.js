import { useState } from 'react';

import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {

  const [mostrarFormulario, setMostrarFormulario] = useState(true);
  const [colaboradores, setColaboradores] = useState([{
    equipo: "Front End",
    foto: "https://github.com/luisdh8.png",
    nombre: "Luis Diaz",
    puesto: "Front End Developer & Student"
  }]); // Array vacío

  // Ternario --> condicion ? seMuestra : noSeMuestra
  // Cortocircuito --> condicion && seMuestra

  const cambiarMostrarFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  }

  // Registrar colaborador

  const registrarColaborador = (colaborador) => {
      console.log("Colaborador registrado", colaborador);
      // Spread operator = copiar el array y agregar un nuevo elemento
      setColaboradores([...colaboradores, colaborador]);
  };

  const equipos = [
    {
      titulo: "Programación",
      colorSecundario: "#57C278",
      colorPrimario: "#D9F7E9"
    },
    {
      titulo: "Front End",
      colorSecundario: "#82CFFA",
      colorPrimario: "#E8F8FF"
    },
    {
      titulo: "Data Science",
      colorSecundario: "#A6D157",
      colorPrimario: "#F0F8E2"
    },
    {
      titulo: "Devops",
      colorSecundario: "#E06B69",
      colorPrimario: "#FDE7E8"
    },
    {
      titulo: "UX y Diseño",
      colorSecundario: "#DB6EBF",
      colorPrimario: "#FAE9F5"
    },
    {
      titulo: "Móvil",
      colorSecundario: "#FFBA05",
      colorPrimario: "#FFF5D9"
    },
    {
      titulo: "Innovación y Gestión",
      colorSecundario: "#FF8A29",
      colorPrimario: "#FFEEDF"
    }
  ];

  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {
        mostrarFormulario && <Formulario 
          equipos={equipos.map(equipo => equipo.titulo)}
          registrarColaborador = {registrarColaborador} 
        />
      }
      <MiOrg cambiarMostrarFormulario = {cambiarMostrarFormulario}/>
      {
        equipos.map((equipo) => {
          return <Equipo 
          datos = {equipo} 
          key = {equipo.titulo}
          colaboradores = {colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          />
        })
      }

      <Footer />
    </div>
  );
}

export default App;
