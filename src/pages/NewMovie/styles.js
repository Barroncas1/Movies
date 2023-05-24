import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;

    grid-template-areas:
    "header"
    "content";

    > main {
        grid-area: content;
        width: 1115px;
        overflow-y: auto;
        margin: 40px auto;

        display: flex;
        flex-direction: column;
        gap: 40px;

        .inputs{
            display: flex;
            gap: 40px;
        }

        h2 {
            font-size: 20px;
            font-weight: 400;
            color:  ${({theme}) => theme.COLORS.C_I};
        }

        .tags {
            display: flex;
            padding: 16px;
            gap: 24px;
            border-radius: 8px;
            background-color: ${({theme}) => theme.COLORS.BG_900};
        }

        .buttons{
            display: flex;
            gap: 40px;
        }
    }
`