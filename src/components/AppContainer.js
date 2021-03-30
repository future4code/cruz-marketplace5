import React from 'react'
import styled from 'styled-components'

const Principal = styled.div`
  display:flex;
  flex-direction:column;
  height:150vh;
`
const Carrossel = styled.div`
  display:flex;
  border:1px solid black;
  flex:1;
`

const Produtos = styled.div`
  display:flex;
  flex:3;
  border:1px solid red;
  justify-content:center;
  align-items:center;
  font-size:100px;
  
`
export class AppContainer extends React.Component {
  render() {
    return (
      <Principal>
          <Carrossel>

          </Carrossel>
          <Produtos>
              Produtos aqui !
          </Produtos>
      </Principal>
    );
  }
}
