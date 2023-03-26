var container = document.getElementById("root");
// var titulo = document.createElement("h1");
// titulo.innerHTML = "Titulo inserido pelo JS!";
// container.appendChild(titulo);

// function Titulo(props) {
//   return (
//     <React.Fragment>
//       <h1>{props.texto}</h1>
//     </React.Fragment>
//   );
// }

// function Titulos() {
//     return (
//       <>
//         <Titulo texto="Minha primeira props"/>
//         <Titulo texto="Minha segunda props"/>
//         <Titulo texto="Minha terceira props"/>
//       </>
//     );
//   }

function Participantes(props){
    const [num, setNumero] = React.useState(0);
    function votar(){
        setNumero(num + 1);
    }
    return (
        <>
        <h1>{props.nome}</h1>
        <h2>{num}</h2>
        <button onClick={votar}>Votar</button>
        </>
    )
}

function Votacao(){
    return (
        <>
        <Participantes nome="Mequi" />
        <Participantes nome="BK" />
        <Participantes nome="Ragazzo" />
        </>
    )

}

ReactDOM.createRoot(container).render(<Votacao />);