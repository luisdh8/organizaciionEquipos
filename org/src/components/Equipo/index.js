import "./Equipo.css";
import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
    // Destructuración
    const {titulo, colorPrimario, colorSecundario, id} = props.datos;
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props;

    const estiloTitulo = {
        borderColor: colorSecundario
    }

    const estiloBackground = {
        backgroundColor: hexToRgba(colorSecundario, 0.6)
    }

    return <>
        { 
            colaboradores.length > 0 &&
            <section className="equipo" style={estiloBackground}>
                <input 
                    type="color"
                    className="input-color"
                    value={colorSecundario}
                    onChange = {(evento) => {
                        actualizarColor(evento.target.value, id);
                    }}
                />
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) => <Colaborador 
                            datos = {colaborador}
                            key = {index}
                            colorPrimario = {colorSecundario}
                            eliminarColaborador = {eliminarColaborador}
                            like = {like}
                        />)
                    }
                </div>
            </section>
        }
    </>
};

export default Equipo;