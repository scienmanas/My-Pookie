import { createContext, useContext } from "react";

// Define Pookie Page type
export interface PookiePageListTypes {
  id: string;
  name: string;
  linkName: string;
  visitCount: number;
  accepted: boolean;
  lastVisited: string;
  createdAt: string;
  type: string;
}

interface PookiePageListContextType {
  pookiePageList: PookiePageListTypes[] | null;
  setPookiePageList: React.Dispatch<
    React.SetStateAction<PookiePageListTypes[] | null>
  >;
}

// Create a context with default value as undefined
export const PookiePageListContext = createContext<
  PookiePageListContextType | undefined
>(undefined);

// Custom hook to use context safely
export function usePookiePageList() {
  const context = useContext(PookiePageListContext);
  if (!context) {
    throw new Error("usePookiePages must be used within a PookiePagesProvider");
  }
  return context;
}
