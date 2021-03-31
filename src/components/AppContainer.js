import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import carrossel1 from './img/carrossel-1.png';
import carrossel2 from './img/carrossel-2.jpg';
import carrossel3 from './img/carrossel-3.png';

const Principal = styled.div`
  display:flex;
  flex-direction:column;
  height:250vh;
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
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

`
const Imagens = styled.img`
    width:100px;
    height:100px;
`
const DescricaoProdutos = styled.div`
  display:flex;
  flex-direction:column;
`
const BotaoComprar = styled.button`
  background-color: #545863;
  color: white;
  padding: 8px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 35px;
  transition-duration: 0.5s;
  cursor: pointer;
  border-radius: 15px;
  border-style: dotted dashed solid double;
  &:hover {
    background-color: #EC805C;
    color: white;
    font-size: 100%;
    border: 2px solid #545863;
    border-style: dotted dashed solid double;
    &:active {
      background-color: black;
      color: #EC805C;
    }
  }
`;


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
    } catch (erro) {
      console.log("erro", erro);
    }
  };

  pesquisarProdutos = () => {
    return this.state.showProducts
      .filter((produtos) => this.props.namePesquisar ? produtos.name.toLowerCase().includes(this.props.namePesquisar) : true)
  }

  render() {
    const mostrarTela = this.pesquisarProdutos().map((produtos) => {
      return <ProdutosTela>
                <Imagens src={produtos.photos}></Imagens>
                <DescricaoProdutos>
                  <div>{produtos.name}</div>
                  <div>R${produtos.price},00</div>
                </DescricaoProdutos>
                <BotaoComprar>Comprar</BotaoComprar>
            </ProdutosTela>
    })

    return (
      <Principal>
        <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false} >
          <div>
            <img src={carrossel1} />
          </div>
          <div>
            <img src={carrossel2} />
          </div>
          <div>
            <img src={carrossel3} />
          </div>
        </Carousel>
        <Produtos>
          <ProdutosPai>
            {mostrarTela}
          </ProdutosPai>
        </Produtos>
      </Principal>
    );
  }
}
