import { Container } from "./styles";
import { MdDeleteOutline } from "react-icons/md";
import { useAuth } from "../../contexts/Auth";
import api from "../../services/api";
import { toast } from "react-toastify";
interface Ioptions {
  visible: boolean;
  id: string;
  posts: () => void;
  setVisible: (visible: boolean) => void;
}
export const Options = ({ visible, id, posts, setVisible }: Ioptions) => {
  const { token, setToken, setUserId } = useAuth();
  const removePost = async (id: string) => {
    try {
      await api.delete(`/post/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setVisible(false);
      posts();
      toast.success("Postagem deletada!");
    } catch {
      await posts();
      await setToken("");
      await setUserId("");
      await localStorage.removeItem("@pop/token");
      await localStorage.removeItem("@pop/userId");
      setVisible(false);

      toast.error("Faça o login");
    }
  };
  return (
    <Container visible={visible}>
      <div className="Remove" onClick={() => removePost(id)}>
        <MdDeleteOutline />
        <span>Excluir</span>
      </div>
    </Container>
  );
};
