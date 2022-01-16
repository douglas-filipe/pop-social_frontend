import { Container } from "./styles";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import api from "../../services/api";
import { useAuth } from "../../contexts/Auth";
import { useMenu } from "../../contexts/Menu";
import { toast } from "react-toastify";
import { useState } from "react";

interface Iprops {
  imgUrl: string;
  author: string | undefined;
  description: string;
  id: string;
  likes: string[];
  id_user: string;
  token: string;
  posts: () => void;
}

export const Card = ({
  imgUrl,
  author,
  description,
  id,
  likes,
  id_user,
  token,
  posts,
}: Iprops) => {
  const { setToken, setUserId } = useAuth();
  const { setOpenMenu } = useMenu();
  const likePost = async (id: string, token: string) => {
    const teste = "";
    likes.push(id);
    console.log(likes);
    try {
      await api.put(
        `/post/like/${id}`,
        { teste },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      posts();
    } catch {
      await posts();
      await setToken("");
      await setUserId("");
      await localStorage.removeItem("@pop/token");
      await localStorage.removeItem("@pop/userId");
      await setOpenMenu(true);

      toast.error("Faça o login");
    }
  };

  return (
    <Container>
      <div className="Image">
        <header className="User"></header>
        <p>{description ? description : ""}</p>
        {imgUrl ? <img src={imgUrl} alt="Post" /> : <span></span>}
        <div className="QuantityLikes">
          {likes.length > 0 ? (
            <>
              <AiFillLike />
              <span>{likes.length}</span>
            </>
          ) : (
            <span></span>
          )}
        </div>
      </div>

      {likes.includes(id_user) ? (
        <div className="Reaction" onClick={() => likePost(id, token)}>
          <AiFillLike />
          <span>Curtir</span>
        </div>
      ) : (
        <div className="Reaction" onClick={() => likePost(id, token)}>
          <AiOutlineLike />
          <span>Curtir</span>
        </div>
      )}
    </Container>
  );
};
