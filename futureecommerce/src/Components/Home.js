import React from 'react'
import styled from 'styled-components'

const HomeContainer = styled.div`
    min-width: 60vw;
    margin: 0 1vw;
`
const DivSuperior = styled.div`
    display:flex;
    justify-content: space-between;
    margin: 1vh 1vw;
`
const SeletorDePreco = styled.select`
    margin: 2vh 1vw;
`

const DivInferior = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1vh 1vw;
`

const GridDeProdutos = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content: center;
`

const Produto = styled.div`
    margin: 1vh 1vw;
    padding: 1vh 1vw;
    border: 2px orange dotted;
    width: 10vw;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
`

const ImagemProduto = styled.img`
    width: 100%;
`

const DivNomeValor = styled.div`
    padding: 1vh 1vw;
 `

const Paragrafo = styled.p``

const BotaoAdicionarCarrinho = styled.button`
    background-color: black;
    color: white;
    bottom: 0;
    padding: 1vh 1vw;
    outline:0;
`

const ProdutoRenderizado = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px black solid;
  margin: 1vh 1vw;
  padding: 1vh 1vw;
`

const listaDeProdutos = [{
  id: 1,
  name: "Cama do Astronauta",
  value: 500.0,
  imageUrl: "https://user-images.githubusercontent.com/45580434/75055787-68f5b100-54b4-11ea-849f-bcac9d4df84d.jpg",
},
{
  id: 2,
  name: "Lego Miniaturas",
  value: 150.49,
  imageUrl: "https://user-images.githubusercontent.com/45580434/75055804-6e52fb80-54b4-11ea-9bef-5451ec0477d1.png",
},
{
  id: 3,
  name: "Nave inflável",
  value: 299.99,
  imageUrl: "https://user-images.githubusercontent.com/45580434/75055807-6eeb9200-54b4-11ea-8469-5aafdc7ab5ec.jpg",
},
{
  id: 4,
  name: "Cabana espacial",
  value: 280.0,
  imageUrl: "https://user-images.githubusercontent.com/45580434/75055779-67c48400-54b4-11ea-9fc7-eaa86ac1d408.jpg",
},
{
  id: 5,
  name: "Foguete lego",
  value: 120.25,
  imageUrl: "https://user-images.githubusercontent.com/45580434/75055801-6dba6500-54b4-11ea-949d-5994697bca97.jpg",
},
{
  id: 6,
  name: "Lego City",
  value: 499.99,
  imageUrl: "https://user-images.githubusercontent.com/45580434/75055791-698e4780-54b4-11ea-879d-9e2db9ec711d.png",
},
{
  id: 7,
  name: "Foguete Espacial",
  value: 179.0,
  imageUrl: "https://user-images.githubusercontent.com/45580434/75055800-6bf0a180-54b4-11ea-9729-45b133741b27.png",
},
{
  id: 8,
  name: "Miniaturas StarWars",
  value: 999.99,
  imageUrl: "https://user-images.githubusercontent.com/45580434/75055808-6f842880-54b4-11ea-8496-4aebb9df797d.jpg",
},
]


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ordenacao: "crescente",
      listaDeProdutosNoCarrinho: [],
      produtoSelecionado: null
    }
  }

  mudarOrdenacao = (event) => {
    const novaOrdenacao = event.target.value
    this.setState({
      ordenacao: novaOrdenacao
    })
  }

  adicionaProduto = (idProdutoAdicionado) => {
    const novoProduto = listaDeProdutos.find((elemento) => elemento.id === idProdutoAdicionado)
    this.props.aoClicarAdiciona(novoProduto)
  }

  onProdutoSelecionado = (cadaProduto) => {
    this.setState({
      produtoSelecionado: cadaProduto
    })
  }

  renderizaProdutoSelecionado(produtoSelecionado) {
    if (produtoSelecionado != null) {
      return (
        <ProdutoRenderizado>
          <ImagemProduto src={produtoSelecionado.imageUrl} alt={produtoSelecionado.name} />
          <Paragrafo>{produtoSelecionado.name}</Paragrafo>
          <Paragrafo>R${parseFloat(produtoSelecionado.value).toFixed(2)}</Paragrafo>
        </ProdutoRenderizado>
      )
    } else { // retorno uma div vazia e nada será renderizado na tela
      return (
        <div></div>
      )
    }
  }

  render() {

    let listaOrdenada
    if (this.state.ordenacao === 'crescente') {
      listaOrdenada = listaDeProdutos.sort(function (a, b) {
        return a.value < b.value ? -1 : a.value > b.value ? 1 : 0
      })
    } else if (this.state.ordenacao === 'decrescente') {
      listaOrdenada = listaDeProdutos.sort(function (a, b) {
        return a.value < b.value ? 1 : a.value > b.value ? -1 : 0
      })
    }

    const listaFiltrada = listaOrdenada.filter((elemento) => {
      if (this.props.filtroMinimo && this.props.filtroMaximo && this.props.filtroNome) {
        return (elemento.value >= this.props.filtroMinimo
          && elemento.value <= this.props.filtroMaximo
          && elemento.name.toLowerCase().includes((this.props.filtroNome).toLowerCase()))
      }
      else if (this.props.filtroMinimo && this.props.filtroMaximo) {
        return (elemento.value >= this.props.filtroMinimo
          && elemento.value <= this.props.filtroMaximo)
      }
      else if (this.props.filtroMinimo && this.props.filtroNome) {
        return (elemento.value >= this.props.filtroMinimo
          && elemento.name.toLowerCase().includes((this.props.filtroNome).toLowerCase()))
      }
      else if (this.props.filtroMaximo && this.props.filtroNome) {
        return (elemento.value <= this.props.filtroMaximo
          && elemento.name.toLowerCase().includes((this.props.filtroNome).toLowerCase()))
      }
      else if (this.props.filtroMinimo) {
        return elemento.value >= this.props.filtroMinimo
      }
      else if (this.props.filtroMaximo) {
        return elemento.value <= this.props.filtroMaximo
      }
      else if (this.props.filtroNome) {
        return elemento.name.toLowerCase().includes((this.props.filtroNome).toLowerCase())
      }
    }).map((cadaProduto, index) => {
      return (
        <Produto key={index}>
          <ImagemProduto src={cadaProduto.imageUrl} alt={cadaProduto.name} onClick={() => this.onProdutoSelecionado(cadaProduto)} />
          <DivNomeValor>
            <Paragrafo>{cadaProduto.name}</Paragrafo>
            <Paragrafo>R${parseFloat(cadaProduto.value).toFixed(2)}</Paragrafo>
          </DivNomeValor>
          <BotaoAdicionarCarrinho onClick={() => this.adicionaProduto(cadaProduto.id)}>
            Adicionar ao Carrinho
          </BotaoAdicionarCarrinho>
        </Produto>
      )
    })


    const listaNaoFiltrada = listaOrdenada.map((cadaProduto, index) => {
      return (
        <Produto key={index}>
          <ImagemProduto src={cadaProduto.imageUrl} alt={cadaProduto.name} onClick={() => this.onProdutoSelecionado(cadaProduto)} />
          <DivNomeValor>
            <Paragrafo>{cadaProduto.name}</Paragrafo>
            <Paragrafo>R${parseFloat(cadaProduto.value).toFixed(2)}</Paragrafo>
          </DivNomeValor>
          <BotaoAdicionarCarrinho onClick={() => this.adicionaProduto(cadaProduto.id)}>
            Adicionar ao Carrinho
          </BotaoAdicionarCarrinho>
        </Produto>
      )
    })

    let listaDeItens
    if (this.props.filtroMinimo || this.props.filtroMaximo || this.props.filtroNome) {
      listaDeItens = listaFiltrada
    } else {
      listaDeItens = listaNaoFiltrada
    }

    return (

      <HomeContainer>
        <DivSuperior>
          <p>Quantidade de produtos: {listaDeItens.length}</p>
          <SeletorDePreco onChange={this.mudarOrdenacao} value={this.state.ordenacao}>
            <option value="crescente">Preço Crescente</option>
            <option value="decrescente">Preço Decrescente</option>
          </SeletorDePreco>
        </DivSuperior>
        <DivInferior>
          <GridDeProdutos>
            {listaDeItens}
          </GridDeProdutos>
          <div>
            {this.renderizaProdutoSelecionado(this.state.produtoSelecionado)}
          </div>

        </DivInferior>
      </HomeContainer>
    );
  }
}


export default Home;
