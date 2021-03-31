import React from "react"
import axios from "axios"
import styled from "styled-components"
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCamera from '@material-ui/icons/PhotoCamera';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(2),
      },
    },
    input: {
      display: 'none',
    },
}));

const SellerContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 25px;
`
const Input = withStyles({
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

const BotaoEnviar = styled(Button)({
    top: '10px',
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
const Botao = styled.input`
    display:none;
`

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

                <Input
                    id="custom-css-standard-input" 
                    label="Nome do Produto" 
                    type="search" 
                    value={this.state.name}
                    onChange={this.productName}
                />
                <Input
                    id="custom-css-standard-input" 
                    label="Preço" 
                    type="number" 
                    value={this.state.price}
                    onChange={this.productPrice}
                />
                <Input
                    id="custom-css-standard-input" 
                    label="Pagamento" 
                    type="search" 
                    value={this.state.paymentMethod}
                    onChange={this.productPayment}
                />
                <Input
                    id="custom-css-standard-input" 
                    label="Nº Parcelas" 
                    type="number" 
                    value={this.state.installments}
                    onChange={this.productInstallment}
                />
                <Input
                    id="custom-css-standard-input" 
                    label="Categoria" 
                    type="search" 
                    value={this.state.category}
                    onChange={this.productCategory}
                />
                <Input 
                    id="custom-css-standard-input" 
                    label="Descrição" 
                    type="search" 
                    value={this.state.description} 
                    onChange={this.productDescription}
                />
                <Botao 
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                    value={this.state.photos} 
                    onChange={this.productImage}
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" 
                        right='10px'
                        color="primary" 
                        component="span" 
                        startIcon={<PhotoCamera />}>
                            Enviar Foto
                    </Button>
                </label>

                <BotaoEnviar type="submit" 
                    variant="outlined" 
                    size="small" 
                    color="primary" 
                    onClick={this.createProductSale}>
                        Enviar
                </BotaoEnviar>

            </SellerContainer>
        )
    }
}