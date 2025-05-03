import { useState } from "react";
import { SideBar } from "../components/Sidebar";
import { TopBar } from "../components/Topbar";
import { DashboardLayout } from "./dashboard/_layout";

export default function Dashboard() {
  type Page = "Geral" | "Scraper" | "Conversas";

  const [activePage, setActivePage] = useState<Page>("Geral");

  return (
    <div className="flex bg-superBlack">
      <SideBar />
      <div className="flex flex-col w-full">
        <TopBar activePage={activePage} setActivePage={setActivePage} />
        <DashboardLayout activePage={activePage} />
      </div>
    </div>
  );
}
