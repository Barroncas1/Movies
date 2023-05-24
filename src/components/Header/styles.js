import styled from 'styled-components'

export const Container = styled.div`
    grid-area: header;
    width: 100%;
    
    display: flex;
    align-items: center;
    gap: 64px;
    justify-content: center;

    margin: auto;

    padding: 30px  0;

    border-bottom: 1px solid ${({theme}) => theme.COLORS.BORDER} ;

    input {
        border: none;
        background-color: ${({theme}) => theme.COLORS.BG_INPUT};
        color: ${({theme}) => theme.COLORS.COLOR_INPUT};

        height: 56px;
        width: 650px;

        padding: 24px 19px;

        border-radius: 10px;
    }

    h2 {
        color: ${({theme}) => theme.COLORS.PINK};
        font-size: 24px;
        font-weight: 700;
    }

`

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 9px;

    div {
        display: flex;
        flex-direction: column;

        span {
            color: ${({theme}) => theme.COLORS.COLOR_INPUT};
            align-self: end;
        }

    }

    img {
        border-radius: 50%;
        height: 64px;
        width: 64px;
    }

`