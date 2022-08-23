import styled from "styled-components";

export const ContainerHeaderAdmin = styled.div`
    width: 100vw;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-right: auto;
    margin-left: auto;
    background: #46B241;
    font-family: 'Figtree', sans-serif;
    box-shadow: 0px 0px 8px gray;

    a {
        color: #fff;
        text-decoration: none;
        display: flex;
        align-items: center;
        font-weight: 700;
        margin-top: 20px;
        transition-duration: 0.3s;
    }

    a:hover {
        color: #DCDCDC;
        box-shadow: 0 0 10px #46B241;
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
`

export const ContainerInput = styled.div`
    background-color: rgba(255, 255, 255, 0.2);
    padding: 15px;
    margin-top: 20px;
    height: 18px;
    display: flex;
    border-radius: 8px;
    box-shadow: 1px 3px 8px rgba(0,0,0, 0.5);

    input {
        background-color: transparent;
        border: 0;
        width: 300px;
        font-size: 20px;
        color: white;
        outline: none;
        margin-right: 8px;
    }

    button {
        background-color: transparent;
        border: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: transform 0.5s;
    }

    button:hover {
        transform: scale(1.2);
    }
`
