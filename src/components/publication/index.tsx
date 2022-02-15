import { Container } from "./styles";
import { HiPhotograph } from "react-icons/hi";
import { useState } from "react";
import api from "../../services/api";
import { useAuth } from "../../contexts/Auth";
import { toast } from "react-toastify";
import { useMenu } from "../../contexts/Menu";
import { ScaleLoader } from "react-spinners";
import io from "socket.io-client";
const socket = io("ws://localhost:3000");

interface PublicationProps {
  reqPosts: () => void;
}

export const Publication = ({ reqPosts }: PublicationProps) => {
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [textArea, setTextArea] = useState<string>("");
  const [sendLoading, setSendLoading] = useState<boolean>(false);
  const { token, setToken, setUserId } = useAuth();
  const { setOpenMenu } = useMenu();
  const handleSubmit = async (event: any) => {
    setSendLoading(true);
    event.preventDefault();
    const formData = new FormData();
    formData.append("img", selectedFile);
    formData.append("description", textArea);
    try {
      await api.post("/post", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Postagem criada!");
      setSendLoading(false);
      reqPosts();
    } catch {
      setSendLoading(false);
      toast.error("Faça o login antes");
      setToken("");
      setOpenMenu(true);
      await setUserId("");
      localStorage.removeItem("@pop/token");
      await localStorage.removeItem("@pop/userId");
    }
  };

  const handleFileSelect = (event: any) => {
    setSelectedFile(event.target.files[0]);
    setImageName(event.target.files[0].name);
  };
  const [imageName, setImageName] = useState<string>("");
  return (
    <Container className="disable-select">
      <h1 className="disable-select">Criar publicação</h1>
      <form onSubmit={handleSubmit} id="form">
        <div>
          <textarea
            required={true}
            placeholder="No que você está pensando?"
            onChange={(e) => setTextArea(e.target.value)}
          ></textarea>
        </div>
        <label htmlFor="photo" className="File">
          <HiPhotograph />
          <span>{imageName ? imageName : "Enviar foto"}</span>
        </label>
        <input type="file" id="photo" onChange={handleFileSelect} />

        <button type="submit" disabled={sendLoading}>
          {sendLoading ? (
            <ScaleLoader color="white" height={"15px"} />
          ) : (
            <>Publicar</>
          )}
        </button>
      </form>
    </Container>
  );
};
