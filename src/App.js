import React from 'react'
import { AppContainer } from './components/AppContainer'
import styled from 'styled-components'
import Footer from './components/Footer/Footer'


const DivAppContainer = styled.div`
	background-color: #FFE3E3;
`

const Header = styled.header`
	display: flex;
	background-color: #545863;
	justify-content: space-around;
	text-align: center;
	padding: 0;
	margin: 0;
`

const Body = styled.body`
	height: 100vh;

`
const InputSearch = styled.input`
margin:20px;
border-radius: 15px;

`
const ButtonComprar = styled.button`
  background-color: #D643AD;
  border: none;
  color: white;
  text-decoration: none;
  margin: 20px 4px;
  border-radius: 10px;
  background-color: #D643AD;
  background-image: linear-gradient(to left, #FFE3E3, #EC805C);
  width: 7%;
  cursor: pointer;
  &:hover{
    background-color: #07C6FD;
    color: white;
    font-size: 100%;
    &:active {
      background-color: black;
      color: black;
    }
  }
`
const ButtonVender = styled.button`
  background-color: #D643AD;
  border: none;
  color: white;
  padding: 8px 10px;
  text-decoration: none;
  margin: 20px 4px;
  border-radius: 10px;
  background-color: #EC805C;
  width: 7%;
  margin-left: 65px;
  cursor: pointer;
  &:hover{
    background-color: #07C6FD;
    color: white;
    font-size: 100%;
    &:active {
      background-color: black;
      color: black;
    }
  }
`

export default class App extends React.Component {
	render() {
		return(
			<DivAppContainer>
			<Header>
				<h1>Logo</h1>
				<InputSearch
					placeholder='pesquisar'/>
				<ButtonComprar>Comprar</ButtonComprar>
				<ButtonVender>vender</ButtonVender>
			</Header>
			<Body>
			  <AppContainer />
			</Body>
      <Footer />
			</DivAppContainer>
		);
	} 
}
