import React from 'react'
import styled from 'styled-components'
import axios from 'axios';

const Principal = styled.div`
  display:flex;
  flex-direction:column;
  height:150vh;
  background-color: #FFE3E3;
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
`
export class AppContainer extends React.Component {

  state = {
    showProducts:[]
  }


  getProducts = async() =>{
    try{
        const response = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/fourUsedTwo/products")
        this.setState({showProducts:response.data.products})
        console.log("estate",this.state.showProducts);
    }catch(erro){
      console.log("erro",erro);
    }
  }

  render() {
    return (
      <Principal>
          <Carrossel>

          </Carrossel>
          <Produtos>
          </Produtos>
      </Principal>
    );
  }
}
