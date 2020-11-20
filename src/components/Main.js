import styled from 'styled-components'

export const Main = styled.main`
    width: 100vw;
    height: 95vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ bgColor }) => (bgColor)};
`