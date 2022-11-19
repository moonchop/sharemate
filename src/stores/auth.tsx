import create from "zustand";

interface Token {
  accessToken: string;
  refreshToken: string;
  setToken: (token: tokenProps) => void;
}

interface tokenProps {
  accessToken: string;
  refreshToken: string;
}

export const useAuth = create<Token>((set) => ({
  accessToken: "",
  refreshToken: "",
  setToken: (token: tokenProps) => {
    set((state) => ({
      accessToken: token.accessToken,
      refreshToken: token.refreshToken,
    }));
  },
}));
