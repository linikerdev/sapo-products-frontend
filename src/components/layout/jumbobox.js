import styled from "styled-components";

const Jumbobox = ({ children }) => {

    return (
        <Box>
            <p>Bem-vindo ao <span>Sapo Alimentícios</span>, aqui você irá encontrar informações nutricionais dos principais alimentos do mercado.</p>
        </Box>
    )
}
export default Jumbobox

const Box = styled.div`
    font-family: 'Lato', sans-serif;
    justify-content: space-between;
    align-items: center;
    color: #48535F;
    font-size: 40px;
    font-weight: 600;
    line-height: 62px;
    text-align: center;
    display:flex;
    justify-content:center;
    padding: 40px 0;
    p{
        width: 70%;
        span {
          color: #717E8C
        }
    }
    
`

