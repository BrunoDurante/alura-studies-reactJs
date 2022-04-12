import React from 'react';

class Botao extends React.Component{
    render() {
        const backgroundColor = 'green';
        const isAtivo = true;
        const styles={
            backgroundColor: isAtivo ? 'green' : 'red'
        }

        return (
            <button style={styles}>
                Botão
            </button>
        )
    }
}

export default Botao;