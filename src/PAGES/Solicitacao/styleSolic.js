import styled from "styled-components";

export const Geral = styled.div`
  width: auto;
  heigth: auto;
  padding: 4px;
  margin: 4px;
  
`;

export const PaginaLista= styled.div`
  display: ${props => props.onOff ? 'block' : 'none'};
  width: 100%;
  heigth: auto;
  background-color: #f3f3f3;
`;

export const PaginaCad = styled.div`
  display: ${props => props.onOff ? 'block' : 'none'};
  width: 100%;
  heigth: auto;
`;

export const Titulo = styled.div`
  width: 100%;
  heigth: auto;
  text-align: center;
  color: #228b22;
  background-color: #fff;
  border-bottom: 1px solid #000;
`;

export const Box = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  margin: 4px;
  background-repeat: no-repeat;
  padding: 10px 14px;
`;

export const BtnRow = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  margin: 4px;
  padding: 4px
`;

export const InputBox = styled.div`
width: 250px
display: flex;
flex-direction: column;
margin: 2px;
padding: 2px;

h2{
  padding: 0px;
  margin: 0px;
  font-size: 10px
  text-align: left;    
}
input{
  width: 100%
}
`;
export const card = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin: 2px;
border: 1px solid #000;
border-radius: 10px;
padding: 2px;

h2{
  padding: 0px;
  margin: 0px;
  font-size: 10px
  text-align: left;    
}
input{
  width: 100%
}
`;

export const BoxForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  align-items: center;
  text-align: left;
  margin: 4px;
  padding: 4px;
`;

export const BotaoDiv = styled.div`
  width: 250px;
  height: auto;
  background-color: #000;
  border: 1px solid #fff;
  cursor: point;
  border-radius: 10px;
  margin: 4px;
  padding: 6px 4px;

  h2 {
    color: #fff;
  }

  :hover {
    background-color: #f00;
  }
`;

export const Rodape = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
  border: 1px solid #000;
  text-align: center;

  img{
    width: 200px;
    height: auto
  }
`;
