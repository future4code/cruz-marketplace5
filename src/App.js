import React from 'react';
import { AppContainer } from './components/AppContainer';
import styled from 'styled-components';
import Footer from './components/Footer/Footer';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingBasket';
import SellerPage from './components/SellerPage/SellerPage';


const HeaderContainer = styled.div`
  background-color: #545863;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  @media(max-width:400px){
    display:flex;
    justify-content:space-between;
  }
`
const Body = styled.body`
`
const BotaoVender = styled(Button)({
  right: '150px',
  top: '35px',
  border: 'none',
  padding: '8px 10px',
  margin: '20px 4px',
  borderRadius: '10px',
  width: '7%',
  height: '6%',
  cursor: 'pointer',
  '&:hover': {
    fontSize: '80%',
    '&:active': {
      color: 'black'
    }
  }
});
const InputPesquisar = withStyles({
  root: {
    top: '15px',
    right: '400px',
    width: '15%',
    '& label.Mui-focused': {
      color: '#EC805C'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#EC805C'
    }
  }
})(TextField);

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 15,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '4px 4px',
    '&:hover':{
      color:'black',
    }
  },
}))(Badge);
const DivPesquisar = styled.div`
  margin-left: 203px;
`;

export default class App extends React.Component {
 
  state = {
    pagina: 'home',
    pesquisar: '',
    maxPreco: '',
    minPreco: '',
    nomeProduto: '',
    categoria: '',
  };

  
  mudarPagina = () => {
    if (this.state.pagina === 'home') {
      this.setState({ pagina: 'vender' });
    } else if (this.state.pagina === 'vender') {
      this.setState({ pagina: 'home' });
    }
  };
  botaoSellerPage = () => {
    switch (this.state.pagina) {
      case 'home':
        return (
          <BotaoVender
            onClick={this.mudarPagina}
            variant="outlined"
            size="small"
            color="secondary"
          >
            Vender
          </BotaoVender>
        );
      case 'vender':
        return (
          <BotaoVender
            onClick={this.mudarPagina}
            variant="outlined"
            size="small"
            color="secondary"
          >
            Home
          </BotaoVender>
        );
      default:
        <div></div>;
    }
  };

  botaoPesquisar = () => {
    switch (this.state.pagina) {
      case 'home':
        return (
          <InputPesquisar
            id="custom-css-standard-input"
            label="Pesquisar"
            type="search"
            value={this.pesquisar}
            onChange={this.onChangePesquisar}
            pesquisar={this.state.pesquisar}
          />
        );
      case 'vender':
        return <DivPesquisar></DivPesquisar>;
    }
  };

  onChangePesquisar = (event) => {
    this.setState({pesquisar: event.target.value})
  }
  onChangeNomeProduto = (event) =>{
    this.setState({nomeProduto: event.target.value})
  }
  onChangeNomeCategoria = (event) =>{
    this.setState({categoria: event.target.value})
  }
  onChangeMaxPreco = (event) => {
    this.setState({maxPreco: event.target.value})
  }
  onChangeMinPreco = (event) => {
    this.setState({minPreco: event.target.value})
  }
  

  renderizaPagina = () => {
    switch(this.state.pagina) {
      case 'home':
        return <AppContainer
        pesquisar = {this.state.pesquisar}
        onChangePesquisar = {this.onChangePesquisar}
        nomeProduto = {this.state.nomeProduto}
        onChangeNomeProduto = {this.onChangeNomeProduto}
        categoria = {this.state.categoria}
        onChangeNomeCategoria = {this.onChangeNomeCategoria}
        maxPreco = {this.state.maxPreco}
        onChangeMaxPreco = {this.onChangeMaxPreco}
        minPreco = {this.state.minPreco}
        onChangeMinPreco = {this.onChangeMinPreco}
         />;
      case 'vender':
        return <SellerPage />;
      default:
        return <div></div>;
    }
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <HeaderContainer>
          <h1>Logo</h1>

          {this.botaoPesquisar()}

          {this.botaoSellerPage()}
        </HeaderContainer>

      {this.botaoSellerPage()}

      <Body color="primary">
        {this.renderizaPagina()}
      </Body>
        <Footer />
      </ThemeProvider>
    );
  }
}
