import { useState } from "react";
import { NavTitle } from "./NavTitle";

interface topBarProps {
  activePage: "Geral" | "Scraper" | "Conversas";
  setActivePage: (page: "Geral" | "Scraper" | "Conversas") => void;
}

export const TopBar: React.FC<topBarProps> = ({
  activePage,
  setActivePage,
}) => {
  return (
    <div className="flex align-center justify-center items-end h-32 min-w-[calc(100vw-16rem)]  bg-midBlue">
      {/* <h1 className="text-white">não seja bem vindo ao meu lar</h1> */}
      <NavTitle
        text="Geral"
        isActive={activePage === "Geral"}
        onClick={() => {
          setActivePage("Geral");
        }}
        condition={false}
      />
      <NavTitle
        text="Scraper"
        isActive={activePage === "Scraper"}
        onClick={() => {
          setActivePage("Scraper");
        }}
        condition={false}
      />
      <NavTitle
        text="Conversas"
        isActive={activePage === "Conversas"}
        onClick={() => {
          setActivePage("Conversas");
        }}
        condition={false}
      />
    </div>
  );
};
