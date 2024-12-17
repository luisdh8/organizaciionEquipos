import { useState } from "react";

import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = (props) => {

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const [titulo, setTitulo] = useState("");
    const [color, setColor] = useState("");

    const {registrarColaborador, crearEquipo} = props;

    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log("Formulario enviado");
        let datosEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }
        registrarColaborador(datosEnviar);
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        crearEquipo({titulo, colorSecundario: color});
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                titulo = "Nombre" 
                placeholder = "Ingresar nombre" 
                required 
                valor = {nombre} 
                actualizarValor = {setNombre}
            />
            <Campo 
                titulo = "Puesto" 
                placeholder = "Ingresar puesto" 
                required
                valor = {puesto} 
                actualizarValor = {setPuesto}
            />
            <Campo 
                titulo = "Foto" 
                placeholder = "Ingresar enlace de foto" 
                required
                valor = {foto} 
                actualizarValor = {setFoto}
            />
            <ListaOpciones
                valor = {equipo}
                actualizarEquipo = {setEquipo}
                equipos = {props.equipos}
            />
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo 
                titulo = "Titulo" 
                placeholder = "Ingresar titulo" 
                required 
                valor = {titulo} 
                actualizarValor = {setTitulo}
            />
            <Campo 
                titulo = "Color" 
                placeholder = "Ingresar color Hex" 
                required
                valor = {color} 
                actualizarValor = {setColor}
                type = "color"
            />
            <Boton>Registrar Equipo</Boton>
        </form>
    </section>
};

export default Formulario;