import { Button } from "../../components/Button"
import { Header } from "../../components/Header"


import { Container, Content } from "./styles"

export function Details(){
    return(
        <Container>
            <Header />
            <main>
                <Content>
                    <Button title="AAA"  disabled/>
                </Content>
            </main>
        </Container>
    )
}