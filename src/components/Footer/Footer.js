import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const HeaderCima = styled.header`
    background-color:#545863;
    width:100%;
`
const HeaderMargin = styled.div`
    display:flex;
    justify-content:center;
    color:#ffffff;
`
const FooterLink = styled.div`
    display:flex;
    flex-direction:row;
    margin: 0 auto;
    @media(max-width:400px){
        display:grid;
        grid-template-columns:repeat(2,100px);
        grid-gap:100px;
        justify-content:center;
        align-items:center;
    }
`
const FooterLinkFilho = styled.div`
    width:25%;
    font-size:20px;
    text-align:center;
`
const TituloFooter = styled.h3`
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
`
const FooterLinkFilhoRedesSocial = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`
const RedesSociais = styled.div`
    display:flex; 
    width:50%;   
    justify-content:space-evenly;
`

export default class Footer extends React.Component {
    render() {
        return (
            <div>
                <HeaderCima>
                    <FooterLink>
                        <FooterLinkFilho>
                            <TituloFooter>Categoria</TituloFooter>
                            <p>Moda Masculina</p>
                            <p>Moda Feminina</p>
                            <p>Infantil</p>
                        </FooterLinkFilho>
                        <FooterLinkFilho>
                            <TituloFooter>Mais Buscados</TituloFooter>
                            <p>Produto 1</p>
                            <p>Produto 2</p>
                            <p>Produto 3</p>
                            <p>Produto 4</p>
                        </FooterLinkFilho>
                        <FooterLinkFilho>
                            <TituloFooter>Marcas mais buscadas</TituloFooter>
                            <p>Marca1</p>
                            <p>Marca2</p>
                            <p>Marca3</p>
                            <p>Marca4</p>
                        </FooterLinkFilho>
                        <FooterLinkFilho>
                            <TituloFooter>Minha Conta</TituloFooter>
                            <p>Minha loja</p>
                            <p>Minhas Vendas</p>
                            <p>Minhas Compras</p>
                        </FooterLinkFilho>
                    </FooterLink>
                    <FooterLinkFilhoRedesSocial>
                        <RedesSociais>
                            <FacebookIcon />
                            <TwitterIcon />
                            <InstagramIcon />
                        </RedesSociais>
                    </FooterLinkFilhoRedesSocial>
                    <HeaderMargin>
                        <h2>&copy; Todos os direitos Dirigidos para 4USED - Old is cool</h2>
                    </HeaderMargin>
                </HeaderCima>
            </div>
        )
    }
}