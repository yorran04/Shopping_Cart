import styled from "styled-components";


export const Container = styled.div`
 
 width:100%;


`

export const Content = styled.div`
 width :100%;
 height: auto;
 max-width: 300px;
 border-radius: 10px;
 background-color: white;
 display: flex;
 align-items: center;
 flex-direction: column;
 margin: 0 auto;
 position: relative;


img{
    width: 100%;
    border-radius: 10px;
}

.card_infos{
    width: 100%;
    padding: 20px;
    border-top: 1px solid #ddd;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.card_price{
    font-size: 25px;
    font-weight: 400;
    display: block;
    margin-bottom: 10px;
}

.card_title{
    font-size: 15px;
    color: rgba(0,0,0,0.5);
    line-height: 1.5;
}

button{
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    margin: 10px 10px;
    border: none;
    background: rgba(255,255,255,0.8);
    color: #0c5dd6;
    font-size: 1.2rem;
    cursor: pointer;
}


&:hover{
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

&:hover button{
    display: flex;
}
`