import React from 'react'
import styled from 'styled-components'

const HomeContainer = styled.div`
    background-color: grey;
    width: 60vw;
    
`
const DivSuperior = styled.div`
    display:flex;
    justify-content: space-between;
`
const GridDeProdutos = styled.div`
    /* display: grid;
    grid-template-columns: 1fr, 1fr, 1fr, 1fr;
    grid-template-rows: 1fr, 1fr, 1fr, 1fr; */
    display:flex;
    flex-wrap:wrap;
    justify-content: center;

`
const ImagemProduto = styled.img`
    width: 100%;
    height: 100px;
`
const BotaoAdicionarCarrinho = styled.button`
    background-color: black;
    color: white;
    bottom: 0;
    min-height: 60px;

`
const Produto = styled.div`
    margin: 1vh 1vw;
    padding: 1vh 1vw;
    border: 1px orange dotted;
    width: 10vw;
    height: 30vh;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    
`



const listaDeProdutos = [{
    id: Date.now(),
    name: "Cama do Astronauta",
    value: 500.0,
    imageUrl: "https://user-images.githubusercontent.com/56808066/74940111-bfd58a80-53cf-11ea-94ab-976a8b1e19b0.jpg",
},
{
    id: Date.now(),
    name: "Lego Miniaturas",
    value: 150.49,
    imageUrl: "https://user-images.githubusercontent.com/56808066/74940763-af71df80-53d0-11ea-95a3-ba3d163af6d8.jpg",
},
{
    id: Date.now(),
    name: "Nave inflável",
    value: 299.99,
    imageUrl: "https://user-images.githubusercontent.com/56808066/74940768-b0a30c80-53d0-11ea-9ad7-78d106ee2448.jpg",
},
{
    id: Date.now(),
    name: "Cabana espacial",
    value: 280.0,
    imageUrl: "https://user-images.githubusercontent.com/56808066/74940769-b13ba300-53d0-11ea-9bea-e1df5fb6b9ee.jpg",
},
{
    id: Date.now(),
    name: "Foguete lego",
    value: 120.25,
    imageUrl: "https://user-images.githubusercontent.com/56808066/74940770-b13ba300-53d0-11ea-9189-3356d4756ca5.jpg",
},
{
    id: Date.now(),
    name: "Lego City",
    value: 499.99,
    imageUrl: "https://user-images.githubusercontent.com/56808066/74940772-b26cd000-53d0-11ea-80ef-3bbcbfdcef93.png",
},
{
    id: Date.now(),
    name: "Foguete Espacial",
    value: 179.0,
    imageUrl: "https://user-images.githubusercontent.com/56808066/74940783-b7318400-53d0-11ea-8cd3-2918f64b05d3.png",
},
{
    id: Date.now(),
    name: "Miniaturas StarWars",
    value: 999.99,
    imageUrl: "https://user-images.githubusercontent.com/56808066/74940788-b993de00-53d0-11ea-8cc6-757b8d95b716.png",
},
]


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ordem: true,
        }
    }


    render() {
        return (

            <HomeContainer>
                <DivSuperior>
                    <p>Quantidade de produtos: {listaDeProdutos.length}</p>
                    <select>
                        <option>Preço Crescente</option>
                        <option>Preço Decrescente</option>
                    </select>
                </DivSuperior>
                <GridDeProdutos>
                    {listaDeProdutos.map((cadaProduto) => {
                        return (
                            <Produto>
                                <ImagemProduto src={cadaProduto.imageUrl} />
                                <div>
                                    <p>{cadaProduto.name}</p>
                                    <p>R${parseFloat(cadaProduto.value).toFixed(2)}</p>
                                </div>
                                <BotaoAdicionarCarrinho>
                                    Adicionar ao Carrinho
                                </BotaoAdicionarCarrinho>
                            </Produto>
                        )
                    })}
                </GridDeProdutos>

            </HomeContainer>

        );
    }
}



export default Home;

