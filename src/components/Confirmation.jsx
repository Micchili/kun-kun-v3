import React from 'react'
import styled from 'styled-components'

const BackGround = styled.div`
    z-index: 1;
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: rgb(0,0,0,0.6);
    opacity: ${({ fade }) => (fade === "entered" ? 0.4 : 0)};
    display: ${({ fade }) => (fade === "exited" ? "none" : "block")};
`

const Artcale = styled.article`
    padding: 30px;
    z-index: 100;
    height: 400px;
    width: 750px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border: solid 5px #444444;
    border-radius: 50px;
    background-color: #FFFFFF;
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
      <>
        <BackGround fade={isFade} />
        <Artcale fade={isFade}>
            <P>このサイトでは、表情から検知されたデータをもとに匂いを決めています。</P>
            <P>そのため、くんくんを使うにはカメラをオンにする必要があります。</P>
            {children}<br/>
            <Small>取得した顔のデータは、このサイトのみの使用に限定され、このサイトを離れると破棄されます</Small>
        </Artcale>
      </>
    )
}