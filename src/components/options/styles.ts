import styled from "styled-components";

interface optionsProps {
  visible: boolean;
}

export const Container = styled.div<optionsProps>`
  background: #010710;
  color: white;
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 20px;
  position: absolute;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  right: 20px;
  top: 30px;
  font-size: 18px;
  cursor: pointer;
  .Remove {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
