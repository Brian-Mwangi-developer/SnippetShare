"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { MdAutoDelete, MdDarkMode, MdFavoriteBorder, MdOutlineBorderAll, MdOutlineLightMode } from "react-icons/md";
import { TbLogout } from "react-icons/tb";

// Define the shape of your context type
interface GlobalContextType {
  SideBarMenu: SideBarMenu[];
  setSideBarMenu: React.Dispatch<React.SetStateAction<SideBarMenu[]>>;
  darkMode: DarkModeType[];
  setDarkMode: React.Dispatch<React.SetStateAction<DarkModeType[]>>
}

// Define the shape of a SideBarMenu item
interface SideBarMenu {
  id: number;
  name: string;
  isSelected: boolean;
  icons: React.ReactNode;
}
interface DarkModeType{
    id:number,
    icon:React.ReactNode,
    isSelected:boolean
}

// Create the context with an initial value of undefined to handle missing context errors
const ContextProvider = createContext<GlobalContextType | undefined>(undefined);

// Create a context provider component
export default function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [SideBarMenu, setSideBarMenu] = useState<SideBarMenu[]>([
    {
      id: 1,
      name: "All Snippets",
      isSelected: true,
      icons: <MdOutlineBorderAll />,
    },
    {
      id: 2,
      name: "Favorite Snippets",
      isSelected: false,
      icons: <MdFavoriteBorder />,
    },
    {
      id: 3,
      name: "Deleted Snippets",
      isSelected: false,
      icons: <MdAutoDelete  />,
    },
    {
        id:4,
        name:"Log Out",
        isSelected:false,
        icons: <TbLogout />
    }
  ]);
  const [darkMode,setDarkMode] = useState<DarkModeType[]>([
    {
        id:1,
        icon:<MdOutlineLightMode />,
        isSelected:true
    },
    {
        id:2,
        icon:<MdDarkMode />,
        isSelected:false,
    }
  ])
  const value:GlobalContextType={
    SideBarMenu,
    setSideBarMenu,
    darkMode,
    setDarkMode
  }

  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
}

// Create a custom hook to access the context
export const useGlobalContext = () => {
  const context = useContext(ContextProvider);
  
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalContextProvider");
  }
  
  return context;
};
