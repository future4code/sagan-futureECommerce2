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

class Carrinho extends React.Component {
    constructor(props) {
        super(props)
    }

    trazProdutosPraLista = () => {
        // aqui eu vou dar um map no carrinho e retornar uma div q contem quantidade - nome (talvez um botão de deletar... q posso fazer mais pra frente)
        // lembrar de estilizar essa div com uma border-botton dashed, só pra dividir os elementos
        return this.props.itensCarrinho.map((cadaProdutoNoCarrinho) => {
            return (
                <div>
                    {cadaProdutoNoCarrinho.value}
                </div>
            )
        })
    }

    mudaValorTotal = () => {
        // novoValor não vem de um event ... está relacionado ao que for trazido pra lista acima
        // pego aquele array criado no botão... vou somar os valores dos produtos adicionados multiplicados pelas quantidades
        // talvez usar reduce

        // return this.props.itensCarrinho.reduce( (prevVal, elem, index, array) => {
        //     return prevVal + elem.nome.value * elem.quantidade
        // }, 0)
        return 0
    }

    render() {
        let listaDeProdutosNoCarrinho = this.trazProdutosPraLista()
        let valorTotal = this.mudaValorTotal()

        return (
            <CarrinhoContainer>
                <Titulo>Carrinho:</Titulo>
                {listaDeProdutosNoCarrinho}
                <p>Total: <strong>R$ {valorTotal.toFixed(2)}</strong></p>
            </CarrinhoContainer>
        )
    }

}
export default Carrinho;