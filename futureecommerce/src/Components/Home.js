import React from 'react'
import styled from 'styled-components'

const HomeContainer = styled.div`
    background-color: grey;
    width: 70%;
`

function Home(){
    return(
        <HomeContainer>
            <p> Eu sou uma Home</p>
        </HomeContainer>
    )

}


export default Home;