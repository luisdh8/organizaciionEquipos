import "./MiOrg.css";

const MiOrg = (props) => {
    // const [nombreVariable, setNombreVariable] = useState("Valor inicial");
    // const [mostrar, setMostrar] = useState(true);

    // const manejarClick = () => {
    //     setMostrar(!mostrar);
    // }

    return <section className="orgSection">
        <h3 className="titulo">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrarFormulario}/>
    </section>
};

export default MiOrg;