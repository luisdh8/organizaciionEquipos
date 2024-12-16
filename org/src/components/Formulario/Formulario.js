import { useState } from "react";

import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = (props) => {

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const {registrarColaborador} = props;

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

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto 
                titulo = "Nombre" 
                placeholder = "Ingresar nombre" 
                required 
                valor = {nombre} 
                actualizarValor = {setNombre}
            />
            <CampoTexto 
                titulo = "Puesto" 
                placeholder = "Ingresar puesto" 
                required
                valor = {puesto} 
                actualizarValor = {setPuesto}
            />
            <CampoTexto 
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
    </section>
};

export default Formulario;