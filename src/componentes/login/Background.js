import React from 'react'
import styled from 'styled-components'
import img from '../../img/background.jpeg'

const BackgroundLogin = styled.div `
    background-image:url("${img}");
    background-size: cover; 
    height:100vh; 
`


export default ({ children }) => (
    <BackgroundLogin> 
        { children }
    </BackgroundLogin>
)