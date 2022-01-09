import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { AuthProviderData, ContextProp } from "../../types/AuthContext";
import { IPosts } from "../../types/Posts";
import { IPostsProviderData } from "../../types/PostsProviderData";

const PostsContext = createContext<IPostsProviderData>(
  {} as IPostsProviderData
);

export const PostsProvider = ({ children }: ContextProp) => {
  const [posts, setPosts] = useState<IPosts[]>([]);
  const reqPosts = async () => {
    const response = await api.get("/post");
    setPosts(response.data);
  };

  useEffect(() => {
    reqPosts();
  }, []);

  return (
    <PostsContext.Provider value={{ reqPosts, posts }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);
