import { Container, NewMovie, Content, Hmain } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import {AiOutlinePlus} from "react-icons/ai"
import { Note } from "../../components/Note";
import { Scrollbar } from "../../components/Scrollbar";

export function Home(){
    return(
        <Container>
            <Header />
            <main>
                <Hmain>
                    <h1>Meus Filmes</h1>
                    <NewMovie>
                        <AiOutlinePlus />
                        Adicionar filme
                    </NewMovie>
                </Hmain>
                <Content>
                    <Note data={{
                        title: "Interestelar",
                        tags: [
                            {id: '1', name: "Ficção científica"},
                            {id: '2', name: "Drama"},
                            {id: '3', name: "Família"},
                        ]
                    }} />
                    <Note data={{
                        title: "Interestelar",
                        tags: [
                            {id: '1', name: "Ficção científica"},
                            {id: '2', name: "Drama"},
                            {id: '3', name: "Família"},
                        ]
                    }} />
                    
                </Content>
            </main>
        </Container>

    )
}
