import styled from "styled-components";
import sapoLogo from '../../assets/images/logo.png'
import { NavLink } from 'react-router-dom';

const Header = ({ children }) => {

    return (
        <ContentHeader>
            <Container>
                <BoxLogo>
                    <LogoImg src={sapoLogo} alt="" />
                </BoxLogo>
                <Menu>
                    <ItemMenu exact to="/" activeClassName="active" $flex="1">
                        <span>Home</span>
                    </ItemMenu>
                    <ItemMenu exact to="/proteinas" activeClassName="active">
                        <span>Proteínas</span>
                    </ItemMenu>
                    <ItemMenu exact to="/carboidratos" activeClassName="active">
                        <span>Carboidratos</span>
                    </ItemMenu>
                    <ItemMenu exact to="/gorduras" activeClassName="active">
                        <span>Gorduras</span>
                    </ItemMenu>
                </Menu>
            </Container>
        </ContentHeader>
    )
}
export default Header

const ContentHeader = styled.div`
    background-color: #8190A5;
    display: flex;
    padding: 0 30px;
    justify-content: center;
    align-items: center;
`
const Container = styled.div`
    height:70px;
    width:85%;
    display: flex;
    justify-content: space-between;
    align-items: center;

`

const BoxLogo = styled.div`
    padding: 8px;
    padding:0 10px;
    height: 70%;
    border-right: 3px solid #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 10px
    
`
const LogoImg = styled.img` 
    max-width: 70px;
  
`
const Menu = styled.div`

    display:flex;
    flex:1;
   
`
const ItemMenu = styled(NavLink)`
    flex: ${props => props.$flex || 0};
    margin: 10px;
    text-decoration: none;
    font-family: 'Lato', sans-serif;
    font-weight: 600;
    color: #fff;
    span{
        padding:4px 1px
    }   
    &.active span{
        color: #000000;
        border-bottom: 2px solid #000000 
    }
    :active{
        color: #000000
    }

`

