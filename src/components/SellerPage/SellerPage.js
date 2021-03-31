import React from "react"
import axios from "axios"
import styled from "styled-components"

const SellerContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
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
                <h2> Adicionar um produto para venda </h2>
                <label> Nome </label>
                <input
                    value={this.state.name}
                    onChange={this.productName}/>
                <label> Preço </label>
                <input
                    value={this.state.price}
                    onChange={this.productPrice}/>
                <label> Pagamento </label>
                <input
                    value={this.state.paymentMethod}
                    onChange={this.productPayment}/>
                <label> Nº Parcelas </label>
                <input
                    value={this.state.installments}
                    onChange={this.productInstallment}/>
                <label> Categoria </label>
                <input
                    value={this.state.category}
                    onChange={this.productCategory}/>
                <label> Descrição </label>
                <input
                    value={this.state.description}
                    onChange={this.productDescription}/>
                <label> Foto do produto</label>
                <input
                    value={this.state.photos}
                    onChange={this.productImage}/>
                <button type="submit" onClick={this.createProductSale}> Enviar!</button>
            </SellerContainer>
        )
    }
}