import { Container } from "./styles";
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Tags } from '../../components/Tags'
import { NoteItem } from "../../components/NoteItem";

export function NewMovie(){
    return(
        <Container>
            <Header />
            <main>
                <ButtonText title="Voltar" isActive/>
                <h1>Novo filme</h1>
                <div className="inputs">
                    <Input placeholder="Título"/>
                    <Input placeholder="Sua nota de (0 a 5)"/>
                </div>
                <Textarea placeholder="Observações"/>
                <h2>Marcadores</h2>
                <div className="tags">
                    <NoteItem value="React" />
                    <NoteItem isNew placeholder="Nova tag" />
                </div>
            </main>
        </Container>
    )
}