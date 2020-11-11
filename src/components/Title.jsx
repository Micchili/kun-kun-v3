import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
    @media screen and (min-width: 1024px) {
    font-size: 2.4rem;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
        font-size: 2rem;
    }
    @media screen and (max-width: 767px) {
        font-size: 1.5rem;
    }
`

export const Title = ({title}) => {
    return (
    <H1>{title}</H1>
    )
}