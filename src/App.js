import React from 'react'
import { AppContainer } from './components/AppContainer'
import styled from 'styled-components'
import Footer from './components/Footer/Footer'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Badge from "@material-ui/core/Badge";
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

const HeaderContainer = styled.div`

	display: flex;
	justify-content: space-around;
	text-align: center;
	padding: 0;
	margin: 0;

`
const Body = styled.body`
  
`
const InputSearch = styled.input`

margin:25px;
border-radius: 10px;
border: none;
border-bottom: 2px solid #EC805C;
`
const TextFieldPesquisar = styled(TextField)({
  marginTop:'20px',
  borderRadius:10,
  color: 'grey'
})
const ButtonComprar = styled(Button)({
  border: 'none',
  textDecoration: 'none',
  margin: '20px 4px',
  borderRadius: 10,
  backgroundImage: 'linear-gradient(to left, #FFE3E3, #EC805C)',
  width: '7%',
  height:'6%',
  cursor: 'pointer',
  '&:hover': {
    color: 'white',
    fontSize: '90%',
    '&:active': {
      color: 'black',
    }
  }
});
const ButtonVender = styled(Button)({
  backgroundImage: 'linear-gradient(to left, #FFE3E3, #EC805C)',
  color: 'white',
  border: 'none',
  padding: '8px 10px',
  textDecoration: 'none',
  margin: '20px 4px',
  borderRadius: '10px',
  width: '7%',
  height: '6%',
  cursor: 'pointer',
  '&:hover': {
    color: 'black',
    fontSize: '90%',
    '&:active': {
      color: 'black',
    }
  }
});



export default class App extends React.Component {

state = {
  
}

	render() {
		return(
			<ThemeProvider theme={theme}>

			<HeaderContainer variant='contained' color="primary">
				<h1>Logo</h1>


        <TextFieldPesquisar id="outlined-search" label="Pesquisar" type="search" variant="outlined" />


				<InputSearch 
					placeholder='pesquisar'/>

				<ButtonComprar item xs={3} color="primary">Comprar</ButtonComprar>

        <IconButton aria-label="cart">
          <StyledBadge anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }} 
            badgeContent={6} color="secondary">
          <ShoppingCartIcon color="primary"/>
          </StyledBadge>
        </IconButton>
        

				<ButtonVender color="secondary">vender</ButtonVender>
			</HeaderContainer>

			<Body color="primary">
			  <AppContainer color="primary" />
			</Body>
      <Footer />
			</ThemeProvider>
		);
	} 
}
