
import { Container, Form, Avatar } from "./styles";
import { Input } from "../../components/Input";
import {ButtonText} from "../../components/ButtonText";
import { FiArrowLeft, FiMail, FiUser, FiLock, FiCamera } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function Perfil(){
    return(
        <Container>
            <header>
                <Link to="/">
                    <ButtonText title="Voltar" isActive/>
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/barroncas1.png" alt="foto de usuário" />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input id="avatar" type="file" />
                    </label>

                </Avatar>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />
                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />
                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                />
                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Salvar" />
            </Form>
        </Container>
    )
}