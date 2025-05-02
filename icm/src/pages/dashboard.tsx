import { SideBar } from "../components/Sidebar";
import { TopBar } from "../components/Topbar";

export default function Dashboard() {
  return (
    <div className="flex bg-superBlack">
      <SideBar />
      <div className="flex flex-col w-full">
        <TopBar />
        <div className="bg-darkBlue w-full h-full text-white">
          <h1>bem vindo ao meu lar</h1>
        </div>
      </div>
    </div>
  );
}
