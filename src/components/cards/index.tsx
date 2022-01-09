import { useEffect, useState } from "react";
import api from "../../services/api";
import { IPosts } from "../../types/Posts";
import { Card } from "../card";

export const Cards = () => {
  const [posts, setPosts] = useState<IPosts[]>([]);
  useEffect(() => {
    reqPosts();
  }, []);

  const reqPosts = async () => {
    const response = await api.get("/post");
    setPosts(response.data);
  };

  return (
    <>
      {posts.map((item) => {
        return <Card key={item._id} imgUrl={item.imgUrl} author={item.author.name} description={item.description}/>;
      })}
    </>
  );
};
