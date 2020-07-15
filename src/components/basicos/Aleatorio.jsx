import React from 'react'

export default props => {


    const { min, max } = props;
    const aleatorio = parseInt(Math.random() * (max - min)) + min;
    const aleatorio2 = parseInt(Math.random() * (max - min)) + min;
    return (

        < div >
            <h2>Valor Aleatório</h2>
            <p><strong>Valor Min: </strong>{min}</p>
            <p><strong>Valor Max: </strong>{max}</p>
            <p><strong>Valor Escolhido: </strong>{aleatorio}</p>
            <p><strong>Valor Escolhido: </strong>{aleatorio2}</p>

        </div >
    );
}