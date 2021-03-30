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
import Header from './components/Header/Header'



const Body = styled.body`
  `
const TextFieldPesquisar = styled(TextField)({
  marginTop:'20px',
  borderRadius:10,
  color: 'grey'
})


export default class App extends React.Component {

state = {
  
}

	render() {
		return(
			<ThemeProvider theme={theme}>

      <Header/>

			<Body color="primary">
			  <AppContainer color="primary" />
			</Body>
      <Footer />
			</ThemeProvider>
		);
	} 
}
