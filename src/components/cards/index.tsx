import { useEffect, useState } from "react";
import api from "../../services/api";
import { IPosts } from "../../types/Posts";
import { Card } from "../card";
import { Publication } from "../publication";
import { FadeLoader } from "react-spinners";
import { Container } from "./styles";
import { useAuth } from "../../contexts/Auth";

export const Cards = () => {
  const { token } = useAuth();
  const [posts, setPosts] = useState<IPosts[]>([]);
  const { userId } = useAuth();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const reqLoading = async () => {
      await reqPosts();
      setLoading(true);
    };
    reqLoading();
  }, []);

  const reqPosts = async () => {
    const response = await api.get("/post");
    setPosts(response.data);
  };

  return (
    <Container>
      <Publication reqPosts={reqPosts} />
      {loading ? (
        <>
          {posts.map((item) => {
            return (
              <Card
                key={item._id}
                imgUrl={item.imgUrl}
                author={item.author.name}
                description={item.description}
                id={item._id}
                likes={item.likes}
                id_user={userId ? userId : ""}
                token={token}
                posts={reqPosts}
                createdAt={item.createdAt}
                id_user_post={item.author._id}
              />
            );
          })}
        </>
      ) : (
        <FadeLoader color="white" />
      )}
    </Container>
  );
};
