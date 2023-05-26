import { Container } from "./styles";
import {BsArrowLeft} from "react-icons/bs"

export function ButtonText({title, isActive = false, ...rest}){
    return(
     <Container
        type="button"
        isActive={isActive}
        {...rest}
     >
       {isActive ? <BsArrowLeft /> : ""}
        {title}
     </Container>   
    )
}