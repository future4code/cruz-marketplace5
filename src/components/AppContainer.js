import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import carrossel1 from './img/carrossel-1.png';
import carrossel2 from './img/carrossel-2.jpg';
import carrossel3 from './img/carrossel-3.png';
import Popup from './Cart/Popup';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingBasket';
import DeleteForever from '@material-ui/icons/DeleteOutlined'

const Principal = styled.div`
  display: flex;
  flex-direction: column;
  min-height:100vh;
`;

const Total = styled.p`
  font-size: 20px;
  position: absolute;
  bottom: 1px;
  left: 16px;

`

const UlStyled = styled.ul`
  width: 350px;
  margin: 20px auto 0;
  padding: 10px;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  align-items: center;
`;

const IconCartButton = styled(IconButton)({
  left: '800px',
  bottom: '1400px'
});
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 15,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '4px 4px',
    '&:hover': {
      color: 'black'
    }
  }
}))(Badge);

const StyledBadge2 = withStyles((theme) => ({
  badge: {
    right: -3,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '4px 4px',
    '&:hover': {
      color: 'black'
    }
  }
}))(Badge);

const Produtos = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  margin-top: 20px;
`;
const ProdutosPai = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 200px);
  justify-content: center;
  grid-gap: 15px;
  width: 100%;
  height: 50%;
`;
const ProdutosTela = styled.div`
  border: 3px inset #ec805c;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
`;
const Imagens = styled.img`
  margin-top: 10px;
  width: 100px;
  height: 100px;
`;
const Imagens2 = styled.img`
  margin-top: 10px;
  width: 50px;
  height: 50px;
  border-radius: 15px;
`;
const DescricaoProdutos = styled.div`
  display: flex;
  flex-direction: column;
`;
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
    background-color: #ec805c;
    color: white;
    font-size: 100%;
    border: 2px solid #545863;
    border-style: dotted dashed solid double;
    &:active {
      background-color: black;
      color: #ec805c;
    }
  }
`;
const BotaoFechar = styled.button`
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
  position: absolute;
  top: 16px;
  right: 16px;
  &:hover {
    background-color: #ec805c;
    color: white;
    font-size: 100%;
    border: 2px solid #545863;
    border-style: dotted dashed solid double;
    &:active {
      background-color: black;
      color: #ec805c;
    }
  }
`;

const FinalizarCompra = styled.button`
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
  position: absolute;
  bottom: 1px;
  right: -580px;
  &:hover {
    background-color: green;
    color: white;
    font-size: 100%;
    border: 2px solid #545863;
    border-style: dotted dashed solid double;
    &:active {
      background-color: black;
      color: #ec805c;
    }
  }
`;

const LiStyled = styled.li`
  background: rgba(255, 255, 255, 0.1);
  text-shadow: 2px 2px 5px darkgrey;
`;

export class AppContainer extends React.Component {
  state = {
    cartItems: [],
    showProducts: [],
    minimoValue: '',
    maximoValue: '',
    produtoValue: '',
    count: 0
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    try {
      const response = await axios.get(
        'https://us-central1-labenu-apis.cloudfunctions.net/fourUsedTwo/products'
      );
      this.setState({ showProducts: response.data.products });
    } catch (erro) {
      console.log('erro', erro);
    }
  };

  pesquisarProdutos = () => {
    return this.state.showProducts.filter((produtos) =>
      this.props.pesquisar
        ? produtos.name.toLowerCase().includes(this.props.pesquisar)
        : true
    );
  };

  adicionarItemCarrinho = (product) => {
    const novoCarrinho = [...this.state.cartItems];
    const produtoNoCarrinho = this.state.cartItems.findIndex(
      (cartItem) => cartItem.product.id === product.id
    );

    if (produtoNoCarrinho <= -1) {
      novoCarrinho.push({ product: product, quantidade: 1 });
    } else {
      novoCarrinho[produtoNoCarrinho].quantidade += 1;
    }

    this.setState({
      cartItems: novoCarrinho
    });

    localStorage.setItem('novoCarrinho', JSON.stringify(novoCarrinho));

    this.renderTotal();
    this.setState({ count: this.state.count + 1 });
  };

  removerItemCarrinho = (product) => {
    const novoCarrinho = [...this.state.cartItems];
    const itemPos = this.state.cartItems.findIndex(
      (cartItem) => cartItem.product.id === product.product.id
    );

    if (novoCarrinho[itemPos].quantidade > 1) {
      novoCarrinho[itemPos].quantidade -= 1;
    } else {
      novoCarrinho.splice(itemPos, 1);
    }

    this.setState({
      cartItems: novoCarrinho
    });
    this.setState({ count: this.state.count - 1 });
  };

  onChangeMinimoValue = (event) => {
    this.setState({ minimoValue: event.target.value });
  };
  onChangeMaximoValue = (event) => {
    this.setState({ maximoValue: event.target.value });
  };
  onChangeProdutoValue = (event) => {
    this.setState({ produtoValue: event.target.value });
  };

  renderTotal = () => {
    let total = this.state.cartItems.reduce(getTotal, 0);
    function getTotal(total, item) {
      return total + item.product.price * item.quantidade;
    }
    return total;
  };

  toggleModal = () => {
    this.setState({ ...this.state, buttonPopup: !this.state.buttonPopup });
  };

  render() {
    const mostrarTela = this.pesquisarProdutos().map((produtos) => {
      return (
        <ProdutosTela>
          <Imagens src={produtos.photos}></Imagens>
          <DescricaoProdutos>
            <div>{produtos.name}</div>
            <div>R${produtos.price},00</div>
          </DescricaoProdutos>
          <BotaoComprar onClick={() => this.adicionarItemCarrinho(produtos)}>
            Comprar
          </BotaoComprar>
        </ProdutosTela>
      );
    });

    return (
      <Principal>
        {console.log('props', this.props.count)}
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
        >
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
          <ProdutosPai>{mostrarTela}</ProdutosPai>
        </Produtos>
        <IconCartButton aria-label="cart" onClick={this.toggleModal}>
          <StyledBadge
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            badgeContent={this.state.count}
            color="secondary"
          >
            <ShoppingCartIcon color="secondary" />
          </StyledBadge>
        </IconCartButton>
        <Popup trigger={this.state.buttonPopup}>
          <BotaoFechar onClick={this.toggleModal}>Fechar</BotaoFechar>
          <h2>Carrinho de compras</h2>
          <UlStyled>
            {this.state.cartItems.map((product) => {
              return (
                <LiStyled>
                  <Imagens2 src={product.product.photos}></Imagens2>
                  <StyledBadge2
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            badgeContent={product.quantidade}
            color="secondary"
          ></StyledBadge2> -{' '}
                  {product.product.name} R$
                  {product.product.price * product.quantidade}{' '}
                  <DeleteForever onClick={() => this.removerItemCarrinho(product)}>
                    x
                  </DeleteForever>
                </LiStyled>
              );
            })}
            {
              <Total>
                Total: R${this.renderTotal()} <FinalizarCompra>Finalizar Compra</FinalizarCompra>
              </Total>
            }
          </UlStyled>
        </Popup>
      </Principal>
    );
  }
}
