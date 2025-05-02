import { SideBar } from "../components/Sidebar";
import { TopBar } from "../components/Topbar";

export default function Dashboard() {
  return (
    <div className="flex bg-superBlack">
      <SideBar />
      <div className="flex flex-col w-full">
        <TopBar />
        <div className="bg-darkBlue w-full h-full text-white">
          <button className="btn btn-primary ">eu sou botão</button>
          <h1>bem vindo ao meu lar</h1>
        </div>
      </div>
    </div>
  );
}
