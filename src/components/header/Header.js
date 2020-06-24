import React from 'react'
import { StyledHeader } from './header.styled'

const Header = ({ children }) => {
    return (
        <StyledHeader>
            {children}
        </StyledHeader>
    )
}

export default Header
