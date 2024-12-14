import "./CampoTexto.css";

const CampoTexto = (props) => {  
    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value);
    }

    const placeholderModificado = `${props.placeholder}...`;
    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModificado} 
            required = {props.required} 
            value = {props.valor}
            onChange = {manejarCambio}
        />
    </div>
}; 

export default CampoTexto;