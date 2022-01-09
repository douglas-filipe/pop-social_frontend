import { ContextProp } from "../types/AuthContext";
import { AuthProvider } from "./Auth";
import { MenuProvider } from "./Menu";
import { PostsProvider } from "./Posts";

export const Providers = ({ children }: ContextProp) => {
  return (
    <MenuProvider>
      <PostsProvider>
        <AuthProvider>{children}</AuthProvider>
      </PostsProvider>
    </MenuProvider>
  );
};
