import React from 'react';
import styled from 'styled-components'

import Filtro from './Components/Filtro';
import Home from './Components/Home';
import Carrinho from './Components/Carrinho';


const Container = styled.div`
  margin: 1vh 1vw ;
  display: flex;
  justify-content:space-between;
`

const Button = styled.button`
  position: fixed;
  bottom: 0 ;
  right: 0;
  margin: 2vh 2vw;
  border-radius: 50%;
  padding: 0 1vw;
  outline: 0;
`

class EcommerceContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      estadoDoCarrinho: false,
      filtroMinimo: '',
      filtroMaximo: '',
      filtroNome: '',
      carrinho: []
    }
  }

  apareceDesapareceCarrinho = () => {
    const novoEstadoCarrinho = this.state.estadoDoCarrinho
    this.setState({
      estadoDoCarrinho: !novoEstadoCarrinho
    })
  }

  atualizaFiltro = (tipoFiltro, valorFiltro) => {
    if (tipoFiltro === 'valorMin') {
      this.setState({
        filtroMinimo: valorFiltro
      })
    }
    if (tipoFiltro === 'valorMax') {
      this.setState({
        filtroMaximo: valorFiltro
      })
    }
    if (tipoFiltro === 'busca') {
      this.setState({
        filtroNome: valorFiltro
      })
    }
  }

  atualizaCarrinho = (novoProduto) => {
    // console.log(novoProduto)

    // checar se o produto está no carrinho... findIndex
      /// se não tá no carrinho


    // adicionar novo produto ao array carrinho - copia, adiciona e setState
    const copiaCarrinho = [...this.state.carrinho, novoProduto]
    

    this.setState({carrinho: copiaCarrinho})
    // console.log(copiaCarrinho)
  }

  render() {

    return (
      <Container>
        <Filtro aoMudarFiltro={this.atualizaFiltro} />

        <Home
          filtroMinimo={this.state.filtroMinimo}
          filtroMaximo={this.state.filtroMaximo}
          filtroNome={this.state.filtroNome}
          aoClicarAdiciona={this.atualizaCarrinho}
        />

        {this.state.estadoDoCarrinho && <Carrinho itensCarrinho={this.state.carrinho} />}

        <Button onClick={this.apareceDesapareceCarrinho}>
          <h1 className="material-icons">shopping_cart</h1>
        </Button>

      </Container>
    );
  }
}

export default EcommerceContainer;
