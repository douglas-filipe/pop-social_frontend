import { HiLogout } from "react-icons/hi";
import { useAuth } from "../../contexts/Auth";
import { useMenu } from "../../contexts/Menu";
import { GoogleLoginSocial } from "../googleLoginSocial";
import { Container } from "./styles";

export const ModalUser = () => {
  const { openMenu, setOpenMenu } = useMenu();
  const { token, setToken, setUserId } = useAuth();
  const Logout = async () => {
    await localStorage.removeItem("@pop/userId");
    await localStorage.removeItem("@pop/token");
    setToken("");
    setUserId("");
    setOpenMenu(false);
    window.location.reload();
  };
  return (
    <Container openMenu={openMenu}>
      {token ? (
        <div className="Logado">
          <p>Bem vindo</p>
          <div onClick={Logout}>
            <HiLogout /> Sair
          </div>
        </div>
      ) : (
        <>
          <h1>Faça login</h1>
          <GoogleLoginSocial login />
          <h1>Crie sua conta</h1>
          <GoogleLoginSocial login={false} />
        </>
      )}
    </Container>
  );
};
