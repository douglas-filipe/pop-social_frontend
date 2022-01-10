import { useEffect, useState } from "react";
import { usePosts } from "../../contexts/Posts";
import api from "../../services/api";
import { IPosts } from "../../types/Posts";
import { Card } from "../card";
import { Publication } from "../publication";
import { FadeLoader } from "react-spinners";
import { Container } from "./styles";

export const Cards = () => {
  const [posts, setPosts] = useState<IPosts[]>([]);
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
