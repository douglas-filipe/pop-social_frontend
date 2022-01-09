import GoogleLogin from "react-google-login";
import { toast } from "react-toastify";
import { useAuth } from "../../contexts/Auth";
import { useMenu } from "../../contexts/Menu";
import api from "../../services/api";

const clientId =
  "748847660432-0ami3kf5cho790k0nllpq3mkafar58u8.apps.googleusercontent.com";

interface IgoogleProps {
  login: boolean;
}

export const GoogleLoginSocial = ({ login }: IgoogleProps) => {
  const { setToken } = useAuth();
  const {setOpenMenu} = useMenu()

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
      await setToken(token);
      await localStorage.setItem("@pop/token", token);
      await toast.success("Você conseguiu entrar!")
      setOpenMenu(false)
    } catch (error) {
      console.log("error");
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
      await setToken(token);
      await localStorage.setItem("@pop/token", token);
      await toast.success("Você conseguiu entrar!")
      setOpenMenu(false)
    } catch (error) {
      console.log("Error");
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
