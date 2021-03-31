import React from "react"
import axios from "axios"
import styled from "styled-components"
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const SellerContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const InputPesquisar = withStyles({
    root: {
      width: '20%',
      padding:'10px',
      '& label.Mui-focused': {
        color: '#EC805C',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#EC805C',
      },
    },
  })(TextField);

const BotaoVender = styled(Button)({
    width: '7%',
    height: '6%',
    cursor: 'pointer',
    '&:hover': {
      fontSize: '80%',
      '&:active': {
        color: '#EC805C',
      }
    }
});

export default class SellerPage extends React.Component {
    state = {
        name: "",
        description: "",
        price: "",
        paymentMethod: "",
        category: "",
        photos: "",
        installments: ""
    }

    productName = (e) => {
        this.setState({name: e.target.value})
    }

    productDescription = (e) => {
        this.setState({description: e.target.value})
    }

    productPrice = (e) => {
        this.setState({price: e.target.value})
    }

    productPayment = (e) => {
        this.setState({paymentMethod: e.target.value})
    }

    productInstallment = (e) => {
        this.setState({installments: e.target.value})
    }

    productCategory = (e) => {
        this.setState({category: e.target.value})
    }

    productImage = (e) => {
        this.setState({photos: e.target.value})
    }

    createProductSale = () => {
        const body = {
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            paymentMethod: this.state.paymentMethod,
            category: this.state.category,
            installments: this.state.installments,
            photos: [this.state.photos]
        }
        axios.post(
            "https://us-central1-labenu-apis.cloudfunctions.net/fourUsedTwo/products",
            body
        ).then((r) => {
            this.setState({
                name: "",
                description: "",
                price: "",
                paymentMethod: "",
                category: "",
                photos: "",
                installments: "",
            })
            alert("Seu produto foi adicionado ao nosso catálogo!")
        }).catch((err) => {
            alert("Por favor, preencha todos os dados obrigatórios para vender seu produto.")
        })
    }

    render() {
        return (
            <SellerContainer>

                <InputPesquisar 
                    id="custom-css-standard-input" 
                    label="Nome" 
                    type="search" 
                    value={this.state.name}
                    onChange={this.productName}
                />
                <InputPesquisar 
                    id="custom-css-standard-input" 
                    label="Preço" 
                    type="search" 
                    value={this.state.price}
                    onChange={this.productPrice}
                />
                <InputPesquisar 
                    id="custom-css-standard-input" 
                    label="Pagamento" 
                    type="search" 
                    value={this.state.paymentMethod}
                    onChange={this.productPayment}
                />
                <InputPesquisar 
                    id="custom-css-standard-input" 
                    label="Nº Parcelas" 
                    type="search" 
                    value={this.state.installments}
                    onChange={this.productInstallment}
                />
                <InputPesquisar 
                    id="custom-css-standard-input" 
                    label="Categoria" 
                    type="search" 
                    value={this.state.category}
                    onChange={this.productCategory}
                />
                <InputPesquisar 
                    id="custom-css-standard-input" 
                    label="Descrição" 
                    type="search" 
                    value={this.state.description} 
                    onChange={this.productDescription}
                />
                <InputPesquisar 
                    id="custom-css-standard-input" 
                    label="Foto do produto" 
                    type="search" 
                    value={this.state.photos} 
                    onChange={this.productImage}
                />
                <BotaoVender type="submit" 
                    variant="outlined" 
                    size="small" 
                    color="primary" 
                    onClick={this.createProductSale}>
                        Enviar
                </BotaoVender>

            </SellerContainer>
        )
    }
}