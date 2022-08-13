import styled from "styled-components";

export const ContainerLoginPage = styled.div`
        width: 100vw;
        height: 90vh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Figtree', sans-serif;
`

export const ContainerConteudoLoginPage = styled.div`
    width: 400px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
    flex-direction: column;
    background: #fff;
    border-radius: 5px;
    border: 1px solid #46B241;
    box-shadow: 1px 2px 8px #46B241;
    color: #46B241;

    h1 {
        margin: 0 auto;
        margin-bottom: 40px;
        font-weight: 800;
    }

    label {
        font-weight: 600;
        font-size: 16px;
        margin-bottom: 5px;
    }

    input {
        width: 100%;
        height: 30px;
        margin-bottom: 20px;
        font-size: 16px;
    }

    button {
        width: 100%;
        height: 35px;
        margin-bottom: 20px;
        font-size: 16px;
        color: #46B241;
        font-weight: 500;
        cursor: pointer;
    }

    a {
        margin: 0 auto;
        text-decoration: none;
        font-weight: 400;
    }
`