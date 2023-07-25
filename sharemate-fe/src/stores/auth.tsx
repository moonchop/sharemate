import create from "zustand";
import { persist } from "zustand/middleware";
interface Token {
  accessToken: string;
  refreshToken: string;
  setToken: (token: tokenProps) => void;
}

interface tokenProps {
  accessToken: string;
  refreshToken: string;
}

export const useAuth = create(
  persist<Token>(
    (set) => ({
      accessToken: "",
      refreshToken: "",
      setToken: (token: tokenProps) => {
        set((state) => ({
          accessToken: token.accessToken,
          refreshToken: token.refreshToken,
        }));
      },
    }),
    {
      name: "auth-storage",
      getStorage: () => localStorage,
    }
  )
);
