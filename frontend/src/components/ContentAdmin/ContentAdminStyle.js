import styled from "styled-components";

export const ContainerContentAdmin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Figtree', sans-serif;
    margin-top: 20px;
`

export const MainContentAdmin = styled.div`
    width: 500px;
    background: #fff;
    padding: 20px;
    box-shadow: 0px 0px 8px gray;

    summary::before {
        content: '+';
        margin-right: -222px;
        animation: blink-animation 1s steps(5, start) infinite;
        -webkit-animation: blink-animation 1s steps(5, start) infinite;
    }

    details[open] summary:before {
        content: "-";
        margin-right: -222px;
        animation: blink-animation 1s steps(5, start) infinite;
        -webkit-animation: blink-animation 1s steps(5, start) infinite;
    }

    details {
        p {
            margin-top: 20px;
        }
    }
    
    summary {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #46B241;
        font-size: 20px;
        font-weight: 700;

        a {
            color: #46B241;
            text-decoration: none;
            display: flex;
            align-items: center;
            font-size: 16px;
            font-weight: 700;
            transition-duration: 0.3s;
        }

        a:hover {
            color: #DCDCDC;
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
        }
    }
    
`