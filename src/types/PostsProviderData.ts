import { IPosts } from "./Posts";

export interface IPostsProviderData {
  reqPosts: () => void;
  postsTeste: string;
  setPostsTeste: (data: string) => void;
}
