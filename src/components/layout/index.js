import styled from "styled-components";

import Header from './header'
import JumboBox from './jumbobox'

const Layout = ({ children }) => {

    return (
        <Content>
            <Header />
            <JumboBox />
            {children}
        </Content>
    )
}

export default Layout;


const Content = styled.div``
