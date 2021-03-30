import React from 'react'
import { AppContainer } from './components/AppContainer'
import styled from 'styled-components'
import Footer from './components/Footer/Footer'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme'
import Header from './components/Header/Header'


const Body = styled.body`
`


export default class App extends React.Component {

state = {
  
}

	render() {
		return(
			<ThemeProvider theme={theme}>

      <Header />

			<Body color="primary">
			  <AppContainer color="primary" />
			</Body>
      <Footer />
			</ThemeProvider>
		);
	} 
}
