import { Container, Stars } from "./styles";
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'
import {FiClock} from 'react-icons/fi'


export function Title({title, stars, ...rest}){
    return(
        <Container>
            
            <div className="title">
                <h1>{title}</h1>
                <Stars>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                </Stars>
            </div>

            <div>
                <img src="https://github.com/barroncas1.png" alt="foto de usuário" />

                <span>Por Gabriel Barroncas </span>
                <FiClock />
                <span> 23/05/22 às 08:00</span>

            </div>
        </Container>
    )
}