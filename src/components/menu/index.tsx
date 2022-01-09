import { Container } from "./styles";
import { HiUserCircle } from "react-icons/hi";
import { ModalUser } from "../modalUser";
import { useMenu } from "../../contexts/Menu";

export const Menu = () => {
  const { openMenu, setOpenMenu } = useMenu();
  return (
    <>
      <Container>
        {openMenu ? (
          <HiUserCircle onClick={() => setOpenMenu(false)} />
        ) : (
          <HiUserCircle onClick={() => setOpenMenu(true)} />
        )}
      </Container>
      <ModalUser />
    </>
  );
};
