import styled from "styled-components";

interface ImenuProps {
  openMenu: boolean;
}

export const Container = styled.div<ImenuProps>`
  width: 250px;
  padding: 20px;
  height: 200px;
  background-color: #140929;
  position: absolute;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateX(50%);
  right: 50%;
  visibility: ${(props) => (props.openMenu ? "visible" : "hidden")};

  h1 {
    color: white;
    font-size: 1.2rem;
    margin: 20px;
  }

  .Logado{
    color: white;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    p{
      font-size: 18px;
    }
    >div{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      &:hover{
        border-bottom: 1px solid #1470c7;
      }

      svg{
        color: #c83d3d;
        width: 30px;
        height: 30px;
      }
    }
  }
`;
