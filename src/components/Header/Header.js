import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Badge from "@material-ui/core/Badge";
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingBasket';


const IconCartButton = styled(IconButton)({
  right: '50px',

})

const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '4px 4px',
      '&:hover':{
        color:'black',
      }
    },
  }))(Badge);
  
const HeaderContainer = styled.div`
  background-color:#545863;
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 0;
  margin: 0;
`

const TextFieldPesquisar = styled(TextField)({
  top: '15px',
  right: '200px',
  width: '15%',

  })

const BotaoVender = styled(Button)({
  left: '200px',
  top: '28px',
  border: 'none',
  padding: '8px 10px',
  margin: '20px 4px',
  borderRadius: '10px',
  width: '7%',
  height: '6%',
  cursor: 'pointer',
  '&:hover': {
    fontSize: '80%',
    '&:active': {
      color: 'black',
    }
  }
});

  export default class Header extends React.Component {

    state = {
      pagina: 'Home'
    }
    
        render() {
            return(

    <HeaderContainer>
      <h1>Logo</h1>


      <TextFieldPesquisar id="outlined-search" label="Pesquisar" type="search" variant="outlined" color="secondary" />

      <BotaoVender variant="outlined" size="small" color="secondary">
        Vender
      </BotaoVender>

      <IconCartButton aria-label="cart">
        <StyledBadge anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
          }} 
          badgeContent={6} color="secondary">
          <ShoppingCartIcon color="secondary"/>
        </StyledBadge>
      </IconCartButton>
      
    </HeaderContainer>

    )
  }
}