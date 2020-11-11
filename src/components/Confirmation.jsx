import React from 'react'
import styled from 'styled-components'

const Artcale = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 750px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border: solid 5px #444444;
    border-radius: 50px;
    background-color: rgba(0,0,0,0.1);
    transition: 0.5s;
    opacity: ${({ fade }) => (fade === "entered" ? 1 : 0)};
    display: ${({ fade }) => (fade === "exited" ? "none" : "block")};
`

const P = styled.p`
  margin: 15px;
`

const Small = styled.small`
  margin: 15px;
  
`

export const Confimation = ({isFade,children}) => {
    return(
        <Artcale fade={isFade}>
            <P>このサイトでは、表情から検知されたデータをもとに匂いを決めています。</P>
            <P>そのため、カメラをオンにする必要があります。</P>
            {children}<br/>
            <Small>取得した顔のデータは、このサイトのみの使用に限定され、このサイトを離れると破棄されます</Small>
        </Artcale>
    )
}