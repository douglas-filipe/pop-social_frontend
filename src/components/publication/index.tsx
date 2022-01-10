import { Container } from "./styles";
import { HiPhotograph } from "react-icons/hi";
import { useState } from "react";
import api from "../../services/api";
import { useAuth } from "../../contexts/Auth";
import { toast } from "react-toastify";
import { useMenu } from "../../contexts/Menu";
import { usePosts } from "../../contexts/Posts";

interface PublicationProps {
  reqPosts: () => void;
}

export const Publication = ({ reqPosts }: PublicationProps) => {
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [textArea, setTextArea] = useState<any>(null);
  const { token } = useAuth();
  const { setOpenMenu } = useMenu();
  const { setPostsTeste } = usePosts();
  const handleSubmit = async (event: any) => {
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
      setPostsTeste("novo");
      reqPosts();
    } catch {
      toast.error("Faça o login antes");
      setOpenMenu(true);
    }
  };

  const handleFileSelect = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <Container>
      <h1>Criar publicação</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <textarea
            placeholder="No que você está pensando?"
            onChange={(e) => setTextArea(e.target.value)}
          ></textarea>
        </div>
        <label htmlFor="photo" className="File">
          <HiPhotograph />
          Enviar Foto
        </label>
        <input type="file" id="photo" onChange={handleFileSelect} />

        <button type="submit">Publicar</button>
      </form>
    </Container>
  );
};
