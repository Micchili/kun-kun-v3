import React from 'react'
import styled from 'styled-components'
import { Transition } from "react-transition-group"
import { Title } from '../components/Title'
import { Confimation } from '../components/Confirmation'
import { Button } from '../components/Button'
import { Link } from 'react-router-dom'

const Buttons = styled.div`
    display: flex;
    justify-content: space-around;
`

const BackGround = styled.div`
    
`

export const Home = () => {
    const [fade, changeFade] = React.useState(false)

    const handleOnFade = () => {
        changeFade(true)
    }

    const handleOffFade = () => {
        changeFade(false)
    }

    return(
        <div>
            <Title title={"くんくん"} />
            <Button onClick={handleOnFade}>使ってみる</Button>
            <Transition in={fade} timeout={200}>
            {(state) => (
                <Confimation isFade={state}>
                    <Buttons>
                        <Link to={"/camera"}>
                          <Button>同意する</Button>
                        </Link>
                        <Button onClick={handleOffFade}>拒否する</Button>
                    </Buttons>
                </Confimation>
            )}
            </Transition>
        </div>
    )
}