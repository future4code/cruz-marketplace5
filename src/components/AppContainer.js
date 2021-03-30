import React from 'react'
import styled from 'styled-components'
import axios from 'axios';

const Principal = styled.div`
  display:flex;
  flex-direction:column;
  height:200vh;
`
const Carrossel = styled.div`
  display:flex;
  border:1px solid black;
  flex:1;
`

const Produtos = styled.div`
  display:flex;
  flex:1;
  justify-content:center;
  align-items:center;
  width:100%;
  margin:10px 0;
`
const ProdutosPai = styled.div`
  display:grid;
  grid-template-columns:300px 300px 300px ;
  padding:50px;
  justify-content:center;
  grid-gap:2px;
  width:100%;
  height:100%;
`
const ProdutosTela = styled.div`
    border:1px solid black;
    text-align:center;
`
const Imagens = styled.img`
    width:100px;
    height:100px;
`
const DescricaoProdutos =styled.div`
  display:flex;
  flex-direction:column;
`
export class AppContainer extends React.Component {

  state = {
    showProducts: []
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    try {
      const response = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/fourUsedTwo/products")
      this.setState({ showProducts: response.data.products })
      console.log("estate", this.state.showProducts);
    } catch (erro) {
      console.log("erro", erro);
    }
  }

  render() {
    const mostrarTela = this.state.showProducts.map((produtos) => {
      return <ProdutosTela>
                <Imagens src={produtos.photos}></Imagens>
                <DescricaoProdutos>
                  <div>{produtos.name}</div>
                  <div>R$:{produtos.price},0</div>
                </DescricaoProdutos>
                <button>Comprar</button>
            </ProdutosTela>
    })

    return (
      <Principal>
        <Carrossel>

        </Carrossel>
        <Produtos>
          <ProdutosPai>
            {mostrarTela}
          </ProdutosPai>
        </Produtos>
      </Principal>
    );
  }
}
