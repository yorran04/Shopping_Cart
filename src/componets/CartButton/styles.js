import styled from "styled-components";


export const Botao = styled.button`

    padding: 5px;
    background: none;
    border: none;
    font-size: 1.5rem;
    position: relative;
    cursor: pointer;
    color: #333;

    display: flex;
    align-items: center;
  
    span{
        background-color: red;
        width: 15px;
        height: 15px;
        border-radius: 15px;
        color: white;
        font-size: 11px;
        font-weight: 600;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        top: 0;
        left: 0;

       
    }

`