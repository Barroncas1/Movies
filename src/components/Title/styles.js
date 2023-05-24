import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    .title{
        display: flex;
        align-items: center;
       
    }
    
    h1 {
        
        font-size: 36px;
        font-weight: 500;
        margin-right: 20px;
    }

    svg {
        color: ${({theme}) => theme.COLORS.PINK};
    }
    
    img {
        border-radius: 50%;
        height: 16px;
        width: 16px;
    }

    div:nth-child(2) {
        display: flex;
        gap: 8px;
        align-items: center;

        font-size: 16px;


        svg {
            align-self: center;
        }
    }
`

export const Stars = styled.div`
    display: flex;
    gap: 10px;
    svg {
        height: 30px;
        width: 30px;
    }
`