import React from 'react';
import styled from 'styled-components';


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
`
const FooterLinkFilho = styled.div`
    width:20%;
    font-size:20px;
    text-align:center;
`
const TituloFooter = styled.h3`
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
`

export default class Footer extends React.Component{
    render(){
        return(
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
                        <FooterLinkFilho>
                        <TituloFooter>Redes Sociais</TituloFooter>
                            <p>Facebook</p>
                            <p>Twitter</p>
                            <p>Instagram</p>
                        </FooterLinkFilho>
                    </FooterLink>
                    <HeaderMargin>
                        <h2>&copy; Todos os direitos Dirigidos para 4USED - Old is cool</h2>
                    </HeaderMargin>
                </HeaderCima>
            </div>
        )
    }
}