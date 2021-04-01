import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import carrossel1 from './img/carrossel-1.png';
import carrossel2 from './img/carrossel-2.jpg';
import carrossel3 from './img/carrossel-3.png';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import { baseUrl } from '../Parametros'

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
  display:flex;
  flex-direction:column;
  min-height:100vh;
`
const Produtos = styled.div`
  display:flex;
  justify-content:center;
  align-items:flex-start;
  margin-top:20px;
`
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


export class AppContainer extends React.Component {
  
  state = {
    showProducts: [],
    sort: 'none'
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    try {
      const response = await axios.get(baseUrl)
      this.setState({ showProducts: response.data.products })
    } catch (erro) {
      console.log("erro", erro);
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


  render() {
  this.props.alteraContador();
    const mostrarTela = this.pesquisarProdutos().map((produtos) => {
      return <ProdutosTela>
                <Imagens src={produtos.photos}></Imagens>
                <DescricaoProdutos>
                  <p><b>{produtos.name}</b></p>
                  <p><i>{produtos.category}</i></p>
                  <div>R$ {produtos.price},00</div>
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
        <Filtros>
          <Botoes>
            <Input 
              id="custom-css-standard-input" 
              label="Nome" 
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
          <ProdutosPai>
            {mostrarTela}
          </ProdutosPai>
        </Produtos>
      </Principal>
    );
  }
}
