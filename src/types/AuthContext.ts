import { ReactNode } from "react";

export interface AuthProviderData {
  userId: string;
  token: string;
  reqLogin: (Data: DataForm) => void;
  setToken: (token: string) => void;
  setUserId: (token: string) => void;
}

export interface ContextProp {
  children: ReactNode;
}

export interface DataForm {
  email: string;
  password?: string;
  name?: string;
}

