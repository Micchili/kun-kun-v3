import React from 'react'
import styled from 'styled-components'
import { Transition } from "react-transition-group"
import { Title } from '../components/Title'
import { Confimation } from '../components/Confirmation'

const Button = styled.button`
    width: 220px;
    height: 50px;
    border: solid 2px #c864d1;
`

const Buttons = styled.div`
    display: flex;
    justify-content: space-around;
`

export const Home = () => {
    const [fade, changeFade] = React.useState(false)

    const handleChangeFade = () => {
        changeFade(fade === false ? true : false)
    }

    return(
        <div>
            <Title title={"くんくん"} />
            <Button onClick={handleChangeFade}>使ってみる</Button>
            <Transition in={fade} timeout={200}>
                {(state) => (
                <Confimation isFade={state}>
                    <Buttons>
                        <Button>同意する</Button>
                        <Button>拒否する</Button>
                    </Buttons>
                </Confimation>
            )}
            </Transition>
        </div>
    )
}