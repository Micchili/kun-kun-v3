import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
    font-family: 'Open Sans', sans-serif;
    will-change: transform, opacity;
    text-shadow: 0px 5px 40px #00000020, 0px 5px 5px #00000030;
    font-weight: 700;

    @media screen and (min-width: 1024px) {
        font-size: 10rem;
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