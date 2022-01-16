import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { ContextProp } from "../../types/AuthContext";
import { IPostsProviderData } from "../../types/PostsProviderData";

const PostsContext = createContext<IPostsProviderData>(
  {} as IPostsProviderData
);

export const PostsProvider = ({ children }: ContextProp) => {
  const [postsTeste, setPostsTeste] = useState<string>("");
  const reqPosts = async () => {
    const response = await api.get("/post");
    setPostsTeste(response.data);
  };

  useEffect(() => {
    reqPosts();
  }, []);

  return (
    <PostsContext.Provider value={{ reqPosts, postsTeste, setPostsTeste }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);
