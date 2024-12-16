import "./Equipo.css";
import Colaborador from "../Colaborador";

const Equipo = (props) => {
    // Destructuración
    const {titulo, colorPrimario, colorSecundario} = props.datos;
    const {colaboradores} = props;

    const estiloTitulo = {
        borderColor: colorSecundario
    }

    const estiloBackground = {
        backgroundColor: colorPrimario
    }

    console.log(colaboradores.length >0 ? "Hay colaboradores" : "No hay colaboradores");

    return <>
        { 
            colaboradores.length > 0 &&
            <section className="equipo" style={estiloBackground}>
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) => <Colaborador 
                            datos = {colaborador}
                            key = {index}
                            colorPrimario = {colorSecundario}
                        />)
                    }
                </div>
            </section>
        }
    </>
};

export default Equipo;