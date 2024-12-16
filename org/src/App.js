import { useState } from 'react';

import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {

  const [mostrarFormulario, setMostrarFormulario] = useState(true);
  const [colaboradores, setColaboradores] = useState([
    {
      equipo: "Front End",
      foto: "https://github.com/luisdh8.png",
      nombre: "Luis Diaz",
      puesto: "Front End Developer & Student"
    },
    {
      equipo: "Programación",
      foto: "https://github.com/genesysR-dev.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora"
    },
    {
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam"
    },
    {
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor"
    },
    {
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack"
    }
]); // Array de colaboradores

  const [equipos, setEquipos] = useState([
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
  ]);

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

  // Eliminar colaborador
  const eliminarColaborador = () => {
    console.log("Colaborador eliminado");
  };

  // Actualizar color de equipo
  const actualizarColor = (color, titulo) => {
    console.log("Color actualizado", color, titulo);
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.titulo === titulo) {
        equipo.colorSecundario = color;
      }
      return equipo;
    });
    setEquipos(equiposActualizados);
  };

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
            eliminarColaborador = {eliminarColaborador}
            actualizarColor = {actualizarColor}
          />
        })
      }

      <Footer />
    </div>
  );
}

export default App;
