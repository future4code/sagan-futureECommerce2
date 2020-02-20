import React from 'react'
import styled from 'styled-components'



const FiltroContainer = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    padding: 1vh 1vw;
    width: 20vw;
`

const TituloFiltro = styled.h2`
    margin-top: 0;
`
const InputFiltro = styled.input`
    margin-bottom: 1vh;
`
class Filtro extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            valorMinimo: '',
            valorMaximo: Infinity,
            buscaProduto: '',
        }
    }


    render(){

      return(
        <FiltroContainer>

            <TituloFiltro>Filtros:</TituloFiltro>
            <label>Valor Mínimo</label>
            <InputFiltro type="number" value={this.state.valorMinimo}/>
            <label>Valor Máximo</label>
            <InputFiltro type="number" value={this.state.valorMaximo}/>
            <label>Buscar Produto</label>
            <InputFiltro type="text" value={this.state.buscaProduto}/>

        </FiltroContainer>
    )

}

}
export default Filtro;
