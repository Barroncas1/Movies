import { Container } from "./styles";
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Tags } from '../../components/Tags'
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button"

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
                <div className="buttons">
                    <Button title="Excluir filme" disabled/>
                    <Button title="Salvar alterações" />
                </div>
            </main>
        </Container>
    )
}