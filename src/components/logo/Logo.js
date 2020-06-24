import React from 'react'
import LogoWebMottors from '../../assets/webmotors.svg'
import { StyledLink } from './link.styled'

const Logo = () => {
    return (
        <StyledLink href="https://www.webmotors.com.br/">
         <img src={LogoWebMottors} alt="Web Mottors" />   
        </StyledLink>
    )
}

export default Logo
