import { Container } from "./styles";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import api from "../../services/api";
import { useAuth } from "../../contexts/Auth";
import { useMenu } from "../../contexts/Menu";
import { toast } from "react-toastify";
import { useState } from "react";
import moment from "moment";
import { Options } from "../options";
import jwt_decode from "jwt-decode";

interface Iprops {
  imgUrl: string;
  author: string | undefined;
  description: string;
  id: string;
  likes: string[];
  id_user: string;
  token: string;
  posts: () => void;
  createdAt: string;
  id_user_post: string;
}

interface Itoken {
  _id: string;
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
  createdAt,
  id_user_post,
}: Iprops) => {
  const { setToken, setUserId } = useAuth();
  const { setOpenMenu } = useMenu();
  const likePost = async (id: string, token: string) => {
    const decoded: Itoken = jwt_decode(token);
    const { _id } = decoded;
    const teste = "";
    likes.push(_id);

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

  const deslikePost = async (id: string, token: string) => {
    const teste = "";

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

  const formatData = (date: String) => {
    const data = moment(date as string).format("DD/MM/YYYY");
    return data;
  };

  const [visible, setVisible] = useState<boolean>(false);

  return (
    <Container>
      <Options
        visible={visible}
        id={id}
        posts={posts}
        setVisible={setVisible}
      />

      <div className="Image">
        <header className="Header">
          <div className="User">
            <div className="Photo">{author?.substring(0, 1)}</div>
            <div className="NameAuthorDate">
              <span>{author}</span>
              <span>{formatData(createdAt)}</span>
            </div>
          </div>
          {id_user_post === id_user ? (
            <>
              {visible ? (
                <div className="Options" onClick={() => setVisible(false)}>
                  <FiMoreHorizontal />
                </div>
              ) : (
                <div className="Options" onClick={() => setVisible(true)}>
                  <FiMoreHorizontal />
                </div>
              )}
            </>
          ) : (
            <></>
          )}
        </header>
        <p className="Description">{description ? description : ""}</p>
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
        <div className="Reaction" onClick={() => deslikePost(id, token)}>
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
