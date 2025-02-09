import { PookiePageListTypes } from "@/app/dashboard/page";
import { createContext, useContext } from "react";

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
