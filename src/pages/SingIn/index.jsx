import { Container, Form, Background } from "./styles";
import{ Input } from '../../components/Input'
import { FiMail, FiLock } from "react-icons/fi";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function SingIn(){
    return(
        <Container>
            <Form>
                <h1>Movies</h1>
                <p>Aplicação para acompanhar tudo o que assistir </p>
                <h2>Faça Login</h2>
                <Input icon={FiMail} placeholder="E-mail" />
                <Input icon={FiLock} placeholder="Senha" />
                <Button title="Entrar" />
                <Link to="/register"> Criar conta</Link>

            </Form>
            
            <Background />
        </Container>
    )
}