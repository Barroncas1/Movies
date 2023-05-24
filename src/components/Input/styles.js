import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.BG_INPUT};
    color: ${({theme}) => theme.COLORS.C_I};
    border-radius: 10px;
    
    > input {
        height: 56px;
        width: 100%;
        padding: 18px 16px;

        color: ${({theme}) => theme.COLORS.C_I};
        background: transparent;
        border: 0;

        &:placeholder{
            color: ${({theme}) => theme.COLORS.C_I};
        }
        
    }

`