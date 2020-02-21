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

  componentDidMount() {
    const inputArmazenandosString = localStorage.getItem("valoresNoEstado");
    const novoEstado = JSON.parse(inputArmazenandosString);
    if (this.state.carrinho === []) {
      this.setState({ carrinho: novoEstado });
    }
  }

  componentDidUpdate() {
    const estadoComoString = JSON.stringify(this.state.carrinho);
    localStorage.setItem("valoresNoEstado", estadoComoString);
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

    const copiaCarrinho = [...this.state.carrinho]

    // checar se o produto está no carrinho... findIndex... retorna -1 pra false
    const produtosNoCarrinho = this.state.carrinho.findIndex((cadaProduto) => cadaProduto.novoProduto.id === novoProduto.id)

    /// se já tá no carrinho
    if (produtosNoCarrinho > -1) {
      /// adiciono 1 na quantidade (um novo parâmetro)
      copiaCarrinho[produtosNoCarrinho].quantidade += 1
    } else {
      copiaCarrinho.push({
        novoProduto: novoProduto,
        quantidade: 1
      })
    }
    // console.log(copiaCarrinho)

    this.setState({ carrinho: copiaCarrinho })

  }

  removeProdutoDoCarrinho = (novoProduto) => {

    // igual a adicionar
    const copiaCarrinho = [...this.state.carrinho]
    const produtoPraRemoverNoCarrinho = this.state.carrinho.findIndex((cadaProduto) => cadaProduto.novoProduto.id === novoProduto.id)

    // só muda aqui, quando retira
    copiaCarrinho.splice(produtoPraRemoverNoCarrinho, 1)

    this.setState({ carrinho: copiaCarrinho })

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

        {this.state.estadoDoCarrinho && <Carrinho
          itensCarrinho={this.state.carrinho}
          removeProdutoDoCarrinho={this.removeProdutoDoCarrinho}
        />}

        <Button onClick={this.apareceDesapareceCarrinho}>
          <h1 className="material-icons">shopping_cart</h1>
        </Button>

      </Container>
    );
  }
}

export default EcommerceContainer;
