import { Container } from './styles'

export function Header(){
    return(
        <Container>
            <h2>Movies</h2>

            <input type="text" placeholder='Pesquisar pelo título' />

            <Profile>
                <div>
                    <strong>Gabriel Barroncas</strong>
                    <span>sair</span>
                </div>
                <img src="https://github.com/Barroncas1.png" alt="foto do usuário" />
            </Profile>
        </Container>
    )
}