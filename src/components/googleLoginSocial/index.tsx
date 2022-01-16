import GoogleLogin from "react-google-login";
import { toast } from "react-toastify";
import { useAuth } from "../../contexts/Auth";
import { useMenu } from "../../contexts/Menu";
import api from "../../services/api";

const clientId =
  "339792488943-f2ubcchdn05gaoar412j38qcsoeuof58.apps.googleusercontent.com";

interface IgoogleProps {
  login: boolean;
}

export const GoogleLoginSocial = ({ login }: IgoogleProps) => {
  const { setToken, setUserId } = useAuth();
  const { setOpenMenu } = useMenu();

  const responseGoogleLogin = async (response: any) => {
    const {
      profileObj: { email, googleId },
    } = response;
    try {
      const response = await api.post("/users/login", {
        password: googleId,
        email,
      });
      const token = await response.data.token;
      const user_id = await response.data._id;
      await setToken(token);
      await setUserId(user_id);
      await localStorage.setItem("@pop/token", token);
      await localStorage.setItem("@pop/userId", user_id);
      await toast.success("Você conseguiu entrar!");
      setOpenMenu(false);
    } catch (error) {
      toast.error("Conta google não vinculada");
    }
  };

  const responseGoogleSignup = async (response: any) => {
    const {
      profileObj: { email, googleId, name },
    } = response;
    try {
      await api.post("/users/register", {
        password: googleId,
        email,
        name,
      });
      const response = await api.post("/users/login", {
        password: googleId,
        email,
      });
      const token = await response.data.token;
      const user_id = await response.data._id;
      await setToken(token);
      await setUserId(user_id);
      await localStorage.setItem("@pop/token", token);
      await localStorage.setItem("@pop/userId", user_id);
      await toast.success("Você conseguiu entrar!");
      setOpenMenu(false);
    } catch (error) {
      toast.error("Conta google já cadastrada!");
    }
  };

  return (
    <>
      <GoogleLogin
        className="LoginGoogle"
        clientId={clientId}
        buttonText="Continuar com o Google"
        onSuccess={login ? responseGoogleLogin : responseGoogleSignup}
        theme="dark"
      />
    </>
  );
};
