import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [colaboradores, setColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/luisdh8.png",
      nombre: "Luis Diaz",
      puesto: "Front End Developer & Student",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/genesysR-dev.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      fav: false
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: false
    }
]); // Array de colaboradores

  const [equipos, setEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorSecundario: "#57C278",
      colorPrimario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorSecundario: "#82CFFA",
      colorPrimario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorSecundario: "#A6D157",
      colorPrimario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorSecundario: "#E06B69",
      colorPrimario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorSecundario: "#DB6EBF",
      colorPrimario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorSecundario: "#FFBA05",
      colorPrimario: "#FFF5D9"
    },
    {
      id: uuid(),
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
  const eliminarColaborador = (id) => {
    console.log("Colaborador eliminado", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    setColaboradores(nuevosColaboradores);
  };

  // Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Color actualizado", color, id);
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorSecundario = color;
      }
      return equipo;
    });
    setEquipos(equiposActualizados);
  };

  // Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    setEquipos([...equipos, {...nuevoEquipo, id: uuid()}]);
  };

  const like = (id) => {
    const colaboradorFavorito = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    });
    setColaboradores(colaboradorFavorito);
  };

  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {
        mostrarFormulario && <Formulario 
          equipos={equipos.map(equipo => equipo.titulo)}
          registrarColaborador = {registrarColaborador} 
          crearEquipo = {crearEquipo}
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
            like = {like}
          />
        })
      }

      <Footer />
    </div>
  );
}

export default App;
