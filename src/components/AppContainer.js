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
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import { baseUrl } from '../Parametros'
import { Grid } from '@material-ui/core';

const TituloCarrinhoDeCompras = styled.h2`
  color: #EC805C;
`
const currencies = [
  {
    value: 'crescente',
    label: 'Crescente',
  },
  {
    value: 'decrescente',
    label: 'Decrescente',
  },
];
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
const Principal = styled.div`
  display: flex;
  flex-direction: column;
  min-height:100vh;
`;

const Total = styled.p`
  font-size: 16px;
  position: absolute;
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
  width: '25px',
  left: '1250px',
  bottom: '1640px',
});

const StyledBadge = withStyles((theme) => ({
  badge: {
    
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '2px 2px',
    '&:hover': {
      color: 'black'
    }
  }
}))(Badge);

const StyledBadge2 = withStyles((theme) => ({
  badge: {
    
    right: -3,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '2px 2px',
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
  display:grid;
  grid-template-columns:repeat(6, 200px);
  justify-content:center;
  grid-gap:15px;
  margin:5px;
  @media(max-width:600px){
    grid-template-columns:repeat(2,150px);
  };
`
const ProdutosTela = styled.div`
    border:1px inset #EC805C;
    display:flex;
    align-items:center;
    flex-direction:column;
    border-radius: 15px;
    height: 350px;
`
const Imagens = styled.img`
    margin-top:20px;
    width:100px;
    height:100px;
    cursor: pointer;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    &:hover{
      max-width: 150%;
      -moz-transform: scale(1.1);
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    };
`

const Imagens2 = styled.img`
    margin-top:20px;
    width:50PX;
    height:50PX;
    cursor: pointer;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    &:hover{
      max-width: 150%;
      -moz-transform: scale(1.1);
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    };
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
const Filtros = styled.div`
  background-color:#545863;
  display:flex;
  height:6%;
  margin:10px 33px;
  justify-content:center;
  align-items:center;
  border-radius:10px;
`
const Botoes = styled.div`
      display:flex;
      width:90%;
      justify-content:space-evenly;
`
const Input = withStyles({
  
  root: {
    width: '15%',
    '& label.Mui-focused': {
      color: '#EC805C',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#EC805C',
    },
  },
})(TextField);

const FinalizarCompra = styled(Button)({
  textAlign: 'center',
  cursor: 'pointer',
  bottom: '25px',
  left: '400px',
});
const BotaoFechar = styled(Button)({
  textAlign: 'center',
  cursor: 'pointer',
  bottom: '25px',
  left: '540px',
  position: 'absolute',
});

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
    count: 0,
    sort: 'none'
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    try {
      const response = await axios.get(baseUrl)
      this.setState({ showProducts: response.data.products })
    } catch (erro) {
      console.log('erro', erro);
    }
  };

  pesquisarProdutos = () => {
     return this.state.showProducts
      .filter((produtos) => this.props.maxPreco ? produtos.price < this.props.maxPreco : true)
      .filter((produtos) => this.props.minPreco ? produtos.price > this.props.minPreco : true)
      .filter((produtos) => this.props.nomeProduto ? produtos.name.toLowerCase().includes(this.props.nomeProduto) : true)
      .filter((produtos) => this.props.pesquisar ? produtos.name.toLowerCase().includes(this.props.pesquisar) : true)
      .filter((produtos) => this.props.categoria ? produtos.category.toLowerCase().includes(this.props.categoria) : true)
      
      .sort((a, b) => this.state.sort === "decrescente" ? a.price - b.price : b.price - a.price)
    }

  onChangeSort = (event) => {
    this.setState({sort: event.target.value});
}

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
      return <ProdutosTela>
                <Imagens src={produtos.photos}></Imagens>
                <DescricaoProdutos>
                  <p><b>{produtos.name}</b></p>
                  <p><i>{produtos.category}</i></p>
                  <div>R$ {produtos.price},00</div>
                </DescricaoProdutos>
                <BotaoComprar 
                  variant="outlined" 
                  size="medium" 
                  color="secondary" 
                  onClick={() => this.adicionarItemCarrinho(produtos)}>
                    Comprar
                </BotaoComprar>            
        </ProdutosTela>
    })
    
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
        <Filtros>
          <Botoes>
            <Input 
              id="custom-css-standard-input" 
              label="Buscar Produto" 
              type="search" 
              value={this.props.nomeProduto} 
              onChange={this.props.onChangeNomeProduto}
            />
              <Input 
                id="custom-css-standard-input" 
                label="Max. Preço" 
                type="number" 
                value={this.props.maxPreco} 
                onChange={this.props.onChangeMaxPreco}
              />
            <Input 
              id="custom-css-standard-input" 
              label="Min. Preço" 
              type="number" 
              value={this.props.minPreco} 
              onChange={this.props.onChangeMinPreco}
            />
            <Input 
              id="custom-css-standard-input" 
              label="Categoria" 
              type="search" 
              value={this.props.categoria} 
              onChange={this.props.onChangeNomeCategoria}
            />
            <TextField
              id="standard-select-currency"
              select
              label="Ordenar"
              color='secondary'
              value={this.state.sort} 
              onChange={this.onChangeSort}
              helperText="Escolha a ordem dos produtos">
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

          </Botoes>
        </Filtros>
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
          <TituloCarrinhoDeCompras>Carrinho de Compras</TituloCarrinhoDeCompras>
          <BotaoFechar 
            onClick={this.toggleModal} 
            variant="outlined"
            size="small"
            color="secondary">
              Fechar
          </BotaoFechar>
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
                          Total: R${this.renderTotal()} 
                        <FinalizarCompra 
                          variant="outlined"
                          size="small"
                          color="secondary">
                            Finalizar Compra
                        </FinalizarCompra>
                    </Total>
                  }
          </UlStyled>
        </Popup>
      </Principal>
    );
  }
}
