import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    main {
        max-width: 1115px;
        margin: 50px auto;
    }
`

export const Hmain = styled.div`
    display: flex;
    justify-content: space-between;
`

export const NewMovie = styled.button`
    background-color: ${({theme}) => theme.COLORS.PINK};
    color: ${({theme}) => theme.COLORS.BG_800};
    display: flex;
    text-align: center;
    align-items: center;
    gap: 8px;

    border-radius: 8px;
    padding: 14px 32px;


    svg {
        color: ${({theme}) => theme.COLORS.BG_800};
    }
`

export const Content = styled.div`

`