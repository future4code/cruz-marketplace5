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
  display: flex;
  flex-direction: column;
  height: 150vh;
`;

const Produtos = styled.div`
  display: flex;
  flex: 3;
  border: 1px solid red;
`;

export class AppContainer extends React.Component {
  state = {
    showProducts: []
  };

  getProducts = async () => {
    try {
      const response = await axios.get(
        'https://us-central1-labenu-apis.cloudfunctions.net/fourUsedTwo/products'
      );
      this.setState({ showProducts: response.data.products });
      console.log('estate', this.state.showProducts);
    } catch (erro) {
      console.log('erro', erro);
    }
  };

  render() {
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
        <Produtos></Produtos>
      </Principal>
    );
  }
}
