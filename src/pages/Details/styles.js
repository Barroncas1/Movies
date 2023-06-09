import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
    "header"
    "content";
    
    > main {
        grid-area: content;
        overflow-y: auto;
        padding: 64px 0;

        
    }
`

export const Content = styled.div`
        max-width: 1115px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;

        .tags {
            margin: 40px 0;
        }
        p {
            font-size: 16px;
            text-align: justify;
        }
`