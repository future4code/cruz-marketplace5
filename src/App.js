import { AppContainer } from './components/AppContainer'
import styled from 'styled-components'


const DivAppContainer = styled.div`
	background-color: white;
`

const Header = styled.header`
	display: flex;
	background-color: #545863;
	justify-content: space-around;
	text-align: center;
	padding: 0;
	margin: 0 0;
`

const Footer = styled.footer`
	background-color: #545863;
	text-align: center;

`

const Body = styled.body`
	height: 100vh;

`
const InputSearch = styled.input`
margin:20px;
border-radius: 15px;

`
const ButtonComprar = styled.button`
padding: 2px 10px;
margin: 20px;
border-radius: 15px;
margin-left: 600px;
`
const ButtonVender = styled.button`
margin: 20px;
border-radius: 15px;
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
			<Footer>Seja Bem Vindo</Footer>
			</DivAppContainer>
		);
	} 
}
