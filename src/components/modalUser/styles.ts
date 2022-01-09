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
`;
