function DobleNumero () {
    const ejecutarDoble = (numero) => {
        let doble = numero * 2;
        console.log(doble);
    }
    return (<div>
        <h1>
            Métodos doble
        </h1>
        <button onClick={ () => 
            ejecutarDoble(7)}>Doble 7</button>
            <button onClick={ () => 
            ejecutarDoble(77)}>Doble 77</button>
            <button onClick={ () => 
            ejecutarDoble(204)}>Doble 204</button>
    </div>)
}

export default DobleNumero;
