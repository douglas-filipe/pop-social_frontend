import { toast } from "react-toastify";
import { useAuth } from "../contexts/Auth";
import { useMenu } from "../contexts/Menu";

export const ErrorRequestAxios = async () => {
  const { setToken } = useAuth();
  const { setOpenMenu } = useMenu();
  await setToken("");
  await localStorage.removeItem("@pop/token");
  await setOpenMenu(true);
  toast.error("Sessão expirada");
};

export const Signup = async () => {
  const { setToken, setUserId } = useAuth();
  const { setOpenMenu } = useMenu();
  await setToken("");
  await setUserId("");
  await localStorage.removeItem("@pop/token");
  await localStorage.removeItem("@pop/userId");
  await setOpenMenu(true);
  toast.error("Faça o login");
};
