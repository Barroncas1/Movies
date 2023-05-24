import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    padding: 32px;
    background-color: ${({theme}) => theme.COLORS.PINK_100};
    border-radius: 16px;

    h1 {
        font-size: 24px;
        font-weight: 700;
    }

    p{
        text-align: justify;
    }

    .stars{
        display: flex;
        gap: 6px;

        svg {
            color: ${({theme}) => theme.COLORS.PINK};
        }
    }

`