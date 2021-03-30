import React from 'react'
import styled from 'styled-components'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Badge from "@material-ui/core/Badge";
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Collapse } from '@material-ui/core';


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

  const TextFieldPesquisar = styled(TextField)({
  })

  const BotaoVender = styled(Button)({
    border: 'none',
    padding: '8px 10px',
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

  export default class Header extends React.Component {

    state = {
      
    }
    
        render() {
            return(

    <HeaderContainer variant='contained' color="primary">
      <h1>Logo</h1>


      <TextFieldPesquisar id="outlined-search" label="Pesquisar" type="search" variant="outlined" />

      <IconButton aria-label="cart">
        <StyledBadge anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
          }} 
          badgeContent={6} color="secondary">
          <ShoppingCartIcon color="primary"/>
        </StyledBadge>
      </IconButton>
      
      <Button variant="outlined" size="small" color="secondary">
        Vender
      </Button>

      <BotaoVender color="primary">vender</BotaoVender>
    </HeaderContainer>

    )
  }
}