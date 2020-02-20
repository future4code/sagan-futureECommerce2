import React from 'react';
import Filtro from './Components/Filtro';
import Home from './Components/Home';
import Carrinho from './Components/Carrinho';
import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  justify-content:space-between;
  margin: 1vh 1vw ;
`

const Button = styled.button`
  position: fixed;
  bottom: 0 ;
  right: 0;
  margin: 2vh 2vw;
  border-radius: 50%;
  padding: 0 1vw;

`

function EcommerceContainer() {
  return (
    <Container>
      <Filtro />
      <Home />
      <Carrinho />

      <Button>
        <h1 class="material-icons">shopping_cart</h1> 
      </Button>

    </Container>
  );
}

export default EcommerceContainer;
