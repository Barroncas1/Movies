import { Container } from "./styles";

export function Button({title, loading=false, symble=false, ...rest}){
    return(
        <Container
            type="button"
            disabled={loading}
            symble={symble}
            {...rest}
            
        >
            {symble ? none : symble}
            {loading ? "Carregando...": title}
        </Container>
    )
}