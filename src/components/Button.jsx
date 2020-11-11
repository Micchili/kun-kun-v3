import React from 'react'
import styled from 'styled-components'

const AnyButton = styled.button`
    width: 220px;
    height: 220px;
    border: solid 2px #c864d1;
`

export const Button = ({text}) => {
    return(
        <AnyButton>{text}</AnyButton>
    )
}