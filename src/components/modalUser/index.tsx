import { useMenu } from "../../contexts/Menu";
import { GoogleLoginSocial } from "../googleLoginSocial";
import { Container } from "./styles";

export const ModalUser = () => {
  const { openMenu } = useMenu();
  return (
    <Container openMenu={openMenu}>
        <h1>Faça login</h1>
        <GoogleLoginSocial login/>
        <h1>Crie sua conta</h1>
        <GoogleLoginSocial login={false}/>
    </Container>
  );
};
