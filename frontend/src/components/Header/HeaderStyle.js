import styled from "styled-components";

export const ContainerHeader = styled.div`
    width: 100vw;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #46B241;

    nav {
        display: flex;
        margin-right: 30px;
    }
    
    a {
        color: #ffff;
        text-decoration: none;
        display: flex;
        align-items: center;
        font-weight: 600;
        margin-right: 20px;
        margin-left: 20px;
    }

    a:hover {
        color: #DCDCDC;
    }

    img {
        margin-left: 30px;
    }
`
