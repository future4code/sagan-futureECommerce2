import React from 'react';
import Filtro from './Components/Filtro';
import Home from './Components/Home';
import Carrinho from './Components/Carrinho';
import styled from 'styled-components'


const Container = styled.div`
  margin: 1vh 1vw ;
  display: flex;
  justify-content:space-between;
  /* display: grid;
  grid-template-rows: 100px;
  grid-template-columns: 1fr 4fr; */
`

const Button = styled.button`
  position: fixed;
  bottom: 0 ;
  right: 0;
  margin: 2vh 2vw;
  border-radius: 50%;
  padding: 0 1vw;

`

class EcommerceContainer extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      estadoDoCarrinho: false
    }
  }
  
  apareceDesapareceCarrinho = () => {
    const novoEstadoCarrinho = this.state.estadoDoCarrinho
    this.setState({ 
      estadoDoCarrinho: !novoEstadoCarrinho
    })
  }

  render() {


    return (
      <Container>
        <Filtro />
        <Home />

        {this.state.estadoDoCarrinho && <Carrinho />}
  
        <Button onClick={this.apareceDesapareceCarrinho}>
          <h1 class="material-icons">shopping_cart</h1> 
        </Button>
  
      </Container>
    );
  }
}

export default EcommerceContainer;
