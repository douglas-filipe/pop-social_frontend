import styled from "styled-components";

interface Ireactions {
  visible: boolean;
}

export const Container = styled.div<Ireactions>`
  width: 250px;
  background-color: #131019;
  border-radius: 10px;
  height: 60px;
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  transition: 0.3s;
  svg {
    width: 35px;
    height: 35px;
    color: white;
  }
  svg:hover{
    transform: translateY(-2px);
    transform: scale(120%);
    transition: 0.3s;
  }
`;
