import React from 'react'
import styled from 'styled-components'



const CarrinhoContainer = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    padding: 1vh 1vw;
    width: 20vw;
`

const Titulo = styled.h2`
    margin-top: 0;
`


class Carrinho extends React.Component{ 
    constructor(props){
        super(props)
        this.state = {
            valorTotal: 0,

        }
    } 

    render(){
    return(
        <CarrinhoContainer>
            <Titulo>Carrinho:</Titulo>
            <p>Total: <strong>R$ {this.state.valorTotal.toFixed(2)}</strong></p>
        </CarrinhoContainer>
    )

}

}
export default Carrinho;