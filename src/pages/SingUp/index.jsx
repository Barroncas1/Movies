import { Container, Form, Background } from "./styles";
import{ Input } from '../../components/Input'
import { FiMail, FiUser, FiLock } from "react-icons/fi";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";


export function SingUp(){

    function handleSinIn(){
        const navigate = useNavigate()
        navigate("/") 
    }

    return(
        <Container>
            <Background />
            <Form>
                <h1>Movies</h1>
                <p>Aplicação para acompanhar tudo o que assistir </p>
                <h2>Crie sua conta</h2>
                <Input icon={FiUser} placeholder="Nome" />
                <Input icon={FiMail} placeholder="E-mail" />
                <Input icon={FiLock} placeholder="Senha" />
                <Button title="Cadastrar" />
                <ButtonText 
                    title="Voltar para o login"
                    onClick={handleSinIn}
                />
                

            </Form>
            
        </Container>
    )
}