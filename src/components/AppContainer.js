import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import carrossel1 from './img/carrossel-1.png';
import carrossel2 from './img/carrossel-2.jpg';
import carrossel3 from './img/carrossel-3.png';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const Principal = styled.div`
  display:flex;
  flex-direction:column;
  height:200vh;
`

const Produtos = styled.div`
  display:flex;
  flex:1;
  justify-content:center;
  align-items:flex-start;
  margin-top:20px;
`
const ProdutosPai = styled.div`
  display:grid;
  grid-template-columns:repeat(6, 200px);;
  justify-content:center;
  grid-gap:15px;
  width:100%;
  height:70%;
`
const ProdutosTela = styled.div`
    border:1px inset #EC805C;
    display:flex;
    align-items:center;
    flex-direction:column;
    border-radius: 15px;
`
const Imagens = styled.img`
    margin-top:20px;
    width:100px;
    height:100px;
`
const DescricaoProdutos = styled.div`
  display:flex;
  flex-direction:column;
  margin-top: 15px;
  text-align:center;
  color:#EC805C;
`
const BotaoComprar = styled(Button)({
  top:'30px',
});


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
      .filter((produtos) => this.props.pesquisar ? produtos.name.toLowerCase().includes(this.props.pesquisar) : true)
  }

  render() {
    const mostrarTela = this.pesquisarProdutos().map((produtos) => {
      return <ProdutosTela>
                <Imagens src={produtos.photos}></Imagens>
                <DescricaoProdutos>
                  <p><b>{produtos.name}</b></p>
                  <div>R${produtos.price},00</div>
                </DescricaoProdutos>
                <BotaoComprar variant="outlined" size="medium" color="secondary">
                  Comprar
                </BotaoComprar>            
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
