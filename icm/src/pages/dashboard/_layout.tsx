import { GeralPage } from "./Geral";
import { ScraperPage } from "./Scraper";
import { ConversasPage } from "./Conversas";
import { JSX } from "react";

export type Page = "Geral" | "Scraper" | "Conversas";

const pageMap: Record<Page, JSX.Element> = {
  Geral: <GeralPage />,
  Scraper: <ScraperPage />,
  Conversas: <ConversasPage />,
};

interface DashboardLayoutProps {
  activePage: Page;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  activePage,
}: {
  activePage: Page;
}) => {
  return (
    <div className="bg-darkBlue w-full h-full text-white">
      {pageMap[activePage] ?? <h1>voce ta perdido meu nego </h1>}
    </div>
  );
};
